class AddTableProfiles < ActiveRecord::Migration[5.2]
  def change
    create_table :profiles do |t|
      t.references :model
      t.string :firstname
      t.string :lastname
      t.string :address
      t.string :address
    end
  end
end
