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
  return (
    <div>
      <div>
        <img
          src="../public/lotrimg.jpeg"
          alt="lort imggg"
          height="100%"
          width="40%"
        />
      </div>
      <h1>Lord of Rings</h1>
      <h2>Rating 8.2</h2>
      <h3>
        Summary Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet. Lorem
        ipsum dolor sit amet
      </h3>
    </div>
  );
};

export default App;
