Rails.application.routes.draw do
  devise_for :users
  # Define your application routes per the DSL in https://guides.rubyonrails.org/routing.html

  # Reveal health status on /up that returns 200 if the app boots with no exceptions, otherwise 500.
  # Can be used by load balancers and uptime monitors to verify that the app is live.
  get "up" => "rails/health#show", as: :rails_health_check

  # Defines the root path route ("/")
  # root "posts#index"
  
  root :to => 'homes#top'
  
  resources :posts do
    resources :comments, only:[:create, :destroy]
    resource :favorites, only:[:create, :destroy]
    collection do
      get 'confirm'
      get :rankings
    end
  end

  resources :users, only:[:index, :show, :edit, :update] do
    resources :messages, only: [:create]
    resources :rooms, only: [:index, :create, :show]    
    member do
      get :follows, :followers
    end
    resource :relationships, only: [:create, :destroy]
  end

  resources :rooms, only: [:create, :show] do
    resources :messages, only: [:create, :destroy] 
  end
  
end
