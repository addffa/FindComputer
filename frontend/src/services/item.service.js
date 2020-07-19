import axios from "axios";

const ITEM_URI = `${process.env.REACT_APP_API_URL}/items`;

export async function getItems() {
  return axios.get(ITEM_URI);
}