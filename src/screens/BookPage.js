import React, { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import BackButton from "../components/BackButton";
const BookPage = () => {
  const params = useParams();
  const [singlePost, setSinglePost] = useState({});
  const URL = `http://localhost/mysite/wp-json/wp/v2/books/${params.id}`;
  const getData = async () => {
    fetch(URL)
      .then((response) => response.json())
      .then((data) => setSinglePost({ data: data, isLoading: true }))
      .catch((err) => console.log(err));
  };
  console.log(singlePost);
  useEffect(() => {
    getData();
  }, []);
  const { data, isLoading } = singlePost;
  return (
    <div>
      <BackButton to={"/"} />
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <h1>Books Detail Page</h1>
        <div>
          {isLoading ? (
            <div
              style={{
                display: "flex",
                flexDirection: "column",
                justifyContent: "center",
                alignItems: "center",
                width: "40vw",
                backgroundColor: "gray",
                padding: 10,
                borderRadius: 20,
              }}
            >
              <h3>
                Book Title: <strong>{data.title.rendered}</strong>
              </h3>
              <p
                dangerouslySetInnerHTML={{ __html: data.content.rendered }}
              ></p>
              <div
                style={{
                  display: "flex",
                  flexDirection: "column",
                  justifyContent: "flex-end",
                  alignItems: "flex-end",
                }}
              >
                <p>
                  Published By: <strong>{data.acf.publisher}</strong>
                </p>
              </div>
            </div>
          ) : (
            <h3>Loading......</h3>
          )}
        </div>
      </div>
    </div>
  );
};

export default BookPage;
