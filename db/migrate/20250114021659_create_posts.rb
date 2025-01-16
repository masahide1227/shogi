class CreatePosts < ActiveRecord::Migration[7.1]
  def change
    create_table :posts do |t|
      t.battle_type
      t.string :game_recode
      t.string :text
      t.timestamps
    end
  end
end
