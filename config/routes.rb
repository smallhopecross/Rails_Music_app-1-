Rails.application.routes.draw do
  resources :users
  resource :audios
  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html
  get "/audios/index" => "audios#index"
  get "audios/record" => "audios#record"
  get "/audios/up" => "audios#up"

end
