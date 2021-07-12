class UserSerializer < ActiveModel::Serializer
  attributes :id, :username
  has_many :pets
  has_many :appointments
end
