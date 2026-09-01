import React from "react";

interface Props {
  content: number;
}

export default function NumberRoll({ content }: Props) {
  return (
    <div className="gap-10 ds-text-white fomt-bold text-md items-center justify-center flex flex-col w-[65px] h-[64px] rounded-[57px] p-[10px] gap-[10px] ds-bg-zhry shrink-0 aspect-square">
      {content}
    </div>
  );
}
