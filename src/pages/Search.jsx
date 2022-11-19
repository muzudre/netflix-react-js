import axios from "axios";
import React, { useEffect, useState } from "react";
import Movie from "../components/Movie";
import requests from "../Requests";

const Search = () => {
  const [movies, setMovies] = useState([]);
  const [search, setSearch] = useState("");

  useEffect(() => {
    axios
      .get(
        search
          ? `${requests.requestSearchAll}&query=${search}&page=1`
          : `${requests.requestSearchAll}&query=${"galaxy"}&page=1`
      )
      .then((request) => {
        setMovies(request.data.results);
      });
  }, [search]);

  return (
    <div>
      <div className="w-full text-white">
        <img
          className="w-full h-[250px] object-cover"
          src="https://assets.nflxext.com/ffe/siteui/vlv3/0ef67cc5-0aa7-47cf-87bd-7f595afc7cfb/d4735b77-6b60-4945-a511-81f5f9f57893/TJ-en-20221107-popsignuptwoweeks-perspective_alpha_website_large.jpg"
          alt="/"
        />
        <div className="bg-black/60 fixed top-0 left-0 w-full h-[550px]"></div>
        <div className="items-center justify-center absolute top-[10%] p-4 md:p-8 w-full text-center">
          <h1 className="text-3xl md:text-5xl font-bold">Search for movies</h1>
          <input
            onChange={(e) => setSearch(e.target.value)}
            className="p-3 my-2 bg-gray-700 rounded w-full md:w-96"
            type="text"
            value={search}
            placeholder="Search..."
          />
        </div>
        <div>
          <h2 className="text-white font-bold md:text-xl p-4">
            Searched Results
          </h2>
          <div className="relative flex items-center group">
            <div id={"slider"} className="w-full h-full relative">
              {movies
                ?.filter((item) => {
                  return item.backdrop_path == null ? false : true;
                })
                .map((item, id) => (
                  <Movie item={item} key={id} />
                ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Search;
