import React, { useState, useEffect } from 'react';
import '../styles/Comments.css';

const Comments = ({ carId }) => {
    const [comments, setComments] = useState([]);
    const [newComment, setNewComment] = useState('');
    const [rating, setRating] = useState(5);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState('');

    // Charger les commentaires existants
    useEffect(() => {
        fetchComments();
    }, [carId]);

    const fetchComments = async () => {
        try {
            const response = await fetch(`http://localhost:5001/api/comments/${carId}`);
            const data = await response.json();
            if (response.ok) {
                setComments(data);
            }
        } catch (err) {
            console.error('Erreur lors du chargement des commentaires:', err);
        }
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        setLoading(true);
        setError('');

        try {
            const token = localStorage.getItem('token'); // Assurez-vous que l'utilisateur est connecté
            if (!token) {
                setError('Veuillez vous connecter pour laisser un commentaire');
                return;
            }

            const response = await fetch('http://localhost:5001/api/comments', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                    'Authorization': `Bearer ${token}`
                },
                body: JSON.stringify({
                    carId,
                    content: newComment,
                    rating
                })
            });

            const data = await response.json();

            if (response.ok) {
                setNewComment('');
                setRating(5);
                fetchComments(); // Recharger les commentaires
            } else {
                setError(data.message || 'Erreur lors de l\'ajout du commentaire');
            }
        } catch (err) {
            setError('Erreur de connexion au serveur');
        } finally {
            setLoading(false);
        }
    };

    return (
        <div className="comments-container">
            <h3>Commentaires</h3>
            
            {/* Formulaire d'ajout de commentaire */}
            <form onSubmit={handleSubmit} className="comment-form">
                {error && <div className="error-message">{error}</div>}
                <div className="form-group">
                    <label>Votre commentaire</label>
                    <textarea
                        value={newComment}
                        onChange={(e) => setNewComment(e.target.value)}
                        required
                        placeholder="Partagez votre expérience..."
                    />
                </div>
                <div className="form-group">
                    <label>Note</label>
                    <div className="rating-input">
                        {[5, 4, 3, 2, 1].map((star) => (
                            <button
                                key={star}
                                type="button"
                                className={`star-button ${rating >= star ? 'active' : ''}`}
                                onClick={() => setRating(star)}
                            >
                                ★
                            </button>
                        ))}
                    </div>
                </div>
                <button type="submit" className="submit-button" disabled={loading}>
                    {loading ? 'Envoi...' : 'Publier le commentaire'}
                </button>
            </form>

            {/* Liste des commentaires */}
            <div className="comments-list">
                {comments.map((comment) => (
                    <div key={comment._id} className="comment">
                        <div className="comment-header">
                            <span className="user-name">{comment.userId.fullName}</span>
                            <span className="rating">
                                {'★'.repeat(comment.rating)}
                                {'☆'.repeat(5 - comment.rating)}
                            </span>
                        </div>
                        <p className="comment-content">{comment.content}</p>
                        <span className="comment-date">
                            {new Date(comment.createdAt).toLocaleDateString()}
                        </span>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default Comments; 