Rails.application.routes.draw do
  root to: 'static_pages#root'

  namespace :api do
    resources :benches, only: [:new, :show, :index], defaults: {format: :json}
  end
end
