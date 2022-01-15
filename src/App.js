import "./App.css";
import { Container, Form, Button } from "react-bootstrap";
import FaceSkin from "./components/FaceSkin";
import Eye from "./components/Eye";
import Ear from "./components/Ear";
import { useState } from "react";
//import diabetesDataArr from "./data/DiabetesData";
import AdviceModal from "./components/AdviceModal";
import MountSynptom from "./components/MountSynptom"
import { postData } from "./apis/faceSkinApi";

function App() {
  const [inputValue, setInputValue] = useState({
    faceSkin: [],
    eye: [],
    ear: [],
    mouth: [],
  });

  const [modalShow, setModalShow] = useState(false);

  async function handleSubmitButton(e) {
    e.preventDefault();
      setModalShow(true);
      const result = await postData(inputValue);
      if(result.data === 'binh thuong') alert('binh thuong')
      else if(result.data === 'bi benh') alert('bi benh')
      else alert("mac benh nghiem trong")
    //}
  }

  // calculate result
  let max = 0,
    diseaseIndex;
  // const resultIndex = diabetesDataArr.map((item, index) => {
  //   const handleFamilyHistoryDiabetes = () => {
  //     if (item.disease === "no") {
  //       if (inputValue.disease === "no") return 1;
  //       if (
  //         inputValue.disease === "yes" &&
  //         inputValue.parent === "father-or-mother"
  //       )
  //         return 0.5;
  //       if (
  //         inputValue.disease === "yes" &&
  //         inputValue.parent === "father-and-mother"
  //       )
  //         return 0;
  //     }
  //     if (item.disease === "yes" && item.parent === "father-or-mother") {
  //       if (inputValue.disease === "no") return 0.5;
  //       if (
  //         inputValue.disease === "yes" &&
  //         inputValue.parent === "father-or-mother"
  //       )
  //         return 1;
  //       if (
  //         inputValue.disease === "yes" &&
  //         inputValue.parent === "father-and-mother"
  //       )
  //         return 0.5;
  //     }
  //     if (item.disease === "yes" && item.parent === "father-and-mother") {
  //       if (inputValue.disease === "no") return 0;
  //       if (
  //         inputValue.disease === "yes" &&
  //         inputValue.parent === "father-or-mother"
  //       )
  //         return 0.5;
  //       if (
  //         inputValue.disease === "yes" &&
  //         inputValue.parent === "father-and-mother"
  //       )
  //         return 1;
  //     }
  //   };
  //   const w1 = handleFamilyHistoryDiabetes();
  //   console.log("w1: " + w1);

  //   // handle input checkbox
  //   const handleInputCheckbox = (inputParam, itemParam) => {
  //     let count = 0;
  //     for (let i = 0; i < inputParam.length; i++) {
  //       for (let j = 0; j < itemParam.length; j++) {
  //         if (inputParam[i] === itemParam[j]) {
  //           ++count;
  //         }
  //       }
  //     }
  //     let finalCount = inputParam.length - count + (itemParam.length - count);
  //     return finalCount;
  //   };

  //   const w2 = handleInputCheckbox(inputValue.habit, item.habit);
  //   console.log("w2: " + w2);
  //   const w3 = handleInputCheckbox(inputValue.cause, item.cause);
  //   console.log("w3: " + w3);
  //   const w4 = handleInputCheckbox(inputValue.symptom, item.symptom);
  //   console.log("w4: " + w4);

  //   let result =
  //     (w1 * 4 + (1 - w2 * 0.2) * 3 + (1 - w3 * 0.1) * 5 + (1 - w4 * 0.1) * 5) /
  //     17;

  //   console.log("result: " + result);

  //   if (result > max) {
  //     max = result;
  //     diseaseIndex = index;
  //   }

  //   console.log("maxResult: " + max, "diseaseIndex:" + diseaseIndex);
  //   return diseaseIndex;
  // });

  //console.log("resIndex: " + resultIndex[resultIndex.length - 1]);

  console.log("input value", inputValue)

  return (
    <div className="App">
      <Container>
        <h1>Chào mừng bạn đến với hệ thống chuẩn đoạn sức khỏe dựa trên triệu chứng trên khuôn mặt</h1>
        <Form>
          <h3>Bạn hãy lựa chọn biêủ hiện của bạn hiện tại nhé</h3>

          <FaceSkin
            inputFaceSkinValue={inputValue}
            setInputFaceSkinValue={setInputValue}
          />
          <hr />

          {/* Nguyên nhân */}
          <Eye
            inputEyeValue={inputValue}
            setInputEyeValue={setInputValue}
          />
          <hr />

          {/* Triệu chứng */}
          <Ear
            inputEarValue={inputValue}
            setInputEarValue={setInputValue}
          />
          <hr />
           {/* Nguyên nhân */}
          <MountSynptom
            inputMouthValue={inputValue}
            setInputMouthValue={setInputValue}
          />
        

          <Button
            variant="primary"
            type="submit"
            onClick={(e) => handleSubmitButton(e)}
          >
            Xác nhận
          </Button>

          {/* <AdviceModal
            show={modalShow}
            onHide={setModalShow}
            //resIndex={resultIndex[resultIndex.length - 1]}
          /> */}
        </Form>
      </Container>
    </div>
  );
}

export default App;
