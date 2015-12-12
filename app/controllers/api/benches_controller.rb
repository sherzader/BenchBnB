class Api::BenchesController < ApplicationController
  def index
    @benches = Bench.in_bounds(params[:bounds])
    render json: @benches
  end

  def create
    @bench = Bench.new(bench_params)
    @bench.save
  end

  private
  def bench_params
    params.require(:benches).permit(:description, :lat, :lng, :bounds)
  end
end
