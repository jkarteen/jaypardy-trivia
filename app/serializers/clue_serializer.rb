class ClueSerializer < ActiveModel::Serializer
  attributes :id, :answer, :question, :value, :answered

  belongs_to :category
end
