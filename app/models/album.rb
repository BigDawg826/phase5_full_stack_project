class Album < ApplicationRecord
    belongs_to :artist
    has_many :songs, dependent: :destroy
    has_many :user_comments
    has_many :users, through: :user_comments
end
