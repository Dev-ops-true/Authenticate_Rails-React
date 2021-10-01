json.extract! jobseeker, :id, :firstname, :lastname, :contact, :email, :address, :job_title, :password, :password_confirmation, :created_at, :updated_at
json.url jobseeker_url(jobseeker, format: :json)
