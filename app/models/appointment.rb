class Appointment < ApplicationRecord
  belongs_to :pet

  validates :service, presence: true
  validates :date, presence: true
  validates :time, presence: true
  validates :location, presence: true
end
