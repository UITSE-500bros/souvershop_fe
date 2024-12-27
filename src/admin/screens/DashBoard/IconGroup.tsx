import React from "react";

type SalesIconProps = {
    Icon: React.ComponentType<{ className?: string }>;
    label: string;
    value: number;
}


export default function IconGroup({ Icon, label, value }: SalesIconProps) {
  return (
    <div className="flex flex-1 flex-col justify-center border-r border-gray-300 pr-5">
      <Icon className="self-center" />
      <div className="flex justify-between">
        <span>{label} </span>
        <span>{value}</span>
      </div>
    </div>
  );
}
