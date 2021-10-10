require "application_system_test_case"

class ProjectsTest < ApplicationSystemTestCase
  setup do
    @project = projects(:one)
  end

  test "visiting the index" do
    visit projects_url
    assert_selector "h1", text: "Projects"
  end

  test "creating a Project" do
    visit projects_url
    click_on "New Project"

    fill_in "Address", with: @project.address
    fill_in "Client", with: @project.client
    fill_in "Expenses", with: @project.expenses
    fill_in "Labour costs", with: @project.labour_costs
    fill_in "Materials cost", with: @project.materials_cost
    fill_in "Project name", with: @project.project_name
    fill_in "Scope", with: @project.scope
    click_on "Create Project"

    assert_text "Project was successfully created"
    click_on "Back"
  end

  test "updating a Project" do
    visit projects_url
    click_on "Edit", match: :first

    fill_in "Address", with: @project.address
    fill_in "Client", with: @project.client
    fill_in "Expenses", with: @project.expenses
    fill_in "Labour costs", with: @project.labour_costs
    fill_in "Materials cost", with: @project.materials_cost
    fill_in "Project name", with: @project.project_name
    fill_in "Scope", with: @project.scope
    click_on "Update Project"

    assert_text "Project was successfully updated"
    click_on "Back"
  end

  test "destroying a Project" do
    visit projects_url
    page.accept_confirm do
      click_on "Destroy", match: :first
    end

    assert_text "Project was successfully destroyed"
  end
end
