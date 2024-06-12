import axios from 'axios';

const server = process.env.REACT_APP_API_SERVERURL;

// wish
// Wish List를 가져오는 Axios 요청을 수행하는 함수
export const fetchWishList = async (userInfo) => {
  try {
    const response = await axios.post(`${server}/ft/wish/list`, { email: userInfo.email }); // 이메일 데이터 보내기
    const wishList = response.data;
    return wishList;
  } catch (error) {
    console.log('Error fetching wish list:', error);
    throw error;
  }
};

// 좋아요 클릭을 처리하는 함수
export const handleLikeClickAPI = async (iid, userEmail) => {
  try {
    const response = await axios.post(`${server}/ft/wish/click`, {
      iid: iid,
      email: userEmail
    });
    return response;
  } catch (error) {
    throw error;
  }
};

export const fetchItemWishCounts = async (iid) => {
  try {
    const response = await axios.get(`${server}/ft/wish/count/${iid}`);
    return response;
  } catch (error) {
    console.log('아이템 찜 수를 불러오는 중 에러:', error);
    throw error;
  }
};