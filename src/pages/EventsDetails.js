import { useState, useEffect } from "react";
import { useParams, useHistory } from "react-router-dom";
import Layout from "../components/Layout";
import getEventDetails from "../utils/getEventDetails";
import TitleSection from "../components/TitleSection";
import DetailsEventComponent from "../components/DetailsEventComponent";
import { changeEventState } from "../utils/changeEventState";
import Button from "../components/Button";

export default function EventsDetails() {
  const params = useParams();
  const ht = useHistory();
  const [event, setEvent] = useState();

  useEffect(() => {
    getEventDetails(params.id)
      .then((data) => {
        setEvent(data);
      })
      .catch((err) => console.error(err.message));
  }, []);

  const changeStateOfEvent = () => {
    changeEventState({ id: params.id })
      .then((res) => {
        if (res.message) {
          console.log(res);
          ht.push("/dashboard/events");
        }
      })
      .catch((err) => console.error(err));
  };
  return (
    <Layout>
      <TitleSection title={`${event?.titulo} / Detalles`} />
      <div className="container_details container_radius">
        <DetailsEventComponent event={event} />
        <div style={{ width: "300px", margin: "1emauto" }}>
          <Button
            functionToExecute={changeStateOfEvent}
            text="Revisar evento"
          />
        </div>
      </div>
    </Layout>
  );
}
