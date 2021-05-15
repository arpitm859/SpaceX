const express = require('express');
const { graphqlHTTP } = require('express-graphql');
const schema = require('./schemas/schema');

const app = express();

app.use(
	'/graphql',
	graphqlHTTP({
		schema,
		graphiql: true,
	})
);

const PORT = process.env.PORT || 5000;
app.listen(5000, () =>
	console.log(`Running a GraphQL API server at http://localhost:${PORT}/graphql`)
);
