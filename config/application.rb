require_relative 'boot'

require 'rails/all'
require 'rspotify'

# Require the gems listed in Gemfile, including any gems
# you've limited to :test, :development, or :production.
Bundler.require(*Rails.groups)

module SpotifyApp
  class Application < Rails::Application
    # Initialize configuration defaults for originally generated Rails version.
    config.load_defaults 5.1
    RSpotify::authenticate("b5092625791e49bdb99aee61a0f82050", "8eac192692a6492d81c82f62e5bc44e7")
    # Settings in config/environments/* take precedence over those specified here.
    # Application configuration should go into files in config/initializers
    # -- all .rb files in that directory are automatically loaded.
  end
end
