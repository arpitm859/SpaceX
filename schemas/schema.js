const {
	GraphQLObjectType,
	GraphQLInt,
	GraphQLString,
	GraphQLList,
	GraphQLSchema,
} = require('graphql');
const axios = require('axios');
const LaunchType = require('./launchSchema/launchSchema');
const RocketType = require('./rocketSchema/rocketSchema');

const RootQuery = new GraphQLObjectType({
	name: 'RootQueryType',
	fields: {
		launches: {
			type: new GraphQLList(LaunchType),
			resolve(parents, args) {
				return axios
					.get(`https://api.spacexdata.com/v3/launches`)
					.then((res) => res.data);
			},
		},
		launch: {
			type: LaunchType,
			args: {
				flight_number: { type: GraphQLInt },
			},
			resolve(parents, args) {
				return axios
					.get(`https://api.spacexdata.com/v3/launches/${args.flight_number}`)
					.then((res) => res.data);
			},
		},
		rockets: {
			type: new GraphQLList(RocketType),
			resolve(parents, args) {
				return axios
					.get(`https://api.spacexdata.com/v3/rockets`)
					.then((res) => res.data);
			},
		},
		rocket: {
			type: RocketType,
			args: {
				id: { type: GraphQLString },
			},
			resolve(parents, args) {
				return axios
					.get(`https://api.spacexdata.com/v3/rockets/${args.id}`)
					.then((res) => res.data);
			},
		},
	},
});

module.exports = new GraphQLSchema({
	query: RootQuery,
});
