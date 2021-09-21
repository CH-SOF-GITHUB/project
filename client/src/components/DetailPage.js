import React, { useEffect, useState } from "react";
import axios from "axios";
import { useLocation } from "react-router";
import Navber from "./Navber";
import { Card, ListGroup, ListGroupItem } from "react-bootstrap";

function DetailPage() {
    const location = useLocation()
    const path = location.pathname.split("/")[2];
    //console.log(path)
    //useState 
    const [singlepost, setsinglePost] = useState([]);
    //useEffect
    useEffect(() => {
        const fetchPosts = async () => {
            const res = await axios.get("/posts/detail/" + path);
            setsinglePost(res.data);
            //console.log(res);
        };
        fetchPosts();
    }, [path]);

    return (
        <div>
            <Navber />
            <Card style={{ width: '40rem', margin:'1% 35%' }}>
                <Card.Img variant="top" src="https://media.istockphoto.com/vectors/thin-line-vector-icon-set-pixel-perfect-editable-stroke-the-set-vector-id1220761758?s=612x612" />
                <Card.Body>
                    <Card.Title>Title:&nbsp; {singlepost.title}</Card.Title>
                    <Card.Text>Description:&nbsp;
                        <p>{singlepost.description}</p>
                    </Card.Text>
                </Card.Body>
                <ListGroup className="list-group-flush">
                    <ListGroupItem>Author:&nbsp;{singlepost.author}</ListGroupItem>
                    <ListGroupItem>Category:&nbsp;{singlepost.postCategory}</ListGroupItem>
                    <ListGroupItem>Business:&nbsp;{singlepost.business}</ListGroupItem>
                </ListGroup>
                <Card.Body>
                    <Card.Link href="/posts">Card Link</Card.Link>
                    <Card.Link href="#">Another Link</Card.Link>
                </Card.Body>
            </Card>
        </div>
    );
}

export default DetailPage;