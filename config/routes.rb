Rails.application.routes.draw do
  namespace :api do
    resources :benches, only: [:show, :index], defaults: {format: :json}
  end
end
