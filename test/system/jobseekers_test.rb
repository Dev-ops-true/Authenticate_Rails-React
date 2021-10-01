require "application_system_test_case"

class JobseekersTest < ApplicationSystemTestCase
  setup do
    @jobseeker = jobseekers(:one)
  end

  test "visiting the index" do
    visit jobseekers_url
    assert_selector "h1", text: "Jobseekers"
  end

  test "creating a Jobseeker" do
    visit jobseekers_url
    click_on "New Jobseeker"

    fill_in "Address", with: @jobseeker.address
    fill_in "Contact", with: @jobseeker.contact
    fill_in "Email", with: @jobseeker.email
    fill_in "Firstname", with: @jobseeker.firstname
    fill_in "Job title", with: @jobseeker.job_title
    fill_in "Lastname", with: @jobseeker.lastname
    fill_in "Password", with: @jobseeker.password
    fill_in "Password confirmation", with: @jobseeker.password_confirmation
    click_on "Create Jobseeker"

    assert_text "Jobseeker was successfully created"
    click_on "Back"
  end

  test "updating a Jobseeker" do
    visit jobseekers_url
    click_on "Edit", match: :first

    fill_in "Address", with: @jobseeker.address
    fill_in "Contact", with: @jobseeker.contact
    fill_in "Email", with: @jobseeker.email
    fill_in "Firstname", with: @jobseeker.firstname
    fill_in "Job title", with: @jobseeker.job_title
    fill_in "Lastname", with: @jobseeker.lastname
    fill_in "Password", with: @jobseeker.password
    fill_in "Password confirmation", with: @jobseeker.password_confirmation
    click_on "Update Jobseeker"

    assert_text "Jobseeker was successfully updated"
    click_on "Back"
  end

  test "destroying a Jobseeker" do
    visit jobseekers_url
    page.accept_confirm do
      click_on "Destroy", match: :first
    end

    assert_text "Jobseeker was successfully destroyed"
  end
end
