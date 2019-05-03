class UsersController < ApplicationController
    protect_from_forgery with: :exception
    require 'rspotify'
    Track = Struct.new(:id)
    def index
    end
    
    def main 
    end

    def spotify
        spotify_user = RSpotify::User.new(request.env['omniauth.auth'])
        hash = spotify_user.to_hash
        session[:user_hash] = hash
        session[:user_loggedin] = 1
        redirect_to action: index
    end


    def find_tracks
        tracks = RSpotify::Track.search(params[:q].to_s, limit: 20)
        render json: { tracks: tracks }
    end

    def get_user_info
        if session[:user_loggedin].to_i == 1
            spotify_user = RSpotify::User.new(session[:user_hash])
            render json: {
                loggedin: 1,
                user_info: session[:user_hash],
                user_tracks: spotify_user.saved_tracks(limit:10)
            }
        else
            render json: {
                loggedin: 0,
                user_info: []
            }
        end
    end

    def logout
        session[:user_loggedin] = 0
    end

    def get_user_tracks
        spotify_user = RSpotify::User.new(session[:user_hash])
        render json: {
            user_tracks: spotify_user.saved_tracks(limit:10)
        }
    end

    def add_track
        track_id = params[:id]
        tracks = [Track.new(track_id)]
        spotify_user = RSpotify::User.new(session[:user_hash])
        spotify_user.save_tracks!(tracks)
    end

    def del_track
        track_id = params[:id]
        tracks = [Track.new(track_id)]
        spotify_user = RSpotify::User.new(session[:user_hash])
        spotify_user.remove_tracks!(tracks)
    end

    def logout
        session[:user_hash] = {}
        session[:user_loggedin] = 0
    end
  end
  