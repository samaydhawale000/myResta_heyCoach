import React from "react";
import home from "../images/home.svg";
import { Button, Heading, Text } from "@chakra-ui/react";
import { Link } from "react-router-dom";

export default function Home() {
  return (
    <div className="homeMainDiv">
      <img src={home} alt="Image" />
      <div>
        <Heading fontSize={"24px"} marginTop={"10px"} color={"#e1ac45"}>
          Welcome to MyResto
        </Heading>
        <Heading marginTop={"20px"}>
          Get All the Resaturent Informations in one place
        </Heading>
        <Text marginTop={"20px"}>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Quaerat
          minima at cumque itaque quos exercitationem dignissimos? Omnis fugiat
          voluptates quasi ullam? Amet praesentium repellendus reprehenderit.
        </Text>

        <Link to="/restaurant">
          <Button marginTop={"25px"} colorScheme="yellow">
            Check Resaturants
          </Button>
        </Link>
      </div>
    </div>
  );
}
