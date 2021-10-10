class SessionsController < ApplicationController
  include CurrentUserConcern

  def create
    user = User.find_by(email: params["email"]).try(:authenticate, params["password"])
    if user
      session[:user_id] = user.id
      render json: {
        status: :created,
        loggedInStatus: "LOGGED_IN",
        user: user
      }
    else
      render json: { status: 401 }
    end
  end

  def logged_in
    if @current_user
      render json: {
        loggedInStatus: "LOGGED_IN",
        user: @current_user 
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