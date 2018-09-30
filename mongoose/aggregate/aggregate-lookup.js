"use strict";
/*---------------------------------------- Variable Definition ----------------------------------------*/
const mongoose = require('mongoose');
const user = require('../models/model-user');
/*---------------------------------------- Variable Definition ----------------------------------------*/

// Connection
mongoose.connect('mongodb://127.0.0.1:27017/nodeMongoTest', {useMongoClient: true});

const db = mongoose.connection;

// Join

// Control the connection
db.once('open', () => {
    console.log('Connected to database...');

    user.aggregate([
	{
		//We can use match operator if we want
		$match:{
			_id: mongoose.Types.ObjectId('5bad3007ee7f631eb274b9a6')
		}
	},
	{
		// table association
		$lookup: {
			from: 'books',
			foreignField: 'authorId',
			localField: '_id',
			as: 'books'
		}
	},
	{
		//name move
		$unwind: '$books'
	},
	{
		$project: {
			//Areas to display
			name: 1,
			booksName: '$books.bookName',
			yearOfPrinting: '$books.yearofPrinting'
		}
	}
        ], (err, data) => {
                if(err) throw err;
                console.log(data);
        });
});
