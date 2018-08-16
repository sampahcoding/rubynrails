ProfileType = GraphQL::ObjectType.define do
  name 'Profile'
  description 'A user profile'
  field :id, !types.Int
  field :firstname, types.String
  field :lastname, types.String
  field :address, types.String
end
