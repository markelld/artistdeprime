class PostsController < ApplicationController 
  before_action :authorize_request, only: [:create, :update, :destroy]
  before_action :set_post, only: [:show, :update, :destroy]
  # GET /posts
  def index
    @posts = Post.all

    render json: @posts, include: :user
  end

  # GET /posts/1
  def show
    @post = Post.find(params[:id])
    
    render json: @post, include: [:user, :comments], status: :ok 
  end 
   # , include: [:comment, :user],
    #inlude comments

  # POST /posts
  def create
    @post = Post.new(post_params) 
    @post.user = @current_user
    if @post.save
      render json: @post, include: :user, status: :created, location: @post
    else
      render json: @post.errors, status: :unprocessable_entity
    end
  end

  # PATCH/PUT /posts/1
  def update
    if @post.update(post_params)
      render json: @post, include: :user
    else
      render json: @post.errors, status: :unprocessable_entity
    end
  end

  # DELETE /posts/1
  def destroy 
    @post = Post.find(params[:id])
    
    @post.destroy
  end

  private
    # Use callbacks to share common setup or constraints between actions.
    def set_post
      @post = Post.find(params[:id]) 
    end

    # Only allow a list of trusted parameters through.
    def post_params
      params.require(:post).permit(:image_url, :caption ) 
      # params.require(:post).permit(:image_url, :caption, :user_id)
    end
end
