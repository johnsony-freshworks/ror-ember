class User < ActiveRecord::Base
	acts_as_authentic do |c|
		c.login_field = :email
		c.crypto_provider = Authlogic::CryptoProviders::Sha512
	end # the configuration block is optional
end
