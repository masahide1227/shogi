class AddGameRecodeToPosts < ActiveRecord::Migration[7.1]
  def change
    add_column :posts, :game_recode, :string
  end
end
