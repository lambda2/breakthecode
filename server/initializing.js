var		initApp = function () {
	Parties.remove({});
}

if (Meteor.users.find({profile: {admin: true} }).count() == 0) {
	Meteor.users.insert({
		username: "BarMen42",
		emails: [
			{ address: "stephane.barale@gmail.com", verified: true },
			{ address: "andre.aubin@lambdaweb.fr", verified: true }
		],
		profile: {
			admin: true
		}
	});
}

Meteor.startup(initApp);
