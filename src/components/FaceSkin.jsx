import React, { useEffect, useState } from "react";
import "./style.css";
import { Row, Col } from "react-bootstrap";
import { getFaceSkin } from '../apis/faceSkinApi'



const FaceSkin = ({ inputFaceSkinValue, setInputFaceSkinValue }) => {
  const [faceSkins, setfaceSkins] = useState([])

  const handleCheckValue = (item) => (cb) => {
    const faceSkins = inputFaceSkinValue.faceSkin.map((el) => el);
    if(inputFaceSkinValue?.faceSkin?.includes(item.description)) {
      faceSkins = faceSkins?.filter((value)=> value!==item.description)
    } else faceSkins.push(item.description);
    setInputFaceSkinValue({
      ...inputFaceSkinValue,
      [cb.target.name]: faceSkins,
    });
  }

  useEffect(() => {
    getFaceSkin().then((res)=> {
      setfaceSkins(res.data)
    })
  }, [inputFaceSkinValue]);

  return (
    <div className="bad-living-habit big-part">
      <label className="first-label" htmlFor="bad-living-habit">
        Triệu chứng trên da mặt:
      </label>
      <Row>
        {faceSkins.map((item, index) => (
          <Col xs={6} md={4} xxl={3} key={index}>
            <input
              onClick={handleCheckValue(item)}
              // onChange={(e) => handleInputHabitValue(e)}
              type="checkbox"
              id={`faceSkin${index + 1}`}
              name="faceSkin"
              value={`faceSkin${index + 1}`}
            />
            <label htmlFor={`faceSkin${index + 1}`}>{item.description}</label>
          </Col>
        ))}
      </Row>
    </div>
  );
};

export default FaceSkin;
