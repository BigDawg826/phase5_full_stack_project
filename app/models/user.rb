class User < ApplicationRecord
    has_secure_password
    has_many :user_likes
    has_many :user_comments
    has_many :songs, through: :user_likes
    has_many :albums, through: :user_comments
end
