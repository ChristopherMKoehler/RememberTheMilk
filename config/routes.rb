Rails.application.routes.draw do
  root "static_pages#root"
  namespace :api, defaults: { format: :json } do
    resources :users, only: [:create]
    resource :session, only: [:create, :destroy]
    resources :lists, only: [:create, :destroy, :index, :show, :update]
    resources :tasks, only: [:create, :destroy, :index, :show, :update]
  end
end
