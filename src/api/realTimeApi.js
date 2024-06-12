import axios from 'axios';

const server = process.env.REACT_APP_API_SERVERURL;

export const realTimeList = async () => {
  try {
    const response = await axios.get(`${server}/ft/realTime/list`);;
    return response.data; 
  } catch (error) {
    console.log('답변 목록을 불러오는 중 에러:', error);
    throw error;
  }
};
