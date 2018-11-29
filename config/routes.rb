Rails.application.routes.draw do
  resources :musics
  resources :users
  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html
  get "/audios" => "audios#index"
  get "audios/record" => "audios#record"
  get "/audios/up" => "audios#up"
  post "/audios/create" => "audios#create"
  get "/audios/show" => "audios#show"
  post 'audios/upload' => "audios#upload"
  get "/audios/contact" => "audios#contact"
end
