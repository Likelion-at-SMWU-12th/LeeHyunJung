import { useMutation, useQuery, useQueryClient } from "react-query";
import { createPost } from "../axios/index";
import { updatePost } from "../axios/index";
import { getPost } from "../axios/index";
import { deletePost } from "../axios/index";
import { signUp } from "../axios/index";
import { updateProfile } from "../axios/index";
import { mypageFetch } from "../axios/index";

export const useCreatePOst = () => {
  return useMutation({
    mutationFn: ({ title, content }) => createPost(title, content),
  });
};

export const useUpdatePost = (postId) => {
  return useMutation({
    mutationFn: ({ postId, title, content }) =>
      updatePost(postId, title, content),
    enabled: !!postId,
  });
};

export const useGetPost = (postId) => {
  return useQuery({
    queryKey: ["post", postId],
    queryFn: () => getPost(postId),
    enabled: !!postId,
    staleTime: 10000,
    cacheTime: 60000,
  });
};

export const useDeletePost = () => {
  const queryClient = useQueryClient();
  return useMutation({
    mutationFn: ({ postId }) => deletePost(postId),
    onSuccess: () => {
      alert("게시글이 삭제되었습니다.");
      queryClient.invalidateQueries("postList");
    },
  });
};

// 회원가입
export const useSignUp = (username, password) => {
  return useMutation({
    mutationFn: ({ username, password }) => signUp(username, password),
    enabled: !!username && !!password,
    onSuccess: () => {
      alert("환영합니다");
    },
  });
};

// 개인 정보 수정
export const useUpdateProfile = (userId) => {
  const queryClient = useQueryClient();
  return useMutation({
    mutationFn: ({ userId, updatedInfo }) => updateProfile(userId, updatedInfo),
    enabled: !!userId,
    onSuccess: () => {
      alert("개인 정보가 수정되었습니다");
      queryClient.invalidateQueries("myPage");
    },
  });
};

// 마이 페이지 조회
export const useMypageFetch = (userId) => {
  return useQuery({
    queryKey: ["mypage", userId],
    queryFn: () => mypageFetch(userId),
    enabled: !!userId,
    staleTime: 30000,
    cacheTime: 300000,
  });
};
