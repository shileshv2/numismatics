# frozen_string_literal: true

class CreateTags < ActiveRecord::Migration[5.1]
  def change
    create_table :tags do |t|
      t.string :label
      t.belongs_to :coin

      t.timestamps
    end
  end
end
