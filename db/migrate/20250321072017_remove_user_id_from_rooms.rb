class RemoveUserIdFromRooms < ActiveRecord::Migration[7.1]
  def change
    remove_column :rooms, :user_id, :integer
  end
end
