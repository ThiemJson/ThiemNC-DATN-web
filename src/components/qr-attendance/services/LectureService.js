import axios from "axios";
import { API_PATH, ROUTE_LECTURE } from "../Const";

export const getLecture = () => {
  return new Promise((resolve, reject) => {
    const url = `${API_PATH}/${ROUTE_LECTURE}`;
    axios
      .get(url)
      .then((result) => resolve(result.data))
      .catch((error) => reject(error));
  });
};
