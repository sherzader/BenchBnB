class Bench < ActiveRecord::Base
  validates :description, :lat, :lng, presence: true

  def self.in_bounds(bounds)
    # {
    #   "northEast"=> {"lat"=>"37.80971", "lng"=>"-122.39208"},
    #   "southWest"=> {"lat"=>"37.74187", "lng"=>"-122.47791"}
    # }
    Bench.all.select do |bench|
      bench.lat > bounds["southWest"]["lat"].to_f &&
      bench.lat < bounds["northEast"]["lat"].to_f &&
      bench.lng > bounds["southWest"]["lng"].to_f &&
      bench.lng < bounds["northEast"]["lng"].to_f
    end
  end

end
