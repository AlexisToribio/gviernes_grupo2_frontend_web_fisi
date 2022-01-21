import { API_URL } from "../constants/API_URL";

export const changeEventState = ({ id }) => {
  return fetch(`${API_URL}/dashboardadmin/events/${id}`, {
    method: "PUT",
  }).then((res) => res.json());
};
