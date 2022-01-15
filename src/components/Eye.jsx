import React, { useEffect, useState } from "react";
import "./style.css";
import { Row, Col } from "react-bootstrap";
import { getEye } from "../apis/faceSkinApi";

const Eye = ({ inputEyeValue, setInputEyeValue }) => {
  const [eyes, setEyes] = useState([])
  // const handleInputCauseValue = (e) => {
  //   const causeArr = inputCauseValue.cause.map((el) => el);
  //   causeArr.push(e.target.value);

  //   setInputCauseValue({
  //     ...inputCauseValue,
  //     [e.target.name]: causeArr,
  //   });
  // };
  const handleCheckValue = (item) => (cb) => {
    const eyeArr = inputEyeValue.eye.map((el) => el);
    if(inputEyeValue?.eye?.includes(item.description)) {
      eyeArr = eyeArr?.filter((value)=> value!==item.description)
    } else eyeArr.push(item.description);
    setInputEyeValue({
      ...inputEyeValue,
      [cb.target.name]: eyeArr,
    });
  }

  useEffect(() => {
    getEye().then((res) => {
      setEyes(res.data)
    })
  }, [inputEyeValue]);

  return (
    <div className="cause big-part">
      <label className="first-label" htmlFor="cause">
        Triệu chứng trên mắt:
      </label>
      <Row>
        {eyes.map((item, index) => (
          <Col xs={6} md={4} xxl={3} key={index}>
            <input
             onClick={handleCheckValue(item)}
              //onChange={(e) => handleInputCauseValue(e)}
              type="checkbox"
              id={`eye${index + 1}`}
              name="eye"
              value={`eye${index + 1}`}
            />
            <label htmlFor={`eye${index + 1}`}> {item.description}</label>
          </Col>
        ))}
      </Row>
    </div>
  );
};

export default Eye;
