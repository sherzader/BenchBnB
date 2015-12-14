class AddSeating < ActiveRecord::Migration
  def change
    drop_table :benches
    create_table :benches do |t|
      t.text :description, null: false
      t.float :lat, null: false
      t.float :lng, null: false
      t.integer :seating, null: false
      t.timestamps null: false
    end
  end
end
