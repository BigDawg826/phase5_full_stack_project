class AlbumSerializer < ActiveModel::Serializer
  attributes :id, :title,:label, :release_year, :image, :artist_id, :artist_name
  has_many :user_comments

  def artist_name
    self.object.artist.name
  end

end
