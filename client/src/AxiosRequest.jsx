import axios from "axios";

const Base_URL = `/api/`;
const TOKEN = process.env.AXIOS_TOKEN;
// console.log(TOKEN)

export const publicRequest = axios.create({
  baseURL: Base_URL,
});

export const userRequest = axios.create({
  baseURL: Base_URL,
  header: { token: `Bearer ${TOKEN}` },
});
