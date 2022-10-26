import axios from "axios";
import { API_PATH, ROUTE_STUDENT } from "../Const";

export const getStudents = () => {
  return new Promise((resolve, reject) => {
    const url = `${API_PATH}/${ROUTE_STUDENT}`;
    axios
      .get(url)
      .then((result) => resolve(result.data))
      .catch((error) => reject(error));
  });
};
