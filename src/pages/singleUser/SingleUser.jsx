import React from 'react';
import { useSelector } from 'react-redux';
import { Link, useParams } from 'react-router-dom';
import { selectPostsByUser } from '../../redux/postsSlice';
import { selectUserById } from '../../redux/usersSlice';
import "./singleUser.css";

const SingleUser = () => {
    const { userId } = useParams();
    const user = useSelector((state) => selectUserById(state, Number(userId)));

    const postsForUser = useSelector((state) => selectPostsByUser(state, Number(userId)));

    return (
        <div className="singleUserContainer">
            <div className="singleUserWrapper">
                <h2 className="singleUserTitle">Posts by {user.name}</h2>
                <ol className="singleUserList">
                    {postsForUser.map((post)=>(
                        <Link to={`/post/${post.id}`} key={post.id}>
                            <li className="singleUserItem">
                                {post.title} 
                            </li>
                        </Link>
                    ))}
                </ol>
            </div>
        </div>
    )
}

export default SingleUser