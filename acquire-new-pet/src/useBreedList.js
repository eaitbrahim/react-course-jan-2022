import { useState, useEffect } from "react";

export default function useBreedList(pet) {
  const [breedList, setBreedList] = useState([]);
  const localCache = {};

  useEffect(() => {
    console.log("localCache from use effect: ", localCache);
    if (!pet) {
      setBreedList([]);
    } else if (localCache[pet]) {
      setBreedList(localCache[pet]);
    } else {
      requestBreedList();
    }

    async function requestBreedList() {
      setBreedList([]);
      const results = await fetch(
        `http://pets-v2.dev-apis.com/breeds?animal=${pet}`
      );
      const json = await results.json();
      localCache[pet] = json.breeds || [];
      console.log("localCache from requestBreedList: ", localCache);
      setBreedList(localCache[pet]);
    }
  }, [pet]);

  return [breedList];
}
