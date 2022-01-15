import React, { useEffect, useState } from "react";
import "./style.css";
import { Row, Col } from "react-bootstrap";
import { getMouth } from "../apis/faceSkinApi";


const MountSynptom = ({ inputMouthValue, setInputMouthValue }) => {
  const [mouth, setMouth] = useState([])
  const handleCheckValue = (item) => (cb) => {
    const mouthArray = inputMouthValue.mouth.map((el) => el);
    if(inputMouthValue?.mouth?.includes(item.description)) {
      mouthArray = mouthArray?.filter((value)=> value!==item.description)
    } else mouthArray.push(item.description);
    setInputMouthValue({
      ...inputMouthValue,
      [cb.target.name]: mouthArray,
    });
  }
  useEffect(() => {
    getMouth().then((res) => {
      setMouth(res.data)
    })
  }, [inputMouthValue]);

  return (
    <div className="class mouth">
      <label className="first-label" htmlFor="class mouth">
        Triệu chứng trên miệng:
      </label>
      <Row>
        {mouth.map((item, index) => (
          <Col xs={6} md={4} xxl={3} key={index}>
            <input
             onClick={handleCheckValue(item)}
              // onChange={(e) => handleInputCauseValue(e)}
              type="checkbox"
              id={`mouth${index + 1}`}
              name="mouth"
              value={`mouth${index + 1}`}
            />
            <label htmlFor={`mouth${index + 1}`}> {item.description}</label>
          </Col>
        ))}
      </Row>
    </div>
  );
};

export default MountSynptom;
