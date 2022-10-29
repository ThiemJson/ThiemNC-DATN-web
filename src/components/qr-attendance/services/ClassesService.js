import axios from "axios";
import { API_PATH, ROUTE_CLASSES } from "../Const";

export const getClass = () => {
  return new Promise((resolve, reject) => {
    const url = `${API_PATH}/${ROUTE_CLASSES}`;
    axios
      .get(url)
      .then((result) => resolve(result.data))
      .catch((error) => reject(error));
  });
};
