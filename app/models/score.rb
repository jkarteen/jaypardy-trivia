class Score < ApplicationRecord
  validates :total, presence: true, numericality: { only_integer: true }

  belongs_to :user
end