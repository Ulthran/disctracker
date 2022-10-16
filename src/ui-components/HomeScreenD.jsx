/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

/* eslint-disable */
import React from "react";
import { getOverrideProps } from "@aws-amplify/ui-react/internal";
import { Button, Flex, Heading } from "@aws-amplify/ui-react";
export default function HomeScreenD(props) {
  const { overrides, ...rest } = props;
  return (
    <Flex
      gap="141px"
      width="1443px"
      justifyContent="center"
      alignItems="center"
      position="relative"
      padding="0px 0px 0px 0px"
      backgroundColor="rgba(255,255,255,1)"
      {...rest}
      {...getOverrideProps(overrides, "HomeScreenD")}
    >
      <Flex
        gap="35px"
        direction="column"
        width="fit-content"
        height="762px"
        alignItems="center"
        shrink="0"
        position="relative"
        padding="54px 37px 54px 37px"
        {...getOverrideProps(overrides, "Sidebar")}
      >
        <Heading
          display="flex"
          gap="0"
          width="fit-content"
          shrink="0"
          position="relative"
          padding="0px 0px 0px 0px"
          level="3"
          children="View Stats"
          {...getOverrideProps(overrides, "Heading32322696")}
        ></Heading>
        <Button
          display="flex"
          width="fit-content"
          justifyContent="center"
          alignItems="center"
          shrink="0"
          position="relative"
          padding="8px 16px 8px 16px"
          size="large"
          isDisabled={false}
          variation="link"
          children="View by Player"
          {...getOverrideProps(overrides, "Button32292687")}
        ></Button>
        <Button
          display="flex"
          width="fit-content"
          justifyContent="center"
          alignItems="center"
          shrink="0"
          position="relative"
          padding="8px 16px 8px 16px"
          size="large"
          isDisabled={false}
          variation="link"
          children="View by Roster"
          {...getOverrideProps(overrides, "Button32322688")}
        ></Button>
        <Button
          display="flex"
          width="fit-content"
          justifyContent="center"
          alignItems="center"
          shrink="0"
          position="relative"
          padding="8px 16px 8px 16px"
          size="large"
          isDisabled={false}
          variation="link"
          children="View by Game"
          {...getOverrideProps(overrides, "Button32322692")}
        ></Button>
        <Heading
          display="flex"
          gap="0"
          width="fit-content"
          shrink="0"
          position="relative"
          padding="0px 0px 0px 0px"
          level="3"
          children="Create/Edit"
          {...getOverrideProps(overrides, "Heading32322698")}
        ></Heading>
        <Button
          display="flex"
          width="fit-content"
          justifyContent="center"
          alignItems="center"
          shrink="0"
          position="relative"
          padding="8px 16px 8px 16px"
          size="large"
          isDisabled={false}
          variation="link"
          children="View/Create/Edit Players"
          {...getOverrideProps(overrides, "Button32322700")}
        ></Button>
        <Button
          display="flex"
          width="fit-content"
          justifyContent="center"
          alignItems="center"
          shrink="0"
          position="relative"
          padding="8px 16px 8px 16px"
          size="large"
          isDisabled={false}
          variation="link"
          children="View/Create/Edit Rosters"
          {...getOverrideProps(overrides, "Button32322704")}
        ></Button>
        <Heading
          display="flex"
          gap="0"
          width="fit-content"
          shrink="0"
          position="relative"
          padding="0px 0px 0px 0px"
          level="3"
          children="Settings"
          {...getOverrideProps(overrides, "Heading32322708")}
        ></Heading>
        <Heading
          display="flex"
          gap="0"
          width="fit-content"
          shrink="0"
          position="relative"
          padding="0px 0px 0px 0px"
          level="5"
          children="Nothing to set yet :)"
          {...getOverrideProps(overrides, "Heading32342712")}
        ></Heading>
      </Flex>
      <Button
        display="flex"
        gap="0"
        width="235px"
        height="77px"
        justifyContent="center"
        alignItems="center"
        shrink="0"
        position="relative"
        size="large"
        isDisabled={false}
        variation="primary"
        children="New Game"
        {...getOverrideProps(overrides, "Button32342714")}
      ></Button>
      <Flex
        gap="52px"
        direction="column"
        width="fit-content"
        alignItems="center"
        shrink="0"
        height="726.29px"
        position="relative"
        padding="129px 33px 129px 33px"
        {...getOverrideProps(overrides, "TitleInfo")}
      >
        <Heading
          display="flex"
          gap="0"
          width="468.64px"
          height="96.29px"
          justifyContent="center"
          alignItems="center"
          shrink="0"
          position="relative"
          padding="0px 0px 0px 0px"
          level="1"
          children="Disc Tracker"
          {...getOverrideProps(overrides, "Heading32342718")}
        ></Heading>
        <Heading
          display="flex"
          gap="0"
          width="503px"
          shrink="0"
          position="relative"
          padding="0px 0px 0px 0px"
          level="3"
          children="Conveniently record and aggregate ultimate stats&#xA;&#xA;View stats by player, by roster, or by game&#xA;&#xA;Automatically keep track of all the important things"
          {...getOverrideProps(overrides, "Heading32342724")}
        ></Heading>
      </Flex>
    </Flex>
  );
}
