class CreateUserComments < ActiveRecord::Migration[7.0]
  def change
    create_table :user_comments do |t|
      t.integer :user_id
      t.integer :album_id
      t.text :comment

      t.timestamps
    end
  end
end
