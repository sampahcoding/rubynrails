require_relative 'queries'
require_relative 'types/profile'
Schema = GraphQL::Schema.define do
  query Query
end
