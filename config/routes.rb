Rails.application.routes.draw do
  resources :birds, only: [:index, :show]
  # Define your application routes per the DSL in https://guides.rubyonrails.org/routing.html

  # Defines the root path route ("/")
   #root "birds#index"

   get "*path", to: "fallback#index", constraints: ->(req) { !req.xhr? && req.format.html? }

end
