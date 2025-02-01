class PostsController < ApplicationController
  def new
    @post = Post.new
  end

  def create
    @post = Post.new(post_params)
    @post.user_id = current_user.id
    if @post.save
      redirect_to post_path(@post.id)
    else
      render :new, status: :unprocessable_entity
    end
  end

  def index
    @posts = Post.published.page(params[:page]).per(9).reverse_order
    if params[:search].present? 
      @posts = @posts.where('battle_type LIKE ?', "%#{params[:search]}%")
    end

    words_count = Hash.new(0)
    Post.where(status: 'published').pluck(:battle_type).each do |battle_type|
      battle_type.split("VS").each do |word|
        word.strip! # 前後の空白を削除
        words_count[word] += 1 unless word.empty?
      end
    end
    @rankings = words_count.sort_by { |_, count| -count }.first(5).to_h
  end

  def show 
    @post = Post.find(params[:id])
    @comment = Comment.new
    @comments = @post.comments.page(params[:page]).per(4).reverse_order
  end

  def edit
    @post = Post.find(params[:id])
  end

  def update
    @post = Post.find(params[:id])
    if @post.update(post_params)
      redirect_to post_path(@post.id)
    else
      render :edit, status: :unprocessable_entity
    end
  end

  def destroy
    post = Post.find(params[:id])
    post.destroy
    redirect_to posts_path
  end
  
  def confirm
    @posts = current_user.posts.draft.page(params[:page]).per(6).reverse_order
  end

  def rankings
    @rankings = Post.where(status: 'published').group(:battle_type).order('count_all DESC').limit(3).count
  end

  private
  def post_params
    params.require(:post).permit(:game_recode, :text, :battle_type, :image, :user_id, :status)
  end
end

