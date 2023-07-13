import React from "react";
import postsContent from "../data/dataOne.json";
import { Container, Row, Col } from "react-bootstrap";
import Post from "../components/Post";

export default function Home() {
  return (
    <>
      <Container>
        <h3 className="m-4">BLOG POSTS</h3>
        <Row className="g-2 d-flex flex-column">
          {postsContent.map((post) => (
            <Col key={post.id}>
              <Post date={new Date()} {...post} />
            </Col>
          ))}
        </Row>
      </Container>
    </>
  );
}
