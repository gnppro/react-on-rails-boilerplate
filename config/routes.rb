Rails.application.routes.draw do
  # For details on the DSL available within this file, see https://guides.rubyonrails.org/routing.html

  namespace :api, defaults: { format: :json } do
    namespace :v1 do
      # resources :test, except: %i[ edit new ]
    end
  end

  get '*page', to: 'pages#index', constraints: -> (req) do
    !req.xhr? && req.format.html?
  end

  root 'pages#index'
end
