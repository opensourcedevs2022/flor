import { useEffect } from "react";

export default function Api() {
  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(
          `https://trefle.io/api/v1/plants?token=${process.env.REACT_APP_TREFLE_API_TOKEN}`
        );
        const json = await response.json();
        console.log(json.data);
      } catch (error) {
        console.error(error);
      }
    };
    fetchData();
  }, []);

  return null;
}
