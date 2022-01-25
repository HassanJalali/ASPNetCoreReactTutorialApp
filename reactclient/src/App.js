import React, { useState } from "react";
import Constants from "./utilities/constants";

export default function App() {

  const [posts , setPosts] = useState([]);

function getPosts()
{
  const url = Constants.API_URL_Get_All_Posts;
  fetch(url , {
    method: 'GET'
  })
  .then(Response => Response.json())
  .then(postsFromServer => {
setPosts(postsFromServer);
  })
  .catch((error) => {
    console.log(error);
    alert(error);
  });
}

  return (
    <div className="container">
      <div className="row min-vh-100">
        <div className="col d-flex flex-column justify-content-center align-items-center">
        <div>
        <h1>ASP .NET React Tutorial</h1>

        <div className="mt-5">
          <button onClick={getPosts} className="btn btn-dark btn-lg w-100 ">Get Posts From Server</button>
          <button onClick={() => {}} className="btn btn-secondary mt-4 btn-lg w-100 ">Create New Post</button>
        </div>
        </div>
          {posts.length > 0 && RenderPostsTable()}
        </div>
      </div>
    </div>
  );
  function RenderPostsTable() {
    return (
      <div className="table-responsive mt-5">
        <table className="table table-bordered border-dark">
          <thead className="text-center">
            <tr>
              <th scope="col">PostId (PK)</th>
              <th scope="col">Title</th>
              <th scope="col">Content</th>
              <th scope="col">CRUD Operation</th>
            </tr>
          </thead>
          <tbody className="text-center">
           {posts.map((item) => (
              <tr key={item.postId} >
              <th scope="Row">{item.postId}</th>
              <td>{item.title}</td>
              <td>{item.content}</td>
            <td>
            <button type="button" className="btn btn-dark btn-lg mx-3 my-3">Update</button>
            <button className="btn btn-secondary btn-lg">Delete</button>            
            </td>
            </tr>
           ) )}
          </tbody>
        </table>
        <button onClick={() => setPosts([])} className="btn btn-dark btn-lg w-100">Empty React Posts Array</button>
      </div>
    );
  }
}
