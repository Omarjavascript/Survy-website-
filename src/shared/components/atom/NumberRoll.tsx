import React from "react";

interface Props {
  children?: React.ReactNode;
}

export default function NumberRoll({ children }: Props) {
  return (
    <div className="ds-text-white fomt-bold text-md items-center justify-center flex flex-col w-[65px] h-[64px] rounded-[57px] p-[10px] gap-[10px] ds-bg-zhry">
      {children}
    </div>
  );
}
