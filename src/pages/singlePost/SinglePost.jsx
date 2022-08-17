import { useSelector } from "react-redux";
import { selectPostById } from "../../redux/postsSlice";
import "./singlePost.css";
import PostAuthor from "../../components/postAuthor/PostAuthor";
import TimeAgo from "../../components/timeAgo/TimeAgo";
import ReactionButton from "../../components/reactionButton/ReactionButton";

import { useParams, Link } from "react-router-dom";

const SinglePost = () => {
    const { postId } = useParams();

    const post = useSelector((state)=>selectPostById(state, Number(postId)));

    if(!post){
        return(
            <div className="postError">
                <h2 className="postErrorText">Post not found!</h2>
            </div>
        )
    }

    return (
        <div className="singleContainer">
            <div className="singleWrapper">
                <div className="singleUpper">
                    <h2 className="singleTitle">{post.title}</h2>
                    <p className="singleBody">{post.body}</p>
                </div>
                <div className="singleCredit">
                    <Link to={`/post/edit/${post.id}`}>
                        <button className="viewPost">Edit Post</button>
                    </Link>
                    <PostAuthor userId={post.userId} />
                    <TimeAgo timestamp={post.date} />
                    <span className="singleReaction">
                        <ReactionButton post={post} />
                    </span>
                </div>
            </div>
        </div>
    )
}

export default SinglePost