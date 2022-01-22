import React, { useState } from "react";

export default function App() {

  const [posts , setPosts] = useState([]);

function getPosts()
{
  const url = 'http://localhost:50732/GetAllPost';
  fetch(url , {
    method: 'GET'
  })
  .then(Response => Response.json())
  .then(postsFromServer => {
console.log(postsFromServer);
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
          

          {RenderPostsTable()}
        </div>
      </div>
    </div>
  );
  function RenderPostsTable() {
    return (
      <div className="table-responsive mt-5">
        <table className="table table-bordered border-dark">
          <thead>
            <tr>
              <th scope="col">PostId (PK)</th>
              <th scope="col">Title</th>
              <th scope="col">Content</th>
              <th scope="col">CRUD Operation</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <th scope="Row">1</th>
              <td>Post 1 Content</td>
              <td>Post 1 Title</td>
            </tr>
            <td>
              <button className="btn btn-dark mx-3 my-3 btn-lg">Update</button>
              <button className="btn btn-secondary btn-lg">Delete</button>
            </td>
          </tbody>
        </table>
      </div>
    );
  }
}
