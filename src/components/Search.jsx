import React, { useEffect, useState } from "react";
import sound from "../assets/pop-94319.mp3";
import axios from "axios";
import "./Search.css";
const Search = () => {
  const [searchTerm, setsearchTerm] = useState("");
  const [Data, setdata] = useState([]);
  const [isLoading, setisLoading] = useState(true);
  async function callAPI() {
    const { data } = await axios.get(
      "https://vercel-food-api-rho.vercel.app/query/beverages"
    );
    setdata(data);
    if (data.length > 0) {
      setisLoading(false);
    }
  }
  useEffect(() => {
    callAPI();
  }, []);
  return (
    <>
      <div
        class="flex w-full  justify-center items-end"
        style={{ padding: "20px" }}
      >
        <div class="relative mr-4 lg:w-full xl:w-1/2 w-2/4">
          <input
            type="text"
            placeholder="Enter any food....!!!"
            style={{ fontFamily: "cursive" }}
            id="hero-field"
            value={searchTerm}
            onChange={(e) => {
              setsearchTerm(e.target.value);
            }}
            name="hero-field"
            class="w-full bg-gray-100 bg-opacity-50 rounded border border-gray-300 focus:ring-2 focus:ring-indigo-200 focus:bg-transparent focus:border-indigo-500 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
          />
        </div>
        <button
          onClick={async () => {
            setisLoading(true);
            var a = new Audio(sound);
            console.log(a);
            var res = a.play();
            res
              .then(() => {})
              .catch((err) => {
                console.log(err);
              });
            var api =
              "https://vercel-food-api-rho.vercel.app/query/" + searchTerm;
            const { data } = await axios.get(api);
            setdata(data);
            if (data.length > 0) {
              setisLoading(false);
            }
            // console.log(data);
          }}
          style={{ fontFamily: "cursive" }}
          class="inline-flex text-white bg-indigo-500 border-0 py-2 px-6 focus:outline-none hover:bg-indigo-600 rounded text-lg"
        >
          Search
        </button>
      </div>
      {isLoading ? (
        <center>
          <img
            src="https://behalacollege.in/display_board/assets/images/ajax-spinner.gif"
            alt=""
            srcset=""
          />
        </center>
      ) : (
        <div
          style={{
            marginTop: "20px",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            gap: "40px",
            flexWrap: "wrap",
            marginBottom: "20px",
          }}
        >
          {Data.map((e) => {
            return (
              <div className="food_card">
                <h2 className="label">
                  {e.recipe.label.length < 15
                    ? e.recipe.label
                    : e.recipe.label.substring(0, 15) + "..."}
                </h2>
                <div className="imgContainer">
                  <img
                    style={{ borderRadius: "20px" }}
                    src={e.recipe.image}
                    alt="food_image"
                  />
                </div>
              </div>
            );
          })}
        </div>
      )}
    </>
  );
};

export default Search;
