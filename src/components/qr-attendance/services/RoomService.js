import axios from "axios";
import { API_PATH, ROUTE_ROOMS } from "../Const";

export const getRooms = () => {
  return new Promise((resolve, reject) => {
    const url = `${API_PATH}/${ROUTE_ROOMS}`;
    console.log("GET ==> ", url);
    axios
      .get(url)
      .then((result) => resolve(result))
      .catch((error) => reject(error));
  });
};
