import { useSelector } from "react-redux";
import "./postsList.css";
import { getPostsError, getPostsStatus, selectAllPosts } from "../../redux/postsSlice";
import PostsExcerpt from "../../components/postExcerpt/PostExcerpt";
import Loader from "../../components/loader/Loader";

const PostsList = () => {
    const posts = useSelector(selectAllPosts);
    const postStatus = useSelector(getPostsStatus);
    const error = useSelector(getPostsError);

    let content;
    if (postStatus === 'loading') {
        content = <div className="postError">
                    <Loader />
                </div>;
    } else if (postStatus === 'succeeded') {
        let orderedPosts = posts.slice().sort((a, b) => b.date.localeCompare(a.date));
        orderedPosts = orderedPosts.slice(0,5);
        content = orderedPosts.map(post => <PostsExcerpt key={post.id} post={post} />)
    } else if (postStatus === 'failed') {
        content = <p>{error}</p>;
    }

    return (
        <div className="postsListContainer">
            <div className="postsListWrapper">
                {content}
            </div>
        </div>
    )
}

export default PostsList