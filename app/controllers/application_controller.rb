class ApplicationController < ActionController::Base
  protect_from_forgery with: :exception
  require 'rspotify'

  def main
    RSpotify.authenticate("b5092625791e49bdb99aee61a0f82050", "8eac192692a6492d81c82f62e5bc44e7")
  end
end
