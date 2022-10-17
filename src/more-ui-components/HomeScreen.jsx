/* eslint-disable */
import React from "react";
import { getOverrideProps } from "@aws-amplify/ui-react/internal";
import { Button, Flex, Image, Rating, Text } from "@aws-amplify/ui-react";
import { Link } from "react-router-dom";

export default function HomeScreen(props) {
    const { overrides, ...rest } = props;

    return (
        <Flex>
            <Text>HEYYYYY</Text>
            <Link to="/">Home</Link>
            <Link to="/new-game">New Game</Link>
        </Flex>
    )
}