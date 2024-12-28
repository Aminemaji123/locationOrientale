const express = require('express');
const router = express.Router();
const Comment = require('../models/Comment');
const auth = require('../middleware/auth');

router.get('/:carId', async (req, res) => {
    try {
        const comments = await Comment.find({ carId: req.params.carId })
            .populate('userId', 'fullName')
            .sort({ createdAt: -1 });
        res.json(comments);
    } catch (error) {
        res.status(500).json({ message: 'Erreur serveur' });
    }
});

router.post('/', auth, async (req, res) => {
    try {
        const { carId, content, rating } = req.body;
        const comment = new Comment({
            userId: req.user.id,
            carId,
            content,
            rating
        });
        await comment.save();
        res.status(201).json(comment);
    } catch (error) {
        res.status(500).json({ message: 'Erreur serveur' });
    }
});

module.exports = router; 