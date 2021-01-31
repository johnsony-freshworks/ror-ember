class User < ActiveRecord::Base
	has_many :events, dependent: :destroy
	has_many :comments, dependent: :destroy

	acts_as_authentic do |c|
		c.login_field = :email
		c.crypto_provider = Authlogic::CryptoProviders::Sha512
	end
end
