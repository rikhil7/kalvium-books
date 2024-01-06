import React, { useEffect } from "react";
import axios from "axios";
import loading from '../assets/loading.gif'
import { useDispatch, useSelector } from "react-redux";
import { fetchData } from "../utils/Redux/action";
export default function Home() {
  const dispatch = useDispatch();
  const books = useSelector((data) => {
    return data.books;
  });
  const query = useSelector((data) => {
    return data.query;
  });
  const formData = useSelector((data) => {
    return data.formData;
  });

  useEffect(() => {
    if (books.length == 0) {
      axios
        .get("https://reactnd-books-api.udacity.com/books", {
          headers: { Authorization: "whatever-you-want" },
        })
        .then((res) => {
          const data = res.data.books;
          dispatch(fetchData(data));
        })
        .catch((err) => {
          console.log(err);
        });
    }
    blur()
  }, []);

  console.log("books:", books);
  console.log("query:", query);

  const filteredBooks = books.filter((e, i) => {
    return e.title.toLowerCase().includes(query.toLowerCase());
  });
  
  const blur = ()=>{
    if (Object.keys(formData).length==0){
      document.body.style.overflow = "hidden"
      document.querySelector("#home").style.filter = "blur(10px)"
      document.querySelector("#home").style.pointerEvents = "none"
      document.querySelector("#search input").style.pointerEvents = "none"
    }else{
      document.body.style.overflow = "auto"
      document.querySelector("#search input").style.pointerEvents = "auto"
    }
  }

  return (
    <>
    {Object.keys(formData).length==0 && (
      <div className="blur-data">
        <div className="blur-data-text">Please Register to view Books!</div>
        <div className="blur-data-subtext">(Register Button : Top-Right Corner)</div>
      </div>
    )}
      <div id="home">
        {books.length != 0 ? (
          <div id="books-main">
            <div id="heading">BOOKS</div>
              {filteredBooks.length !=0 ? (
                  <div className="books-grid">
                      {filteredBooks.map((e, i) => {
                  return (
                    <div className="book" key={i}>
                      <a href={e.previewLink} target="blank"><img src={e.imageLinks.thumbnail} alt="" /></a>
                      <div className="book-title">{e.title}</div>
                      <div className="rating">
                        {e.averageRating ? e.averageRating : "3.69"} &#9733;
                        &nbsp;&nbsp;&nbsp;&nbsp;{" "}
                        <span style={{ color: "green" }}>FREE</span>{" "}
                      </div>
                    </div>
                  );
                })}
                  </div>
              ):(<div className="big-text">No Books Found</div>)}
          </div>
        ) : (
          <div id="loading"><img src={loading} alt="" /></div>
        )}
      </div>
    </>
  );
}
