import React from "react";
//import { useState, useEffect } from "react";
import axios from "axios";
import PostCard from "../components/post-card";
import { useLoaderData } from "react-router-dom";

const PostList = () => {

  const {data:posts}=useLoaderData()
  //https://jsonplaceholder.typicode.com/posts?_limit=50
  // const [posts, setPosts] = useState([]);
  // const [loading, setLoading] = useState(false);

  // const fetchPosts = async () => {
  //   setLoading(true)
  //   try {
  //     const response = await axios.get(
  //       "https://jsonplaceholder.typicode.com/posts?_limit=50"
  //     );
  //     console.log(response)
  //     setPosts(response.data);
  //   } catch (error) {
  //     console.log("error fetching posts", error);
  //   }
  //   setLoading(false)
  // };

  // useEffect(()=>{
  //   fetchPosts()
  // },[])

  return <div>{
    posts.map((post)=> (
        <div key={post.id}>
            <PostCard post={post}/>
        </div>
        )
    )
  }</div>;
};

export async function postLoader(){
  const response=await axios.get("https://jsonplaceholder.typicode.com/posts?_limit=50")
  return response;
}


export default PostList;
