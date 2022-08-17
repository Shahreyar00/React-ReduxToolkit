import React from 'react';
import { Link } from 'react-router-dom';
import PostAuthor from '../postAuthor/PostAuthor';
import ReactionButton from '../reactionButton/ReactionButton';
import TimeAgo from '../timeAgo/TimeAgo';
import "./postExcerpt.css";

const PostExcerpt = ({ post }) => {
    return (
        <div className="postExcerptContainer">
            <h2 className="excerptTitle">{post.title}</h2>
            <p className="excerptDesc">{post.body}...</p>
            <p className="excerptCredit">
                <Link to={`post/${post.id}`}>
                    <button className="viewPost">View Post</button>
                </Link>
                <PostAuthor userId={post.userId} /> 
                <TimeAgo timestamp={post.date} />
            </p>
            <ReactionButton post={post} />
        </div>
    )
}

export default PostExcerpt