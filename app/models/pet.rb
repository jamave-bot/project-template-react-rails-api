class Pet < ApplicationRecord
  belongs_to :user
  has_many :appointments

  validates :name, presence: true
  validates :age, presence: true, numericality: {greater_than: 0}
  validates :species, presence: true
end
