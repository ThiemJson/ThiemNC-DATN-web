import axios from "axios";
import { API_PATH, ROUTE_FACULTY } from "../Const";

export const getFaculty = () => {
  return new Promise((resolve, reject) => {
    const url = `${API_PATH}/${ROUTE_FACULTY}`;
    axios
      .get(url)
      .then((result) => resolve(result.data))
      .catch((error) => reject(error));
  });
};
