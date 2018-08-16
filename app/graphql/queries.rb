Query = GraphQL::ObjectType.define do
  name 'Query'

  field :allProfiles, !types[ProfileType] do
    description 'Get all profiles'
    resolve ->(_obj, args, _ctx) {
      Profile.all
    }
  end
end
