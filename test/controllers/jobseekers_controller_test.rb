require "test_helper"

class JobseekersControllerTest < ActionDispatch::IntegrationTest
  setup do
    @jobseeker = jobseekers(:one)
  end

  test "should get index" do
    get jobseekers_url
    assert_response :success
  end

  test "should get new" do
    get new_jobseeker_url
    assert_response :success
  end

  test "should create jobseeker" do
    assert_difference('Jobseeker.count') do
      post jobseekers_url, params: { jobseeker: { address: @jobseeker.address, contact: @jobseeker.contact, email: @jobseeker.email, firstname: @jobseeker.firstname, job_title: @jobseeker.job_title, lastname: @jobseeker.lastname, password: @jobseeker.password, password_confirmation: @jobseeker.password_confirmation } }
    end

    assert_redirected_to jobseeker_url(Jobseeker.last)
  end

  test "should show jobseeker" do
    get jobseeker_url(@jobseeker)
    assert_response :success
  end

  test "should get edit" do
    get edit_jobseeker_url(@jobseeker)
    assert_response :success
  end

  test "should update jobseeker" do
    patch jobseeker_url(@jobseeker), params: { jobseeker: { address: @jobseeker.address, contact: @jobseeker.contact, email: @jobseeker.email, firstname: @jobseeker.firstname, job_title: @jobseeker.job_title, lastname: @jobseeker.lastname, password: @jobseeker.password, password_confirmation: @jobseeker.password_confirmation } }
    assert_redirected_to jobseeker_url(@jobseeker)
  end

  test "should destroy jobseeker" do
    assert_difference('Jobseeker.count', -1) do
      delete jobseeker_url(@jobseeker)
    end

    assert_redirected_to jobseekers_url
  end
end
