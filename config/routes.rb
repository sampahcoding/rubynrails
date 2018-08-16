Rails.application.routes.draw do
  devise_for :admin_users, ActiveAdmin::Devise.config
  ActiveAdmin.routes(self)
  devise_for :models
root 'home#index'
get 'search', to: 'search#index'
post '/graphql', to: 'graphql#execute'

if Rails.env.development?
  mount GraphiQL::Rails::Engine, at: "/graphql", graphql_path: "/graphql"
end
end
