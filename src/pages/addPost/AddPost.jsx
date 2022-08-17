import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { addNewPost } from '../../redux/postsSlice';
import { selectAllUsers } from '../../redux/usersSlice';

const AddPost = () => {
    const dispatch = useDispatch();
    const navigate = useNavigate();

    const [title, setTitle] = useState("");
    const [content, setContent] = useState("");
    const [userId, setUserId] = useState("");
    const [addRequestStatus, setAddRequestStatus] = useState("idle");

    const users = useSelector(selectAllUsers);

    const onTitleChanged = e => setTitle(e.target.value);
    const onContentChanged = e => setContent(e.target.value);
    const onAuthorChanged = e => setUserId(e.target.value);


    const canSave = [title, content, userId].every(Boolean) && addRequestStatus === 'idle';

    const onSavePostClicked = () => {
        if (canSave) {
            try {
                setAddRequestStatus("pending");
                dispatch(addNewPost({ title, body: content, userId })).unwrap();

                setTitle("");
                setContent("");
                setUserId("");
                navigate("/");
            } catch (err) {
                console.error('Failed to save the post', err);
            } finally {
                setAddRequestStatus("idle");
            }
        }
    }

    const usersOptions = users.map(user => (
        <option key={user.id} value={user.id}>
            {user.name}
        </option>
    ))

    return (
        <div className="editContainer">
            <div className="editWrapper">
                <h2 className="editTitle">Add A New Post</h2>
                <form>
                    <label htmlFor="postTitle">Post Title :</label>
                    <input 
                        type="text" 
                        id="postTitle"
                        name="postTitle"
                        value={title}
                        onChange={onTitleChanged}    
                    />
                    <label htmlFor="postAuthor">Author :</label>
                    <select name="postAuthor" id="postAuthor" value={userId} onChange={onAuthorChanged}>
                        <option value=""></option>
                        {usersOptions}
                    </select>
                    <label htmlFor="postContent">Content :</label>
                    <textarea
                        rows={6}
                        id="postContent"
                        name="postContent"
                        value={content}
                        onChange={onContentChanged}
                    />
                    <div className="editButtons">
                        <button
                            type="button"
                            onClick={onSavePostClicked}
                            disabled={!canSave}
                        >
                            Save Post
                        </button>
                    </div>
                </form>
            </div>
        </div>
    )
}

export default AddPost