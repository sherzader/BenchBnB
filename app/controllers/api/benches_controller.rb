class Api::BenchesController < ApplicationController
  def index
    @benches = Bench.in_bounds(params[:bounds])
    render json: @benches
  end

  def create
    bench_params[:lat] = bench_params[:lat].to_f
    bench_params[:lng] = bench_params[:lng].to_f
    bench_params[:seating] = bench_params[:seating].to_i
    
    @bench = Bench.new(bench_params)
    @bench.save
  end

  private
  def bench_params
    params.require(:bench).permit(:description, :lat, :lng, :seating, :bounds)
  end
end
