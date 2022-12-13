import styled from "styled-components";
import React, { useEffect, useState } from "react";
import { getPostList } from "../../lib/apis/postApis";
import PostItem from "./PostItem";


export default function PostList() {
  const [postList, setPostList] = useState([]);

  const loadPost = async () => {
    await getPostList().then((res) => {
      setPostList([...res.data.post])
    })
  }
  useEffect(() => {
    // loadPost();
    getPostList().then((res) => {
      console.log(res);
      setPostList([...res.data.post])
    })
  }, []);

  return (
    <>
      <div>
        {
          postList.map((post, idx) => (
            <PostItem key={idx} {...post} />
          ))}

      </div>
    </>
  );
}

