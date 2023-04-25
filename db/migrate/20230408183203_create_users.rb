class CreateUsers < ActiveRecord::Migration[7.0]
  def change
    create_table :users do |t|
      t.string :name
      t.string :user_name
      t.string :password_digest
      t.string :avatar
      t.string :email
      t.string :phone
      t.boolean :admin

      t.timestamps
    end
  end
end
