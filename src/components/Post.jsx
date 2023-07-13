import React from "react";
import { Card } from "react-bootstrap";

const dateFormatter = new Intl.DateTimeFormat(undefined, {
  dateStyle: "medium",
  timeStyle: "short",
});

function Post({ id, title, content, date }) {
  let formattedDate = "Invalid Date";
  if (date instanceof Date && !isNaN(date)) {
    formattedDate = dateFormatter.format(date);
  }

  return (
    <>
      <Card className="w-100">
        <Card.Body>
          <Card.Subtitle className="m-3" style={{ color: "dodgerblue" }}>
            {formattedDate}
          </Card.Subtitle>
          <Card.Title>{title}</Card.Title>
          <Card.Text style={{ fontSize: "22px" }}>{content}</Card.Text>
        </Card.Body>
      </Card>
    </>
  );
}

export default Post;
