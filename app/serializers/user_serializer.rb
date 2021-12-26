class UserSerializer < ActiveModel::Serializer
  attributes :id, :username, :first_name, :last_name, :email, :games_played, :profile_photo

  has_many :scores
end
