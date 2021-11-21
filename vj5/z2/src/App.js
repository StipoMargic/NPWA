import React, { useEffect, useState } from "react";
import Dropdown from "./Dropdown";

const anonymousToken = "jh9240q585hg9gq94gfhq3gweg2458gq34hg8q34ghqg8h3g4hg";

const headers = {
  "Content-Type": "application/json",
  Authorization: `Bearer ${anonymousToken}`,
};

const App = () => {
  const [locations, setLocations] = useState([]);
  const [city, setCity] = useState("");
  let cities = [];
  locations.map((l) =>
    !cities.includes(l.attributes.city) ? cities.push(l.attributes.city) : null
  );
  cities = cities.slice(0, 3);
  const [categories, setCategories] = useState([]);
  const [category, setCategory] = useState("");
  const makeApiReqForLocation = async () => {
    const result = await (
      await fetch("https://api.udruga-liberato.hr/web/v1/locations", {
        headers,
      })
    ).json();

    setLocations(result.data);
  };

  const makeApiReqForCategories = async () => {
    const res = await (
      await fetch("https://api.udruga-liberato.hr/web/v1/categories", {
        headers,
      })
    ).json();

    setCategories(res.data);
  };
  useEffect(() => {
    makeApiReqForLocation();
    makeApiReqForCategories();
  }, []);

  const renderLoc = () => {
    const selectedLocations = locations.filter(
      (l) =>
        l.attributes.city === city &&
        l.relationships.category.data.id === category
    );
    return (
      <>
        <h5>
          {selectedLocations.map((l) => (
            <p>{l.attributes.name}</p>
          ))}
        </h5>
      </>
    );
  };

  return (
    <div>
      <Dropdown setter={setCity} arr={cities} />

      {city !== "" && (
        <Dropdown setter={setCategory} arr={categories} category />
      )}
      {category !== "" && renderLoc()}
    </div>
  );
};

export default App;
