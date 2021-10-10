class PasswordResetsController < ApplicationController

  def create
    @user = User.find_by(email: params[:email])

    if @user.present?
      PasswordResetMailer.with(user: @user).reset.deliver_now
      render json: {
        status: :created,
        message: "Please check your email for a verification link.",
        user: @user
      }
    else
      render json: {
        status: 500,
        message: "If an account with that email exists, a reset link will be sent."
      }
    end
  end   

  def update 
    @user = User.find_signed!(params[:token], purpose: "password_reset")
    
    if @user.present?
      @user.update(
        password: params[:password],
        password_confirmation: params[:password_confirmation]
      )
      render json: {
        message: "Your password has been succesfully reset. Please log in",
        status: 200,
        user: @user
      }
    else 
      render json: {
        message: "Your password reset has been unsuccessful, please try again",
        status: 422
      } 
    end
  end
end