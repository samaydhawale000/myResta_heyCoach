import React, { useState } from "react";
import { Input, Heading, Button, Text } from "@chakra-ui/react";
import { Link } from "react-router-dom";
import axios from "axios";

export default function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [data, setData] = useState("");
  const [token, setToken] = useState("");

  function handleClick() {
    let obj = {
      email,
      password,
    };
    console.log(obj);
    axios
      .post(
        "https://cautious-red-flannel-nightgown.cyclic.cloud/api/user/login",
        obj
      )
      .then((res) => {
        console.log(res);
        setData(res.data.status);
        setToken(res.data.token);
      })
      .catch((err) => {
        console.log(err);
      });
  }

  return (
    <div className="loginDiv">
      <Heading fontSize={"26px"} marginBottom={"20px"} textAlign="center">
        Login{" "}
      </Heading>
      <Text fontWeight={600} marginBottom={"20px"} color={"green"}>
        {data == "Success" && "Login SuccessFull"}
      </Text>
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
        Login Now
      </Button>

      <Text display={"block"} marginTop={"20px"}>
        If you dont have any Account
      </Text>
      <Link
        style={{ display: "block", color: "#e1ac45", fontWeight: "600" }}
        to="/register"
      >
        Register Now
      </Link>
    </div>
  );
}
