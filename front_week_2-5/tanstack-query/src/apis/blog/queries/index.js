import { useMutation, useQuery, useQueryClient } from "react-query";
import { createPost } from "../axios/index";
import { updatePost } from "../axios/index";
import { getPost } from "../axios/index";
import { deletePost } from "../axios/index";
import { signUp } from "../axios/index";
import { updateProfile } from "../axios/index";
import { mypageFetch } from "../axios/index";
import { deleteUser } from "../axios/index";

export const useCreatePost = () => {
  return useMutation({
    mutationFn: ({ title, content }) => createPost(title, content),
  });
};

export const useUpdatePost = (postId) => {
  return useMutation({
    mutationFn: ({ title, content }) => updatePost(postId, title, content),
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
    mutationFn: () => signUp(username, password),
    enabled: !!username && !!password,
    onSuccess: () => {
      alert("환영합니다");
    },
  });
};

// 개인 정보 수정
export const useUpdateProfile = () => {
  const queryClient = useQueryClient();
  return useMutation({
    mutationFn: ({ userId, updatedInfo }) => updateProfile(userId, updatedInfo),
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["mypage"] });
    },
  });
};

// 마이 페이지 조회
export const useMypageFetch = (userId) => {
  return useQuery({
    queryKey: ["mypage", userId],
    queryFn: () => mypageFetch(userId),
    staleTime: 30000,
    cacheTime: 300000,
  });
};

// 회원 정보 삭제
export const useDeleteUser = () => {
  const queryClient = useQueryClient();
  return useMutation({
    mutationFn: ({ userId }) => deleteUser(userId),
    cacheTime: 300000,
    onSuccess: () => {
      alert("사용자 정보가 삭제되었습니다");
      queryClient.invalidateQueries({ queryKey: ["mypage"] });
    },
  });
};
