import React from "react";
import NumberRoll from "../atom/NumberRoll";
import Title from "../atom/Title";
import Text from "../atom/Text";
interface Props {
  number: number;
  text: React.ReactNode;
  title: React.ReactNode;
}
export default function Box({ number = 1, text, title }: Props) {
  return (
    <div className="ds-bg-400  p-5 rounded-lg flex flex-col items-center justify-center">
      <NumberRoll number={number} />
      <Title className="my-2 ds-text-black">{title}</Title>
      <Text variant="ramadi" center={true} size="md">
        {text}
      </Text>
    </div>
  );
}
