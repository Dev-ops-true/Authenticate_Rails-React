module CurrentJobseekerConcern
  extend ActiveSupport::Concern

  included do
    before_action :set_current_jobseeker
  end

  def set_current_jobseeker
    if session[:jobseeker_id]
      @current_jobseeker = Jobseeker.find(session[:jobseeker_id])
    end
  end
end