class CreateJobseekers < ActiveRecord::Migration[6.1]
  def change
    create_table :jobseekers do |t|
      t.string :firstname
      t.string :lastname
      t.string :contact
      t.string :email
      t.string :address
      t.string :job_title
      t.string :password_digest

      t.timestamps
    end
  end
end
