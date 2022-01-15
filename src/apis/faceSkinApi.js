const axios = require('axios');

export const getFaceSkin = async () => {
    const faceSkin = await axios.get('http://localhost:3001/api/symptoms/0');
    return faceSkin
}

export const getEye = async () => {
  const eye = await axios.get('http://localhost:3001/api/symptoms/1');
  return eye
}

export const getEar = async () => {
  const ear = await axios.get('http://localhost:3001/api/symptoms/2');
  return ear
}

 export const getMouth = async () => {
  const mouth = await axios.get('http://localhost:3001/api/symptoms/3');
  return mouth
}

export const postData = async (inputData) => {
  const data = await axios.post('http://localhost:3001/api/symptoms/handle', inputData);
  return data;
}

