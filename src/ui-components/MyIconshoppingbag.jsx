/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

/* eslint-disable */
import React from "react";
import { getOverrideProps } from "@aws-amplify/ui-react/internal";
import { Icon } from "@aws-amplify/ui-react";
export default function MyIconshoppingbag(props) {
  const { overrides, ...rest } = props;
  return (
    <Icon
      width="24px"
      height="24px"
      overflow="hidden"
      position="relative"
      padding="0px 0px 0px 0px"
      viewBox={{ minX: 0, minY: 0, width: 24, height: 24 }}
      paths={[
        {
          d: "M14 4L12 4C12 1.79 10.21 0 8 0C5.79 0 4 1.79 4 4L2 4C0.9 4 0 4.9 0 6L0 18C0 19.1 0.9 20 2 20L14 20C15.1 20 16 19.1 16 18L16 6C16 4.9 15.1 4 14 4ZM8 2C9.1 2 10 2.9 10 4L6 4C6 2.9 6.9 2 8 2ZM14 18L2 18L2 6L4 6L4 8C4 8.55 4.45 9 5 9C5.55 9 6 8.55 6 8L6 6L10 6L10 8C10 8.55 10.45 9 11 9C11.55 9 12 8.55 12 8L12 6L14 6L14 18Z",
          fill: "rgba(13,26,38,1)",
          fillRule: "nonzero",
          style: { transform: "translate(16.67%, 8.33%)" },
        },
      ]}
      {...rest}
      {...getOverrideProps(overrides, "MyIconshoppingbag")}
    ></Icon>
  );
}
