import { useState } from "react";

const Search = () => {
  const [location, setLocation] = useState("Toledo, OH");
  console.log("Location: ", location);

  return (
    <div>
      <form>
        <label htmlFor="location">
          location
          <input
            id="location"
            value={location}
            placeholder="Location"
            onChange={(e) => setLocation(e.target.value)}
          />
        </label>
        <button>Submit</button>
      </form>
    </div>
  );
};

export default Search;
