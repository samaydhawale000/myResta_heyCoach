import React, { useState } from "react";
import { Input, Heading, Button, Text } from "@chakra-ui/react";
import { Link, useLocation } from "react-router-dom";
import axios from "axios";
import {
  Alert,
  AlertIcon,
  AlertTitle,
  AlertDescription,
} from "@chakra-ui/react";

export default function RestaForm() {
  const { state } = useLocation();

  const isEdit = state?.isEdit;

  const [contact, settContact] = useState("");
  const [name, setName] = useState("");
  const [address, setAddress] = useState("");
  const [data, setData] = useState("");
  const [imageUrl, setImageUrl] = useState("");

  const handleUpdate = () => {
    let obj = {
      contact,
      name,
      address,
      image: imageUrl,
    };
    axios
      .put(
        `https://cautious-red-flannel-nightgown.cyclic.cloud/api/resta/update/${state.id}`,
        obj
      )
      .then((res) => {
        console.log(res);
        res.data.status == "Success" &&
          alert("Restaurant Updated Successfully");
      })
      .then((err) => {
        console.log(err);
      });
  };

  const handleClick = () => {
    let obj = {
      contact,
      name,
      address,
      image: imageUrl,
    };
    axios
      .post(
        "https://cautious-red-flannel-nightgown.cyclic.cloud/api/resta/add",
        obj
      )
      .then((res) => {
        console.log(res);
        res.data.status == "Success" && alert("Restaurant Added Successfully");
      })
      .then((err) => {
        console.log(err);
      });
  };

  return (
    <div className="loginDiv">
      <Heading fontSize={"26px"} marginBottom={"20px"} textAlign="center">
        Add new restaurants{" "}
      </Heading>

      <Input
        placeholder="Enter name.."
        colorScheme="yellow"
        marginBottom={"20px"}
        onChange={(e) => {
          setName(e.target.value);
        }}
        // value={state && state?.name}
      />
      <Input
        placeholder="Enter Contact.."
        colorScheme="yellow"
        marginBottom={"20px"}
        onChange={(e) => {
          settContact(e.target.value);
        }}
        // value={state && state?.contact}
      />
      <Input
        placeholder="Enter Address.."
        colorScheme="yellow"
        marginBottom={"20px"}
        onChange={(e) => {
          setAddress(e.target.value);
        }}
        // value={state && state?.address}
      />

      <Input
        placeholder="Add image url"
        colorScheme="yellow"
        marginBottom={"20px"}
        onChange={(e) => {
          setImageUrl(e.target.value);
        }}
        // value={state && state?.image}
      />
      {!isEdit ? (
        <Button colorScheme="yellow" width="100%" onClick={handleClick}>
          Add New
        </Button>
      ) : (
        <Button colorScheme="yellow" width="100%" onClick={handleUpdate}>
          Update
        </Button>
      )}
    </div>
  );
}
