// import React, { useState, useEffect } from "react";

import {  useState } from "react";
import BookRow from './Component/BookRow';


export const App = () => {
  // main array of objects state || books state || books array of objects
    const [books,setBooks]=useState([]);
  // input field states
    const [title, setTitle]=useState("");
    const [author, setAuthor]=useState("");
    const [isbn, SetIsbn]=useState("");
    const [pubYear, setPubYear]=useState("");
    // clear input 
    const clearInput =()=>{
      setTitle(""),
      setAuthor(""),
      setPubYear(""),
      SetIsbn("");
    }
  // form submit event
  const handelSubmit = (e)=>{
    e.preventDefault();
  
  // delete book from LS
    const book ={
      title,
      author,
      isbn,
      pubYear,
    }
    setBooks( [...books, book]);
    clearInput();
  };
  
  
  
     
  // saving data to local storage

  return (
    <div className="wrapper">
      <h1>BookList App</h1>
      <p>Add and view your books using local storage</p>
      <div className="main">
        <div className="form-container">
          <form className="form-group" onSubmit={handelSubmit}>
            <label>Title</label>
            <input type="text" className="form-control" value={title} onChange={(e)=>setTitle(e.target.value)} required></input>
            <br></br>
            <label>Author</label>
            <input type="text" className="form-control" value={author} onChange={(e)=> setAuthor(e.target.value)} required></input>
            <br></br>
            <label>ISBN#</label>
            <input type="text" className="form-control" required value={isbn} onChange={(e)=>SetIsbn(e.target.value)}></input>
            <br></br>
            <label>Publish Year</label>
            <input type="text" className="form-control" required value={pubYear} onChange={(e)=>setPubYear(e.target.value)}  ></input>
            <br></br>
            <button type="submit" className="btn btn-success btn-md" >
              ADD
            </button>
          </form>
        </div>

        <div className="view-container">
              {
                books.length > 0? 
          <>
            <div className="table-responsive">
                <table className="table">
                <thead>
                  <tr>
                    <th>ISBN#</th>
                    <th>Title</th>
                    <th>Author</th>
                    <th>Puslish Year</th>
                    <th>Delete</th>
                  </tr>
                </thead>
                <tbody>
                  
                { books.map((send)=><BookRow key={send.isbn} booksList = {send} />
                  )}
                  
                </tbody>
              </table>
            </div>
            <button className="btn btn-danger btn-md" onClick={()=>setBooks([])}>Remove All</button>
          </>
              : <h2>No Data</h2>
              }
        </div>
      </div>
    </div>
  );
};

export default App;
