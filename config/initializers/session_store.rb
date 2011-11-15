# Be sure to restart your server when you modify this file.

# Your secret key for verifying cookie session data integrity.
# If you change this key, all old sessions will become invalid!
# Make sure the secret is at least 30 characters and all random, 
# no regular words or you'll be exposed to dictionary attacks.
ActionController::Base.session = {
  :key         => '_i-savant.com_session',
  :secret      => 'f63a5d0a53d5aab11ac6c417b8d7c14e6e33a526f47fd710e42aaf6c715912e6b9cd8d428780f26431d5752c3ef5757591bb8834ea5c78965cfb66511994e74e'
}

# Use the database for sessions instead of the cookie-based default,
# which shouldn't be used to store highly confidential information
# (create the session table with "rake db:sessions:create")
# ActionController::Base.session_store = :active_record_store
