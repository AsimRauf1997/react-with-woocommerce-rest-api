import React, { useEffect, useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
const BookItem = ({ data }) => {
  const [miscData, setMiscData] = useState([]);
  const URLFORMEDIA = `http://localhost/mysite/wp-json/wp/v2/media/${data.featured_media}`;
  const URLFORAUTHOR = `http://localhost/mysite/wp-json/wp/v2/users/${data.author}`;
  const getOtherData = () => {
    const getMedia = axios(URLFORMEDIA);
    const getAuthor = axios(URLFORAUTHOR);
    Promise.all([getMedia, getAuthor]).then((res) =>
      setMiscData({
        imgUrl: res[0].data.media_details.sizes.full.source_url,
        author: res[1].data.name,
        isLoaded: true,
      })
    );
  };
  useEffect(() => {
    getOtherData();
  }, []);
  const { imgUrl, author } = miscData;
  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        marginTop: 10,
      }}
    >
      <div
        style={{
          borderRadius: 20,
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "center",
          padding: 10,
          backgroundColor: "gray",
        }}
      >
        <h3>
          Title: <strong>{data.title.rendered}</strong>
        </h3>
        <p>
          Author : <strong>{author}</strong>
        </p>
        <img src={imgUrl} alt='data' />

        <div
          style={{
            width: "40vw",
          }}
        >
          <p dangerouslySetInnerHTML={{ __html: data.content.rendered }}></p>
        </div>
        <button
          style={{
            padding: 10,
            backgroundColor: "red",
            border: "none",
            borderRadius: 20,
          }}
        >
          <Link
            style={{
              textDecoration: "none",
              color: "black",
            }}
            to={`/book/${data.id}`}
          >
            Read More
          </Link>
        </button>
      </div>
    </div>
  );
};

export default BookItem;
