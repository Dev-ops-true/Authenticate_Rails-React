Rails.application.routes.draw do
  resources :projects
  resources :sessions, only: [:create]
  # resources :registrations, only: [:create]
  delete :logout, to: "sessions#logout"
  post "password/reset", to: "password_resets#create"
  patch "password/reset/edit", to: "password_resets#update"
  get :logged_in, to: "sessions#logged_in"
  resources :users
  root to: "pages#index"

  get '*path', to: 'pages#index', via: :all
end
