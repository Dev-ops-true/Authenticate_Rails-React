class PasswordResetMailer < ApplicationMailer

  def reset
    @jobseeker = Jobseeker.find_by(email: params[:jobseeker].email)
    @token = @jobseeker.signed_id(purpose: "password_reset", expires_in: 15.minutes)

    mail(
      from: "contact@gowebme.co.uk",
      to: @jobseeker.email,
      subject: "Password Reset"
      )
  end
end
