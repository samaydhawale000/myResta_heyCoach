import React, { useState } from "react";
import { Input, Heading, Button, Text } from "@chakra-ui/react";
import { Link } from "react-router-dom";
import axios from "axios";
import {
  Alert,
  AlertIcon,
  AlertTitle,
  AlertDescription,
} from "@chakra-ui/react";

export default function Register() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [username, setUsername] = useState("");
  const [data, setData] = useState("");

  function handleClick() {
    let obj = {
      email,
      password,
      username,
    };
    console.log(obj);
    axios
      .post("https://cautious-red-flannel-nightgown.cyclic.cloud/api/user", obj)
      .then((res) => {
        console.log(res.data);
        setData(res.data.status);
        data == "Success"
          ? alert("Register Successfully")
          : alert("Wrong Credentials");
      })
      .catch((err) => {
        console.log(err);
      });
  }

  return (
    <div className="loginDiv">
      <Heading fontSize={"26px"} marginBottom={"20px"} textAlign="center">
        Register{" "}
      </Heading>
      <Input
        placeholder="Enter Username"
        colorScheme="yellow"
        marginBottom={"20px"}
        onChange={(e) => {
          setUsername(e.target.value);
        }}
      />
      <Input
        placeholder="Enter Email"
        colorScheme="yellow"
        marginBottom={"20px"}
        onChange={(e) => {
          setEmail(e.target.value);
        }}
      />
      <Input
        placeholder="Enter Password"
        colorScheme="yellow"
        marginBottom={"20px"}
        onChange={(e) => {
          setPassword(e.target.value);
        }}
      />
      <Button colorScheme="yellow" width="100%" onClick={handleClick}>
        Register Now
      </Button>

      <Text display={"block"} marginTop={"20px"}>
        Already have an Account?
      </Text>
      <Link
        style={{ display: "block", color: "#e1ac45", fontWeight: "600" }}
        to="/login"
      >
        Login Now
      </Link>
    </div>
  );
}
