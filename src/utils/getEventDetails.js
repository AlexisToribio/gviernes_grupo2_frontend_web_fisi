import { API_URL } from "../constants/API_URL";

export default function getEventDetails(id) {
  return fetch(`${API_URL}/home/details/${id}`)
    .then((res) => res.json())
    .then((data) => {
      if (data.event) return data.event[0];
      else throw new Error(data.message);
    });
}
