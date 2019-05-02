require 'rspotify/oauth'

Rails.application.config.middleware.use OmniAuth::Builder do
  provider :spotify, "b5092625791e49bdb99aee61a0f82050", "8eac192692a6492d81c82f62e5bc44e7", scope: 'user-read-email playlist-modify-public user-library-read user-library-modify'
end