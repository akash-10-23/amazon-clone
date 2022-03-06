import axios from "axios";

const instance = axios.create({
    baseURL: "https://us-central1-clone-cf8cb.cloudfunctions.net/api"
    //"http://localhost:5001/clone-cf8cb/us-central1/api"  //the API (cloud function) URL for localhost Testing
});

export default instance;