Rails.application.routes.draw do
  resources :jobseekers
  root to: "pages#index"

  get '*path', to: 'pages#index', via: :all
end
