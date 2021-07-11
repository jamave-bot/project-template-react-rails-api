class PetSerializer < ActiveModel::Serializer
  attributes :id, :name, :age, :species
  has_one :user
end
