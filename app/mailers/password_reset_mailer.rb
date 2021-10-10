class PasswordResetMailer < ApplicationMailer

  def reset
    p "params: #{params[:user].email}"
    @user = User.find_by(email: params[:user].email)
    @token = @user.signed_id(purpose: "password_reset", expires_in: 15.minutes)

    mail(
      from: "contact@gowebme.co.uk",
      to: @user.email,
      subject: "Password Reset"
      )
  end
end
