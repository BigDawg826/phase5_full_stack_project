class Song < ApplicationRecord
    belongs_to :album 
    has_many :user_likes
    has_many :users, through: :user_likes
end
