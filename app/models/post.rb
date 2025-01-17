class Post < ApplicationRecord

  attachment :image
  belongs_to :user
  has_many :comments, dependent: :destroy
  has_many :favorites, dependent: :destroy

  validates :battle_type, presence: true, length: { maximum: 20 }
  validates :game_recode, presence: true, length: { maximum: 1000 }
  validates :text, presence: true, length: { maximum: 1000 }

    def favorited_by?(user)
      favorites.where(user_id: user.id).exists?
    end
end
