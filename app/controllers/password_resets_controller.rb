class PasswordResetsController < ApplicationController

  def create
    @jobseeker = Jobseeker.find_by(email: params[:email])
    
    if @jobseeker.present?
      PasswordResetMailer.with(jobseeker: @jobseeker).reset.deliver_now
      render json: {
        status: :created,
        message: "Please check your email for a verification link."
      }
    else
      render json: {
        status: 500,
        message: "If an account with that email exists, a reset link will be sent."
      }
    end
  end   

  def update 
    @jobseeker = Jobseeker.find_signed!(params[:token], purpose: "password_reset")
    
    if @jobseeker.present?
      @jobseeker.update(
        password: params[:password],
        password_confirmation: params[:password_confirmation]
      )
      render json: {
        message: "Your password has been succesfully reset. Please log in",
        status: 200
      }
    else 
      render json: {
        message: "Your password reset has been unsuccessful, please try again",
        status: 422
      } 
    end
  end
end