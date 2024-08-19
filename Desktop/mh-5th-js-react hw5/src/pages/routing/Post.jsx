import { Box } from "@mui/material";
import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { getPostsById } from "../../api/jsonPH";

const Post = () => {
  const { id } = useParams();
  const [postData, setPostData] = useState({});
  useEffect(() => {
    (async () => {
      const newpostData = await getPostsById(id);
      console.log(newpostData);
      setPostData(newpostData);
    })();
  }, [id]);

  return (
    <Box display={"flex"} flexDirection={"column"} alignItems={"center"}>
      <h1>Post {id}</h1>
      <h2>{postData.title}</h2>
      <p>{postData.body}</p>
    </Box>
  );
};
export default Post;
