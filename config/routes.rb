Rails.application.routes.draw do
  # For details on the DSL available within this file, see https://guides.rubyonrails.org/routing.html
  root "homes#index"

  get "/random", to: "homes#index"
  get "/clues", to: "api/v1/clues#index"

  namespace :api do
    namespace :v1 do
      resources :clues, only: [:index]
    end
  end
end
