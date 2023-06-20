const express = require('express');
const morgan = require('morgan');
const fs = require('fs');
const path = require('path');
const mongoClient = require('mongodb').MongoClient;

const app = express()

app.use(morgan('dev'));

var db;
var databaseUrl = 'mongodb://13.124.53.50:27017';

app.get('/', (req, res) => {
	res.sendFile(__dirname + './index.html');
})

app.get('/worldcup', (req, res) => {
	console.log(mongoClient)
	mongoClient.connect(databaseUrl, function(err, database)) {
	if (err != null) 
		res.json({'count':0});
		console.log(err);
	} else {
		db.database.db('test')
		db.collection('worldcup').find({}, {_id:0, no:1, nation:1, date:1}).toArray(function(err, result))
	}
		if(err) throw err;
		console.log('result: ');
		console.log(result);
		res.writeHead(200, {'Content-Type':'text/html;charset=utf-8'});
		var template = `
			<>
			`






		
})

module.exports = app;