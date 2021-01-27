class UserSession < Authlogic::Session::Base
	extend ActiveModel::Naming
  # specify configuration here, such as:
  logout_on_timeout true
  # ...many more options in the documentation
end