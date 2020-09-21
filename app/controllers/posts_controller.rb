class PostsController < ApplicationController
  before_action :set_post, only: [:show, :edit, :update, :destroy]

  def index
    @post = Post.includes(:user).order("created_at DESC").limit(10)
  end

  def new
    @post = Post.new
  end

  def create
    @post = Post.new(post_params)
    if @post.save
      redirect_to posts_path
    else
      render :new
    end
  end

  def show
  end

  def edit
  end

  def update
    if @post.update(post_params)
        redirect_to posts_path
    else
        render :edit
    end
end

  def destroy
    @post.destroy
      redirect_to posts_path
  end

  private

  def post_params
    params.require(:post).permit(:title, :content, :image).merge(user_id: current_user.id)
  end
end

  def set_post
    @post = Post.find(params[:id])
  end