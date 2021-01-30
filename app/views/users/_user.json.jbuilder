json.extract! user, :id, :email, :name, :crypted_password, :password_salt, :persistence_token, :authentication_token, :perishable_token, :single_access_token, :created_at, :updated_at
json.url user_url(user, format: :json)
