class AddFilenameToCharts < ActiveRecord::Migration
  def self.up
    add_column :charts, :filename, :string
  end

  def self.down
    remove_column :charts, :filename
  end
end
