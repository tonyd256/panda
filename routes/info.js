
exports.info = function (req, res) {
	res.send({
		name: 'Panda',
		what: 'Panda Board',
		says: 'What up!'
	});
}