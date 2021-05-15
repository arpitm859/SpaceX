const { GraphQLObjectType, GraphQLString } = require('graphql');

const RocketType = new GraphQLObjectType({
	name: 'Rocket',
	fields: () => ({
		id: { type: GraphQLString },
		rocket_name: { type: GraphQLString },
		rocket_type: { type: GraphQLString },
	}),
});

module.exports = RocketType;
