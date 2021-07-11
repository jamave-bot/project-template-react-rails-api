class CreatePets < ActiveRecord::Migration[6.1]
  def change
    create_table :pets do |t|
      t.string :name
      t.integer :age
      t.string :species
      t.belongs_to :user, null: false, foreign_key: true

      t.timestamps
    end
  end
end
