# Be sure to restart your server when you modify this file.

# Your secret key for verifying cookie session data integrity.
# If you change this key, all old sessions will become invalid!
# Make sure the secret is at least 30 characters and all random, 
# no regular words or you'll be exposed to dictionary attacks.
ActionController::Base.session = {
  :key         => '_i-savant.com_session',
  :secret      => '386cc2e2ee442c947622d37cc78761ae4c42e49dab3fa80493932a2c32214ab1b8eea79074682c08c386c9238962b60e0460efc75d402361c837fdd6b8d8c2a4'
}

# Use the database for sessions instead of the cookie-based default,
# which shouldn't be used to store highly confidential information
# (create the session table with "rake db:sessions:create")
# ActionController::Base.session_store = :active_record_store
