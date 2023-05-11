import React, { useEffect, useState } from "react";
import { Row, Col, Card } from "react-bootstrap";
import { axiosInstance } from "../config/config";

function Home() {
  const [items, setItems] = useState([]);
  const [query, setQuery] = useState("");

  const getItems = () => {
    axiosInstance
      .get(`/api/item/${query}`, {
        headers: { "Content-Type": "application/json" },
      })
      .then((res) => {
        console.log(res);
        setItems(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  useEffect(() => {
    getItems();
  }, []);
  const searchHandler = (e) => {
    e.preventDefault();
    if (query) {
      getItems();
    }
  };
  return (
    <div className="home-container">
      <div className="search-container w-100">
        <form onSubmit={searchHandler}>
          <input
            className="form-control me-3"
            type="text"
            placeholder="search"
            value={query}
            onChange={(e)=>{setQuery(e.target.value)}}
          />
          <button className="btn btn-primary" type="submit">
            Search
          </button>
        </form>
      </div>
      <Row xs={1} md={2} className="g-4">
        {/* <Col>
          <Card style={{ width: "18rem" }}>
            <Card.Body>
              <Card.Title>Item title</Card.Title>
              <Card.Text>Item description</Card.Text>
            </Card.Body>
          </Card>
        </Col>
        <Col>
          <Card style={{ width: "18rem" }}>
            <Card.Body>
              <Card.Title>Card title</Card.Title>
              <Card.Text>
                This is a longer card with supporting text below as a natural
                lead-in to additional content. This content is a little bit
                longer.
              </Card.Text>
            </Card.Body>
          </Card>
        </Col> */}

        {items &&
          items.map((item, key) => (
            <Col key={key}>
              <Card style={{ width: "18rem" }}>
                <Card.Body>
                  <Card.Title>{item?.itemName}</Card.Title>
                  <Card.Text>{item?.itemDescription}</Card.Text>
                </Card.Body>
              </Card>
            </Col>
          ))}
      </Row>
    </div>
  );
}

export default Home;
