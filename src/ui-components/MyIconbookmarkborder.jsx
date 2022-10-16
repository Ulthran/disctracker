/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

/* eslint-disable */
import React from "react";
import { getOverrideProps } from "@aws-amplify/ui-react/internal";
import { Icon } from "@aws-amplify/ui-react";
export default function MyIconbookmarkborder(props) {
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
          d: "M12 0L2 0C0.9 0 0 0.9 0 2L0 18L7 15L14 18L14 2C14 0.9 13.1 0 12 0ZM12 15L7 12.82L2 15L2 2L12 2L12 15Z",
          fill: "rgba(13,26,38,1)",
          fillRule: "nonzero",
          style: { transform: "translate(20.83%, 12.5%)" },
        },
      ]}
      {...rest}
      {...getOverrideProps(overrides, "MyIconbookmarkborder")}
    ></Icon>
  );
}
