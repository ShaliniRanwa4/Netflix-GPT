import React, { useRef } from "react";
import lang from "../utils/languageConstant";
import { useDispatch, useSelector } from "react-redux";
import openai from "../utils/openAi";
import { API_OPTIONS } from "../utils/constant";
import { addGptMoviesResult } from "../utils/gptSlice";

const GptSearchBar = () => {
  const langKey = useSelector((store) => store.config.lang);
  const dispatch=useDispatch();

  const searchText = useRef(null);

  const searchMovieTMDB= async(movie)=>{
    const data= await fetch("https://api.themoviedb.org/3/search/movie?query="+movie+"&include_adult=false&language=en-US&page=1", API_OPTIONS)
    const json=await data.json()
    return json.results
  }


  const handleGptSearch = async () => {
    // console.log(searchText.current.value)
    const gptQuery =
      "act as a movie recommendation system and suggest some movies for the query:give only name of 5  movies,comma seperated like the example given ahead.example :gadar,phir hera pheri,dilwale,don,aashiqui2,golmal";
    const gptResults = await openai.chat.completions.create({
      messages: [{ role: "user", content: gptQuery }],
      model: "gpt-3.5-turbo",
    });
    console.log(gptResults.choices?.[0]?.message?.content);
    const gptMovies=gptResults.choices?.[0]?.message?.content.split(",")

    const promiseArray=gptMovies.map((movie)=>searchMovieTMDB(movie))
    const tmdbResults=await Promise.all(promiseArray)
    console.log(tmdbResults)
    dispatch(addGptMoviesResult({movieNames:gptMovies,movieResult:tmdbResults}))
    // const gptResults= await api.chat.completions.create({
    //   model: "mistralai/Mistral-7B-Instruct-v0.2",
    //   messages: [
    //     {
    //       role: "system",
    //       content: gptQuery,
    //     },
    //     {
    //       role: "user",
    //       content: searchText.current.value ,
    //     },
    //   ],
    //   temperature: 0.7,
    //   max_tokens: 256,
    // });
    // console.log(gptResults.choices[0].message.content)
  };

  return (
    <div className="pt-[10%] flex justify-center">
      <form
        className="w-1/2 bg-black grid grid-cols-12"
        onSubmit={(e) => e.preventDefault()}
      >
        <input
          ref={searchText}
          className="p-4 m-4 col-span-9"
          type="text"
          placeholder={lang[langKey].searchPlaceholder}
        ></input>
        <button
          className="py-2 px-4 m-4 col-span-3 bg-red-700 text-white rounded-lg"
          onClick={handleGptSearch}
        >
          {lang[langKey].search}
        </button>
      </form>
    </div>
  );
};

export default GptSearchBar;
