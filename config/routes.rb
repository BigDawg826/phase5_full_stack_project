Rails.application.routes.draw do
  resources :artists
  resources :user_likes
  resources :user_comments
  resources :users
  resources :albums do
    resources :songs
  end
  
  post "/signup", to: "users#create"
  get "/me", to: "users#show"
  post "/login", to: "sessions#create"
  delete "/logout", to: "sessions#destroy"
#exlude routes as necessary e.g., Artists only [:index, :show]

  # Define your application routes per the DSL in https://guides.rubyonrails.org/routing.html

  # Defines the root path route ("/")
   #root "birds#index"

   get "*path", to: "fallback#index", constraints: ->(req) { !req.xhr? && req.format.html? }

end
