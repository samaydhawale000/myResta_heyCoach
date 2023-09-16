import { Button, Heading, Text } from "@chakra-ui/react";
import React from "react";
import { useNavigation } from "react-router-dom";
import { useNavigate } from "react-router-dom";

export default function RestaCards({
  name,
  contact,
  address,
  image,
  funct,
  id,
}) {
  const navigate = useNavigate();
  const handleEdit = () => {
    navigate("/addRestaurant", {
      state: { name, contact, address, image, id, isEdit: true },
    });
  };

  return (
    <div
      style={{
        width: "100%",
        border: "1.5px solid rgb(189, 189, 189)",
        borderRadius: "10px",
      }}
    >
      <img src={image} alt="" style={{ width: "100%", borderRadius: "10px" }} />
      <Heading fontSize={"22px"} textAlign={"center"}>
        {name}
      </Heading>
      <Text fontSize={"18px"} textAlign={"center"}>
        {contact}
      </Text>
      <Text fontSize={"18px"} textAlign={"center"}>
        {address}
      </Text>

      <div
        style={{
          display: "flex",
          justifyContent: "space-between",
          margin: "20px",
        }}
      >
        <Button colorScheme="yellow" onClick={handleEdit}>
          Edit
        </Button>
        <Button colorScheme="red" onClick={() => funct(id)}>
          Detele
        </Button>
      </div>
    </div>
  );
}
