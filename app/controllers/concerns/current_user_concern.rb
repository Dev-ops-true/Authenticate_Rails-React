module CurrentUserConcern
  extend ActiveSupport::Concern

  included do
    before_action :set_current_user
  end

  def set_current_user
    if session[:jobseeker_id]
      @current_user = Jobseeker.find(session[:jobseeker_id])
    end
  end
end