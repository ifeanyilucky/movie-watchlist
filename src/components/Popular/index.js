import React, { useState } from "react";
import { regularApi } from "../../config.js";
const Popular = () => {
  const [results, setResults] = useState([]);

  fetch(regularApi)
    .then((res) => res.json())
    .then((data) => {
      if (!data.error) {
        setResults(results);
      }
    });

  return (
    <div className="py-5 mx-auto text-center col-10">
      <h2 className="bubbleboy">Popular Movie</h2>
    </div>
  );
};

export default Popular;
