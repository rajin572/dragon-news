import React from "react";
import Card from "react-bootstrap/Card";
import Image from "react-bootstrap/Image";
import { Link } from "react-router-dom";
import { FaBookmark, FaEye, FaShareAlt, FaStar } from "react-icons/fa";

const NewsSummryCard = ({ news }) => {
  const { _id, rating, title, author, details, image_url, total_view } = news;
  console.log(news);
  return (
    <div>
      <Card className="mb-5">
        <Card.Header className="d-flex justify-content-between align-items-center">
          <div className="d-flex">
            <Image
              className="me-2"
              roundedCircle
              style={{ height: "50px" }}
              src={author?.img}
            ></Image>
            <div>
              <p className="mb-0">{author?.name}</p>
              <p>{author?.published_date}</p>
            </div>
          </div>
          <div>
            <FaBookmark></FaBookmark>
            <FaShareAlt></FaShareAlt>
          </div>
        </Card.Header>
        <Card.Body>
          <Card.Title>{title}</Card.Title>
          <Card.Img variant="top" src={image_url}/>
          <Card.Text>
            {details.length > 200 ? (
              <p>
                {details.slice(0, 200) + "..."}{" "}
                <Link to={`/news/${_id}`}>Read More</Link>
              </p>
            ) : (
              <p>{details}</p>
            )}
          </Card.Text>
        </Card.Body>
        <Card.Footer className="d-flex justify-content-between align-items-center">
          <div>
            <FaStar className="text-warning"></FaStar>
            <span>{rating?.number}</span>
          </div>
          <div>
            <FaEye></FaEye>
            <span>{total_view}</span>
          </div>
        </Card.Footer>
      </Card>
    </div>
  );
};

export default NewsSummryCard;
