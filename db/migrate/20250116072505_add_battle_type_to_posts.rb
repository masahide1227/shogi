class AddBattleTypeToPosts < ActiveRecord::Migration[7.1]
  def change
    add_column :posts, :battle_type, :string
  end
end
