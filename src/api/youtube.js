import axios from "axios";

const KEY = "AIzaSyA82FOCXpXpY7RdhMZylWHhBMotsoO38bk";

export default axios.create({
  baseURL: "https://www.googleapis.com/youtube/v3",
  params: {
    part: "snippet",
    maxresults: 5,
    key: KEY
  }
});
