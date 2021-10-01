class SessionsController < ApplicationController
  include CurrentUserConcern

  def create
    @jobseeker = Jobseeker.find_by(email: params["email"]).try(:authenticate, params["password"])
    
    if @jobseeker
      session[:jobseeker_id] = @jobseeker.id
      render json: {
        status: :created,
        logged_in: true,
        jobseeker: @jobseeker
      }
    else
      render json: { status: 401 }
    end
  end

  def logged_in
    
    if @current_jobseeker
      render json: {
        logged_in: true,
        jobseeker: @current_jobseeker 
      }
    else 
      render json: {
        logged_in: false,
        check: session[:jobseeker_id]
      }
    end
  end

  def logout
    reset_session
    render json: { status: 200, logged_out: true }
  end
end