import React from 'react';
import { useDispatch } from 'react-redux';
import { reactionAdded } from '../../redux/postsSlice';
import "./reactionButton.css";

const reactionEmoji = {
    thumbsUp: '👍',
    wow: '😮',
    heart: '💖',
}

const ReactionButton = ({ post }) => {
    const dispatch = useDispatch();

    const reactionButtons = Object.entries(reactionEmoji).map(([name, emoji]) => {
        return (
            <button
                key={name}
                type="button"
                className="reactionButton"
                onClick={() =>
                    dispatch(reactionAdded({ postId: post.id, reaction: name }))
                }
            >
                {emoji} {post.reactions[name]}
            </button>
        )
    })

    return (
        <div className="reactionsContainer">
            {reactionButtons}
        </div>
    )
}

export default ReactionButton