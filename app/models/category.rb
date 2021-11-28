class Category < ApplicationRecord
  validates :title, presence: true

  has_many :clues
  has_many :users, through: :clues
end