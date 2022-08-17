import React from "react";
import Navbar from "./components/navbar/Navbar";
import Footer from "./components/footer/Footer";
import PostsList from "./pages/postsList/PostsList";
import AddPost from "./pages/addPost/AddPost";
import EditPost from "./pages/editPost/EditPost";
import SinglePost from "./pages/singlePost/SinglePost";
import { BrowserRouter as Router, Routes, Route, Navigate } from "react-router-dom";

const App = () => {
    return (
        <Router>
            <Navbar />
            <Routes>
                <Route path="/">
                    <Route index element={<PostsList />} />
                    <Route path="post">
                        <Route index element={<AddPost />} />
                        <Route path=":postId" element={<SinglePost />} />
                        <Route path="edit/:postId" element={<EditPost />} />
                    </Route>
                    <Route path="*" element={<Navigate to="/" replace />} />
                </Route>
            </Routes>
            <Footer />
        </Router>
    )
}

export default App