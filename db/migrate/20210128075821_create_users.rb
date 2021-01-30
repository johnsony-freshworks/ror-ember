class CreateUsers < ActiveRecord::Migration
  def change
    create_table :users do |t|
      t.string :email
      t.string :name
      t.string :crypted_password
      t.string :password_salt
      t.string :persistence_token
      t.string :authentication_token
      t.string :perishable_token
      t.string :single_access_token

      t.timestamps null: false
    end
  end
end
