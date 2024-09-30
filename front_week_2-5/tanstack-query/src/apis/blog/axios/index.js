import axios from "axios";

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
