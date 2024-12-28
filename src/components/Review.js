import React, { useState, useRef } from 'react';
import '../styles/ReviewStyles.css';
import { FaQuoteRight } from 'react-icons/fa';
import { customer1, customer2, customer3 } from '../assets/index';
import { motion } from 'framer-motion';

const Review = () => {
    const [showCommentForm, setShowCommentForm] = useState(false);
    const [newComment, setNewComment] = useState({
        comment: '',
        name: '',
        location: ''
    });
    const [loading, setLoading] = useState(false);
    const revParent = useRef(null);

    const revsDetails = [
        {
            id: 1,
            name: "John Doe",
            location: "Paris",
            comment: "The car was in excellent condition and the service was outstanding!",
            img: customer1
        },
        {
            id: 2,
            name: "Sarah Smith",
            location: "Lyon",
            comment: "Great experience! Will definitely rent again.",
            img: customer2
        },
        {
            id: 3,
            name: "Mike Johnson",
            location: "Marseille",
            comment: "Professional service and amazing car selection.",
            img: customer3
        }
    ];

    const handleInputChange = (e) => {
        setNewComment({
            ...newComment,
            [e.target.name]: e.target.value
        });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        setLoading(true);

        try {
            const response = await fetch('http://localhost:5001/api/reviews', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(newComment),
            });

            if (response.ok) {
                alert('Merci pour votre commentaire !');
                setNewComment({ comment: '', name: '', location: '' });
                setShowCommentForm(false);
            } else {
                alert('Erreur lors de l\'envoi du commentaire');
            }
        } catch (error) {
            console.error('Erreur:', error);
            alert('Erreur de connexion au serveur');
        } finally {
            setLoading(false);
        }
    };

    return (
        <div className='review-section'>
            <div className='rev-container'>
                <div className='rev-intro'>
                    <h4>Reviewed by People</h4>
                    <h1>Client's Testimonials</h1>
                    <p>
                        Discover the positive impact we've made on
                        our clients by reading through their testimonials.
                        Our clients have experienced our service and results,
                        and they're eager to share their positive experiences with you.
                    </p>
                    <button 
                        className="add-review-btn"
                        onClick={() => setShowCommentForm(true)}
                    >
                        Ajouter un commentaire
                    </button>
                </div>

                {showCommentForm && (
                    <div className="comment-form-overlay">
                        <div className="comment-form-container">
                            <h2>Ajouter votre commentaire</h2>
                            <form onSubmit={handleSubmit} className="comment-form">
                                <div className="form-group">
                                    <label>Votre commentaire</label>
                                    <textarea
                                        name="comment"
                                        value={newComment.comment}
                                        onChange={handleInputChange}
                                        required
                                        placeholder="Partagez votre expérience..."
                                    />
                                </div>
                                <div className="form-group">
                                    <label>Votre nom</label>
                                    <input
                                        type="text"
                                        name="name"
                                        value={newComment.name}
                                        onChange={handleInputChange}
                                        required
                                    />
                                </div>
                                <div className="form-group">
                                    <label>Votre localisation</label>
                                    <input
                                        type="text"
                                        name="location"
                                        value={newComment.location}
                                        onChange={handleInputChange}
                                        required
                                    />
                                </div>
                                <div className="form-actions">
                                    <button 
                                        type="button" 
                                        className="cancel-btn"
                                        onClick={() => setShowCommentForm(false)}
                                    >
                                        Annuler
                                    </button>
                                    <button 
                                        type="submit" 
                                        className="submit-btn"
                                        disabled={loading}
                                    >
                                        {loading ? 'Envoi...' : 'Publier'}
                                    </button>
                                </div>
                            </form>
                        </div>
                    </div>
                )}

                <div className='rev-parent' ref={revParent}>
                    <div className='rev-boxes'>
                        {revsDetails.map((rev) => (
                            <div key={rev.id} className='rev-box'>
                                <div className='top'>
                                    <FaQuoteRight className='rev-icon'/>
                                    <p>{rev.comment}</p>
                                </div>
                                <div className='bottom'>
                                    <div className='rev-pro'>
                                        <div className='left-pro'>
                                            <img src={rev.img} alt='customer'/>
                                            <div>
                                                <h3 className='pro-name'>{rev.name}</h3>
                                                <h4>{rev.location}</h4>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Review;