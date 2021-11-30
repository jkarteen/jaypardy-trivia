class CreateScores < ActiveRecord::Migration[6.1]
  def change
    create_table :scores do |t|
      t.integer :total, null: false, default: 0

      t.belongs_to :user

      t.timestamps
    end
  end
end
