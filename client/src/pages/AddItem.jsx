import React, { useState } from "react";
import { Button, Form } from "react-bootstrap";
import { axiosInstance } from "../config/config"; 
import { useNavigate } from "react-router-dom";

function AddItem() {
  const navigate = useNavigate();
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [loading, setLoading] = useState(false)

  const addItemHandler = (e) => {
    e.preventDefault();
    setLoading(true)
    axiosInstance
      .post(
        "/api/item/save",
        { itemName: title, itemDescription: description },
        { headers: { "Content-Type": "application/json" } }
      )
      .then((res) => {
        console.log(res);
        setLoading(false)
        navigate("/");
      })
      .catch((err) => {
        console.log(err);
        setLoading(false)
      });
  };
  return (
    <div className="add-item-container">
      <div className="card">
        <Form onSubmit={addItemHandler}>
          <Form.Group className="mb-3" controlId="formtitle">
            <Form.Label>Item title</Form.Label>
            <Form.Control type="text" placeholder="Enter Title" value={title} onChange={(e)=>{setTitle(e.target.value)}
          } />
          </Form.Group>

          <Form.Group className="mb-3" controlId="formdesc">
            <Form.Label>Item description</Form.Label>
            <textarea value={description} onChange={(e)=>{setDescription(e.target.value)}} />
          </Form.Group>

          <Button variant="primary" type="submit" onClick={()=> {
            // document.write(description+"\n"+title);
          }}>
            Submit
          </Button>
        </Form>
      </div>
    </div>
  );
}

export default AddItem;
