import styled from "styled-components";
import React, { useEffect, useState } from "react";
import { getPostList } from "../../lib/apis/postApis";


export default function PostList() {
  const [postList, setPostList] = useState([]);
  useEffect(() => {
    getPostList().then((res) => console.log(res));
  });

  return <div>PostItem</div>;

}

