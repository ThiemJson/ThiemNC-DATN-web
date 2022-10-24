import axios from "axios";
import { API_PATH, ROUTE_ROOMS } from "../Const";

export const getRooms = () => {
  return new Promise((resolve, reject) => {
    const url = `${API_PATH}/${ROUTE_ROOMS}`;
    axios
      .get(url)
      .then((result) => resolve(result.data))
      .catch((error) => reject(error));
  });
};
