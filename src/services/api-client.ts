import axios from "axios";

export default axios.create({
  baseURL: "https://api.rawg.io/api",
  params: {
    key: "df6f3bdaf96f4911a90334e7c9685674",
  },
});
