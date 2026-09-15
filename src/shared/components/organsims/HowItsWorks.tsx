import React from "react";
import { dataBox } from "@/shared/components/layout/dataBox";
import Box from "../melcuers/Box";
import Text from "../atom/Text";
export default function HowItsWorks() {
  return (
    <>
      <Text center={true}>How Its Works</Text>
      <div className="ds-container section grid grid-cols-1 gap-3  md:grid-cols-3 ">
        {dataBox.map((box) => (
          <Box
            key={box.id}
            number={box.number}
            text={box.text}
            title={box.title}
          />
        ))}
      </div>
    </>
  );
}
