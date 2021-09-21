import React from 'react';
import { Card, Button } from 'react-bootstrap';
import EditPost from './EditPost';
import { useDispatch } from 'react-redux';
import { getPosts, deletePost } from "../redux/actions/Actions";

const PostCard = ({ post }) => {
    let dispatch = useDispatch()

    return (
        <Card style={{ width: '15rem' }} className="card">
            <Card.Body>
                <Card.Title className="title">Author:&nbsp;&nbsp;&nbsp;{post.author}</Card.Title>
                <Card.Title className="title">Title:&nbsp;&nbsp;&nbsp;
                    <a href={`/posts/${post._id}`}
                        style={{
                            textDecoration: "none",
                            color: "#FF5C58"
                        }}>
                        {post.title}
                    </a>
                </Card.Title>
                <Card.Text style={{ justifyContent: "right" }}>
                    Description:&nbsp;&nbsp;&nbsp;{post.description}
                </Card.Text>
                <Card.Text>
                    Category:&nbsp;&nbsp;&nbsp;{post.postCategory}
                </Card.Text>
                <div className="s-flex justify-content-around flex-wrap">
                    <Button variant="primary" className="btn" onClick={() => { dispatch(deletePost(post._id)); dispatch(getPosts()) }}
                        style={{ width: "10rem" }}><i class="fas fa-trash"></i>&nbsp;&nbsp;Delete</Button>
                    <EditPost post={post} />
                </div>
            </Card.Body>
        </Card>
    )
}

export default PostCard
