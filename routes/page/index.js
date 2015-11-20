'use strict';

module.exports = function(app){
	app.get('/', function(req, res){
		res.render('index', {
			layoutUrl: res.layout,
			layoutUrls: res.layouts,
			test: 'testtset'
		});
	});

	app.get('/wechat', function(req, res){
		res.render('wechat', {
		});
	});

	app.get('/socket', function(req, res){
		res.render('socket', {
		});
	});

	app.get('/multiplexing', function(req, res){
		res.render('multiplexing', {
		});
	});

	app.get('/multiplexing/statistics', function(req, res){
		res.render('multiplexing_statistics', {
		});
	});
}