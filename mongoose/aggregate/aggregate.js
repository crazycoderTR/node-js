"use strict";
/*---------------------------------------- Variable Definition ----------------------------------------*/
const mongoose = require('mongoose');
const user = require('../models/model-user');
/*---------------------------------------- Variable Definition ----------------------------------------*/

// Connection
mongoose.connect('mongodb://127.0.0.1:27017/nodeMongoTest', {useMongoClient: true});

const db = mongoose.connection;

// aggregate function => used to aggregate

// Control the connection
db.once('open', () => {
    console.log('Connected to database...');

    user.aggregate([
		{
			$match: {
				//Restrict data to display
				find_work: false
			},
		},
		{
			$group: {
				// sort by 'groups' and show how much piece
				_id: '$groups',
				piece: { $sum: 1}
			}
		},
		{
			$project: {
				name: 1 // will be shown only 'name' field
			}
		},
		{
			$sort: {
				name: 1
			}
		},
		{
			$limit: 3
		},
		{
			$skip: 1
		}
	], (err, data) => {
		if(err) throw err;
		console.log(data);
	});
});

