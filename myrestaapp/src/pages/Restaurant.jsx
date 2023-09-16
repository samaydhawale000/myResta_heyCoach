import axios from "axios";
import React, { useEffect, useState } from "react";
import RestaCards from "../components/RestaCards";
import { Heading } from "@chakra-ui/react";

export default function Restaurant() {
  const [data, setData] = useState([]);
  useEffect(() => {
    axios
      .get("https://cautious-red-flannel-nightgown.cyclic.cloud/api/resta")
      .then((res) => {
        console.log(res.data.data);
        setData(res.data.data);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  function handle() {
    axios
      .get("https://cautious-red-flannel-nightgown.cyclic.cloud/api/resta")
      .then((res) => {
        console.log(res.data.data);
        setData(res.data.data);
      })
      .catch((err) => {
        console.log(err);
      });
  }

  function handledelete(id) {
    axios
      .delete(
        `https://cautious-red-flannel-nightgown.cyclic.cloud/api/resta/deleteRestaurant/${id}`
      )
      .then((res) => {
        console.log(res);
        handle();
      })
      .catch((err) => {
        console.log(err);
      });

    console.log(id);
  }

  return (
    <div className="restaMainDiv">
      {data.length > 0 ? (
        data.map((e) => {
          return (
            <RestaCards
              address={e.address}
              name={e.name}
              contact={e.contact}
              image={e.image}
              id={e._id}
              funct={handledelete}
            />
          );
        })
      ) : (
        <Heading>Loading...</Heading>
      )}
    </div>
  );
}
