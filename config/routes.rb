Rails.application.routes.draw do
  devise_for :users
  root "homes#index"
  get "/random", to: "homes#index"
  get "/gameboards", to: "homes#index"
  get "/gameboards/new", to: "homes#authenticated"
  get "/leaderboard", to: "homes#index"
  get "/users/:id", to: "homes#index"

  namespace :api do
    namespace :v1 do
      resources :gameboards, only: [:new]
      resources :users, only: [:index, :show, :update] do
        resources :scores, only: [:index, :create]
      end
      resources :scores, only: [:index]
    end
  end
end
