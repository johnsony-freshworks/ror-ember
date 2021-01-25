class CreateEvents < ActiveRecord::Migration
  def change
    create_table :events do |t|
      t.text :description
      t.datetime :start
      t.datetime :end
      t.boolean :private

      t.timestamps null: false
    end
  end
end
