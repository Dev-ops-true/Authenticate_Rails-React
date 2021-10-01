class JobseekersController < ApplicationController
  protect_from_forgery with: :null_session
  before_action :set_jobseeker, only: %i[ show edit update destroy ]

  # GET /jobseekers or /jobseekers.json
  def index
    @jobseekers = Jobseeker.all
  end

  # GET /jobseekers/1 or /jobseekers/1.json
  def show
  end

  # GET /jobseekers/new
  def new
    @jobseeker = Jobseeker.new
  end

  # GET /jobseekers/1/edit
  def edit
  end

  # POST /jobseekers or /jobseekers.json
  def create
    @jobseeker = Jobseeker.create(
      firstname: params['firstname'],
      lastname: params['lastname'],
      contact: params['contact'],
      email: params['email'],
      address: params['address'],
      job_title: params['job_title'],
      password: params['password']  
    )

    if @jobseeker.save
      render json: {
        status: :created,
        message: "You have succesfully registered an account. Welcome to Avondale Recruitment."
      }
    else
      render json: {
        status: :unprocessable_entity,
        message: "We were unable to process your information. Please complete all required fields."
      }
    end
  end

  # PATCH/PUT /jobseekers/1 or /jobseekers/1.json
  def update
    if @jobseeker.update(jobseeker_params)
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

  # DELETE /jobseekers/1 or /jobseekers/1.json
  def destroy
    @jobseeker.destroy
    render json: {
      status: :deleted,
      message: "You have succesfully deleted your account."
    }
  end

  private
    # Use callbacks to share common setup or constraints between actions.
    def set_jobseeker
      @jobseeker = Jobseeker.find(params[:id])
    end

    # Only allow a list of trusted parameters through.
    def jobseeker_params
      params.require(:jobseeker).permit(:firstname, :lastname, :contact, :email, :address, :job_title, :password, :password_confirmation)
    end
end
