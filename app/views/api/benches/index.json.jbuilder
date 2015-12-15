json.array!(@benches) do |bench|
  json.extract! bench, description: bench.description,
                        seating: bench.seating
end
