class Clue < ApplicationRecord
  validates :answer, presence: true
  validates :question, presence: true
  validates :value, numericality: {
    only_integer: true,
    greater_than_or_equal_to: 100,
    less_than_or_equal_to: 2000,
    allow_nil: true
  }
  validates :answered, inclusion: { in: [true, false] }

  belongs_to :category
  # belongs_to :user
end