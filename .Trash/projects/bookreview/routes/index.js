const { Router } = require('express');
const router = Router();
const reviewModel = require('../models/reviewModel');

router.get('/', function(req,res){
	res.render('index')
});

router.post('/review', (req, res) => {
	const {title_give, author_give, review_give} = req.body;
	const doc = new reviewModel({
		'title':title_give,
		'author':author_give,
		'review':review_give
	});
	doc.save(function(err){
		res.send({msg: '저장 완료!'})
	})
});

router.get('/review', (req, res) => {
	reviewModel.find({}, function(err, reviews){
		res.send({'all_reviews': reviews})
	})
});

module.exports = router;