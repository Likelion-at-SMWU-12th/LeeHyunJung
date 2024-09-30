import { useMutation, useQuery, useQueryClient } from "react-query";
import { createPost } from "../axios/index";
import { updatePost } from "../axios/index";
import { getPost } from "../axios/index";
import { deletePost } from "../axios/index";

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
