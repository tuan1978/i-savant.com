class ChartsController < ApplicationController
  require 'fastercsv'
  def index
    @charts = Chart.all
  end

  def show

  end

  def new
    @chart = Chart.new
  end

  def create
    @chart = Chart.new(params["chart"].merge(:filename => file))
    File.open(path, "wb") { |f| f.write(file.read) }

    @chart.data = read_data
    if @chart.save
      render :action => "edit"
    end
  end

  def read_data
    data = []
    begin
      FasterCSV.foreach(path, :headers => true, :return_headers => false) do |row|
        row = Hash[row]
        data_keys = row.keys
        data << Hash[ data_keys.zip(row.values_at(*data_keys))]
      end
      data
    rescue => e
    end

  end

  def file
    params[:upload]["filename"]
  end

  def path
    File.join("public/data/charts/", file.original_path)
  end
end
