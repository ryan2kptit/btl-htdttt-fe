import React, { useEffect, useState } from "react";
import "./style.css";
import { Row, Col } from "react-bootstrap";
import { getEar } from "../apis/faceSkinApi";

const Ear = ({ inputEarValue, setInputEarValue }) => {
  const [ears, setEars] = useState([]);
 
  const handleCheckValue = (item) => (cb) => {
    const earArray = inputEarValue.ear.map((el) => el);
    if(inputEarValue?.ear?.includes(item.description)) {
      earArray = earArray?.filter((value)=> value!==item.description)
    } else earArray.push(item.description);
    setInputEarValue({
      ...inputEarValue,
      [cb.target.name]: earArray,
    });
  }

  useEffect(() => {
    getEar().then((res) => {
      setEars(res.data);
    })
  }, [inputEarValue]);

  return (
    <div className="symptom big-part">
      <label className="first-label" htmlFor="symptom">
        Triệu chứng trên tai:
      </label>
      <Row>
        {ears.map((item, index) => (
          <Col xs={6} md={4} xxl={3} key={index}>
            <input
             onClick={handleCheckValue(item)}
              type="checkbox"
              id={`ear${index + 1}`}
              name="ear"
              value={`ear${index + 1}`}
            />
            <label htmlFor={`ear${index + 1}`}>{item.description}</label>
          </Col>
        ))}
      </Row>
    </div>
  );
};

export default Ear;
