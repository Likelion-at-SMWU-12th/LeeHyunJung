import axios from "axios";

// 세션 실습 함수
export const createPost = async (newPost) => {
  const { data } = await axios.post("/api/posts", newPost);
  return data;
};

export const updatePost = async (postId, updatedPost) => {
  const { data } = await axios.put(`/api/posts/${postId}`, updatedPost);
  return data;
};

export const getPost = async (postId) => {
  const { data } = await axios.get(`api/posts/${postId}`);
  return data;
};

export const deletePost = async (postId) => {
  const { data } = await axios.delte(`api/posts/${postId}`);
  return data;
};

//과제
// 회원가입
export const signUp = async (userinfo) => {
  const { data } = await axios.post(`api/users/signup`, userinfo);
  return data;
};

// 개인 정보 수정
export const updateProfile = async (userId, updatedInfo) => {
  const { data } = await axios.post(`api/users/profile/${userId}`, updatedInfo);
  return data;
};

// 마이페이지 조회
export const mypageFetch = async (userId) => {
  const { data } = await axios.get(`api/mypage/${userId}`);
  return data;
};

// 회원 정보 삭제
export const deleteUser = async (userId) => {
  const { data } = await axios.delete(`api/users/quit/${userId}`);
  return data;
};
