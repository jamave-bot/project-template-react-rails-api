class AppointmentSerializer < ActiveModel::Serializer
  attributes :id, :service, :date, :time, :location, :pet_id
  has_one :pet
end
