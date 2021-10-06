class SessionsController < ApplicationController
  include CurrentJobseekerConcern

  def create
    jobseeker = Jobseeker.find_by(email: params["email"]).try(:authenticate, params["password"])
    if jobseeker
      session[:jobseeker_id] = jobseeker.id
      render json: {
        status: :created,
        loggedInStatus: "LOGGED_IN",
        jobseeker: jobseeker
      }
    else
      render json: { status: 401 }
    end
  end

  def logged_in
    if @current_jobseeker
      render json: {
        loggedInStatus: "LOGGED_IN",
        jobseeker: @current_jobseeker 
      }
    else 
      render json: {
        loggedInStatus: "NOT_LOGGED_IN"
      }
    end
  end

  def logout
    reset_session
    render json: { 
      status: 200, 
      loggedInStatus: "NOT_LOGGED_IN" 
    }
  end
end