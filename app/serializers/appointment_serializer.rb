class AppointmentSerializer < ActiveModel::Serializer
  attributes :id, :service, :date, :time, :location
  has_one :pet
end
