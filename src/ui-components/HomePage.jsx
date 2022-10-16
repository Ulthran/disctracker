/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

/* eslint-disable */
import React from "react";
import {
  getOverrideProps,
  useDataStoreCreateAction,
} from "@aws-amplify/ui-react/internal";
import { Roster } from "../models";
import { schema } from "../models/schema";
import { Button, View } from "@aws-amplify/ui-react";
export default function HomePage(props) {
  const { overrides, ...rest } = props;
  const buttonThreeOneFiveNineTwoSixEightTwoOnClick = useDataStoreCreateAction({
    fields: { name: "TEST" },
    model: Roster,
    schema: schema,
  });
  return (
    <View
      width="360px"
      height="800px"
      overflow="hidden"
      position="relative"
      padding="0px 0px 0px 0px"
      backgroundColor="rgba(255,255,255,1)"
      {...rest}
      {...getOverrideProps(overrides, "HomePage")}
    >
      <Button
        display="flex"
        gap="0"
        position="absolute"
        top="551px"
        left="107px"
        direction="row"
        justifyContent="center"
        alignItems="center"
        size="large"
        isDisabled={false}
        variation="primary"
        children="New Roster"
        onClick={() => {
          buttonThreeOneFiveNineTwoSixEightTwoOnClick();
        }}
        {...getOverrideProps(overrides, "Button31592682")}
      ></Button>
      <Button
        display="flex"
        gap="0"
        position="absolute"
        top="146px"
        left="81px"
        direction="row"
        width="198px"
        height="89px"
        justifyContent="center"
        alignItems="center"
        size="large"
        isDisabled={false}
        variation="primary"
        children="Start Game"
        {...getOverrideProps(overrides, "Button31592690")}
      ></Button>
      <Button
        display="flex"
        gap="0"
        position="absolute"
        top="640px"
        left="107px"
        direction="row"
        justifyContent="center"
        alignItems="center"
        size="large"
        isDisabled={false}
        variation="primary"
        children="New Player"
        {...getOverrideProps(overrides, "Button31592686")}
      ></Button>
    </View>
  );
}
