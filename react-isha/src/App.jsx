import React from "react";

export const App = () => {
  return (
    <React.Fragment>
      <NetflixCards />
      <NetflixCards />
      <NetflixCards />
      <NetflixCards />
    </React.Fragment>
  );
};

const NetflixCards = () => {
  const name = "The Lord of Rings";
  const rating = "8.2";
  const summary =
    "Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet";

  const returnGenre = () => {
    const genre = "RomCom";
    return genre;
  };

  const AgeLimit = () => {
    if (age >= 25) return "can definately watch this movie";
    return "cannot watch this movie";
  };

  const age = 28;
  return (
    <div>
      <div>
        <img src="/lotrimg.jpeg" alt="lort imggg" height="100%" width="40%" />
      </div>
      <h1>Name: {name}</h1>
      {/* use of dynamic variables in react */}
      <h2>Rating: {5 + 8}</h2>
      {/* use of dynamic expressions in react */}
      <h3>Summary: {summary}</h3>
      <p>Genre: {returnGenre()}</p>
      {/* use of dynamic function calls in react */}
      <button>{age >= 18 ? "Availabe" : "Not Available"}</button>
      <button>{AgeLimit()}</button>
    </div>
  );
};

export default App;
