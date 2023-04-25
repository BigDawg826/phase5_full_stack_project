class CreateAlbums < ActiveRecord::Migration[7.0]
  def change
    create_table :albums do |t|
      t.string :title
      t.integer :artist_id
      t.string :label
      t.integer :release_year
      t.string :image

      t.timestamps
    end
  end
end
