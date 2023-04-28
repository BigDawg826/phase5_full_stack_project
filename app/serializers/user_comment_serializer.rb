class UserCommentSerializer < ActiveModel::Serializer
  attributes :id, :user_id, :album_id, :comment, :username
  
def username
  self.object.user.user_name
end

end
