class CreateAppointments < ActiveRecord::Migration[6.1]
  def change
    create_table :appointments do |t|
      t.string :service
      t.string :date
      t.integer :time
      t.string :location
      t.belongs_to :pet, null: false, foreign_key: true

      t.timestamps
    end
  end
end
