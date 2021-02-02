class MailWorker
  include Sidekiq::Worker
  sidekiq_options retry: false

  def perform(id)
  	puts "User ID #{id}"
  	user = User.find(id)
  	puts "User Email #{user.email}"
  	UserMailer.welcome_email(user).deliver_now
  end

end
