class CreateClues < ActiveRecord::Migration[6.1]
  def change
    create_table :clues do |t|
      t.string :answer, null: false
      t.string :question, null: false
      t.integer :value
      t.boolean :answered, default: false

      t.belongs_to :category
      t.timestamps
    end
  end
end
