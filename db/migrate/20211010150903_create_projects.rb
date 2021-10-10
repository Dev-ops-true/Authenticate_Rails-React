class CreateProjects < ActiveRecord::Migration[6.1]
  def change
    create_table :projects do |t|
      t.string :project_name
      t.string :scope
      t.string :address
      t.float :labour_costs
      t.float :materials_cost
      t.float :expenses
      t.string :client

      t.timestamps
    end
  end
end
