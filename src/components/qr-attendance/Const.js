// Domain
export const DOMAIN = "http://localhost:3001";
export const API_PREFIX = "api/v1";
export const API_PATH = `${DOMAIN}/${API_PREFIX}`;
export const COMMON_COLOR = "#636363";
export const COMMON_COLOR_DARK_BLUE = "#2b3643";

// API Route
export const ROUTE_ROOMS = "room";
export const ROUTE_SUBJECTs = "subjects";
export const ROUTE_FACULTY = "faculty";
export const ROUTE_STUDENT = "students";
export const ROUTE_LECTURE = "lecture";
export const ROUTE_CLASSES = "class";

export const DOWNLOAD_FILE = (url, fileName) =>
  fetch("")
    .then((response) => response.blob())
    .then((blob) => {
      let url = window.URL.createObjectURL(blob);
      let a = document.createElement("a");
      a.href = url;
      a.download = fileName;
      a.click();
    });
