import axios from 'axios';

const server = process.env.REACT_APP_API_SERVERURL;

// reply
// 답변 목록을 가져오는 Axios 요청을 수행하는 함수
export const fetchReplies = async (bid) => {
  try {
    const response = await axios.get(`${server}/ft/reply/list/${bid}`);
    return response.data; // 가져온 답변 목록 반환
  } catch (error) {
    console.log('답변 목록을 불러오는 중 에러:', error);
    throw error;
  }
};

// 답변을 작성하는 Axios 요청을 수행하는 함수
export const postReply = async (replyData) => {
  try {
    const response = await axios.post(`${server}/ft/reply/insert`, replyData);
    return response.data; // 응답 데이터 반환
  } catch (error) {
    console.log('답변을 작성하는 중 에러:', error);
    throw error;
  }
};

// 답변을 수정하는 Axios 요청을 수행하는 함수
export const updateReply = async (replyData) => {
  try {
    const response = await axios.post(`${server}/ft/reply/update`, replyData);
    return response.data; // 응답 데이터 반환
  } catch (error) {
    console.log('답변을 수정하는 중 에러:', error);
    throw error;
  }
};

// 답변을 삭제하는 Axios 요청을 수행하는 함수
export const deleteReply = async (rid) => {
  try {
    const response = await axios.post(`${server}/ft/reply/delete/${rid}`);
    return response.data; // 응답 데이터 반환
  } catch (error) {
    console.log('답변을 삭제하는 중 에러:', error);
    throw error;
  }
};
