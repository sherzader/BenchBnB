# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rake db:seed (or created alongside the db with db:setup).
#
# Examples:
#
#   cities = City.create([{ name: 'Chicago' }, { name: 'Copenhagen' }])
#   Mayor.create(name: 'Emanuel', city: cities.first)

benches = Bench.create([{
                  description: "COZYBENCH4U",
                  lat: 37.7804335,
                  lng: -122.4116771
                },
                {
                  description: "FIDI Towers",
                  lat: 37.789967,
                  lng: -122.396056
                },
                {
                  description: "Mission Retreat",
                  lat: 37.760133,
                  lng: -122.428736
                }])
