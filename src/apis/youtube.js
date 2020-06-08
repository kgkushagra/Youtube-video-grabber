import axios from 'axios';

const KEY= 'AIzaSyA0ltqeoAkkL0nYwMgqIq7EplDoFT_tZTg'  ;

export const baseParams = {
    part: "snippet",
    maxResults: 5,
    key: KEY
  };
  
  export default axios.create({
    baseURL: "https://www.googleapis.com/youtube/v3"
  });

