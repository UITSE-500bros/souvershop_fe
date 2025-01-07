import AdminIcon from "@/admin/assets/AdminIcon";
import { Icons } from "@/admin/assets/Icon";
import React from "react";

type SalesIconProps = {
    icon: string
    label: string;
    value: number;
    hasBorder?: boolean;
}


export default function IconGroup({ icon, label, value,hasBorder=true }: SalesIconProps) {
  return (
    <div className={`flex flex-1 flex-col justify-center ${hasBorder?'border-r border-gray-300':''} pr-5`}>
      <AdminIcon className="self-center">
        {Icons.costIcon}
      </AdminIcon>
      <div className="flex justify-between">
        <span>{label} </span>
        <span>{value}</span>
      </div>
    </div>
  );
}
