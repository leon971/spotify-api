Rails.application.routes.draw do
  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html
  root 'users#index'
  get '/auth/spotify/callback', to: 'users#spotify'
  get '/main', to: 'users#main'
  post '/find_tracks', to: 'users#find_tracks'
  post '/get_user_info', to: 'users#get_user_info'
  post '/get_user_tracks', to: 'users#get_user_tracks'
  post '/add_track', to: 'users#add_track'
  post '/del_track', to: 'users#del_track'
  post '/logout', to: 'users#logout'
end
