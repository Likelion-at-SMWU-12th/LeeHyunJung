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
export const UpdateProfile = async (postId, updatedInfo) => {
  const { data } = await axios.post(`api/users/profile/${postId}`, updatedInfo);
  return data;
};
