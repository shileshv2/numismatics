class CreateCoins < ActiveRecord::Migration[5.1]
  def change
    create_table :coins do |t|
      t.string :title
      t.text :description
      t.string :code

      t.timestamps
    end
  end
end
