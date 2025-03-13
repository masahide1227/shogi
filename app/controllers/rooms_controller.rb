class RoomsController < ApplicationController
  before_action :authenticate_user!

  def create
    user = User.find(params[:entry][:user_id]) # チャット相手のユーザー

    unless current_user.following?(user) && user.following?(current_user)
      redirect_to user_path(user), alert: "相互フォローのユーザーとしかチャットできません"
      return
    end

    existing_room = Room.joins(:entries)
                        .where(entries: { user_id: [current_user.id, user.id] })
                        .group("rooms.id")
                        .having("COUNT(rooms.id) = 2")
                        .first

    if existing_room
      redirect_to room_path(existing_room), notice: "既にルームが存在します"
      return
    end

    @room = Room.create
    Entry.create(user_id: current_user.id, room_id: @room.id)
    Entry.create(user_id: user.id, room_id: @room.id)

    redirect_to room_path(@room), notice: "チャットルームを作成しました"
  end

  def show
    @room = Room.find(params[:id])
    if Entry.where(user_id: current_user.id, room_id: @room.id).exists?
      @messages = @room.messages.order(created_at: :desc).page(params[:page]).per(5)
      @message = Message.new
      @entries = @room.entries  # 相手の名前を表示するため
      @myUserId = current_user.id
    else
      redirect_back(fallback_location: root_path)
    end
  end
end

