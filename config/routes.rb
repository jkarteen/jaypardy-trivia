Rails.application.routes.draw do
  devise_for :users
  root "homes#index"
  get "/random", to: "homes#index"
  get "/gameboards", to: "homes#index"
  get "/gameboards/new", to: "homes#authenticated"

  namespace :api do
    namespace :v1 do
      resources :gameboards, only: [:new]
      resources :users, only: [:index] do
        resources :scores, only: [:index, :create]
      end
    end
  end
end
