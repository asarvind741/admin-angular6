var graphqlHTTP = require('express-graphql');
var {
    buildSchema
} = require('graphql');
const User = require('../models/user.model')


module.exports = (app) => {

    var schema = buildSchema(`
type Query {
    user(email: String): Person
    users: [Person]
  },
  type Person {
    id: ID!
    firstName: String
    lastName: String
    email: String  
  }
`);

    var getUsers = User.find({}).exec()
        .then(users => {
            return users
        })

    var getUser = (email) => User.findById(email).exec()
    .then((user) => {
        return user
    })

    // Root resolver
    var root = {
        user: getUser,
        users: getUsers
    };

    // Create an express server and a GraphQL endpoint
    app.use('/graphql', graphqlHTTP({
        schema: schema, // Must be provided
        rootValue: root,
        graphiql: true, // Enable GraphiQL when server endpoint is accessed in browser
    }));
    app.listen(4000, () => console.log('Now browse to localhost:4000/graphql'));
}