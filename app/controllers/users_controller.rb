class UsersController < ApplicationController
  protect_from_forgery with: :null_session
  before_action :set_user, only: %i[ show edit update destroy ]

  # GET /users or /users.json
  def index
    @users = User.all
  end

  # GET /users/1 or /users/1.json
  def show
  end

  # GET /users/new
  def new
    @user = User.new
  end

  # GET /users/1/edit
  def edit
  end

  # POST /users or /users.json
  def create
    @user = User.create(
      firstname: params['firstname'],
      lastname: params['lastname'],
      contact: params['contact'],
      email: params['email'],
      address: params['address'],
      company: params['company'],
      password: params['password']  
    )

    if @user.save
      render json: {
        status: :created,
        message: "You have succesfully registered an account.",
        user: @user
      }
    else
      render json: {
        status: :unprocessable_entity,
        message: "We were unable to process your information. Please complete all required fields."
      }
    end
  end

  # PATCH/PUT /users/1 or /users/1.json
  def update
    if @user.update(user_params)
      render json: {
        status: :updated,
        message: "You have succesfully updated your account."
      }
    else
      render json: {
        status: :unprocessable_entity,
        message: "We were unable to update your information. Please complete all required fields."
      }
    end
  end

  # DELETE /users/1 or /users/1.json
  def destroy
    @user.destroy
    render json: {
      status: :deleted,
      message: "You have succesfully deleted your account."
    }
  end

  private
    # Use callbacks to share common setup or constraints between actions.
    def set_user
      @user = User.find(params[:id])
    end

    # Only allow a list of trusted parameters through.
    def user_params
      params.require(:user).permit(:firstname, :lastname, :contact, :email, :address, :company, :password, :password_confirmation)
    end
end
