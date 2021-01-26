class User < ActiveRecord::Base
	has_many :event
	has_many :comment

	acts_as_authentic do |c|
		c.login_field = :email
		c.crypto_provider = Authlogic::CryptoProviders::Sha512
	end # the configuration block is optional
end
