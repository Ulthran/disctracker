/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

/* eslint-disable */
import React from "react";
import { getOverrideProps } from "@aws-amplify/ui-react/internal";
import { Icon } from "@aws-amplify/ui-react";
export default function MyIconwarning(props) {
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
          d: "M0 19L22 19L11 0L0 19ZM12 16L10 16L10 14L12 14L12 16ZM12 12L10 12L10 8L12 8L12 12Z",
          fill: "rgba(13,26,38,1)",
          fillRule: "nonzero",
          style: { transform: "translate(4.17%, 12.5%)" },
        },
      ]}
      {...rest}
      {...getOverrideProps(overrides, "MyIconwarning")}
    ></Icon>
  );
}
