import React, { useContext, useEffect, useState } from "react";
import SideBar from "../Components/SideBar";
import axios from "axios";
import { UserContext } from "../context/UserContext";

function Posts() {
  const [posts, setPosts] = useState([]);
  const [error, setError] = useState()

  
  const {apiUrl, isLoading, setIsLoading} = useContext(UserContext)
  useEffect(() => {
    const fetchPosts = async () => {
    setIsLoading(true)
      try {
        //* using fetch native javascript method
        // const response = await fetch(apiUrl);
        // const data = await response.json();

        //* using axios package

        const response = await axios.get(apiUrl)
        const data = response.data
        
        setPosts(data);
      } catch (error) {
        setError(error)
      } finally{
        setIsLoading(false)
      }
    };
    fetchPosts();
  }, []);

  useEffect(() => {
    console.log(posts);
  }, [posts]);

  if(error){
    return <div>Something wrong , try later</div>
  }

  return (
    <div className="flex ">
      <SideBar />
      <div className="p-10">
        <h1 className="text-3xl font-bold">Posts Page</h1>
        {
            isLoading && <div>Fetching Data ....... </div>
        }

        {!isLoading &&  posts.map((post) => {
          return (
            <div>
              <h1>{post.title}</h1>
              {/* <p>{post.body}</p> */}
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default Posts;
