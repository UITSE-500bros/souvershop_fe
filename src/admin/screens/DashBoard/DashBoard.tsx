import React from "react";
import SalesIcon from "@/admin/assets/SalesIcon";
import RevenueIcon from "@/admin/assets/RevenueIcon";
import ProfitIcon from "@/admin/assets/ProfitIcon";
import CostIcon from "@/admin/assets/CostIcon";
import IconGroup from "./IconGroup";

export default function AdminDashboard() {
  return (
    <div className="grid grid-cols-[2fr_1fr] grid-rows-4 place-items-center gap-5">
      <div className="flex flex-col w-full p-5 bg-white rounded-md shadow-md justify-evenly">
        <span className="mb-5 text-xl font-medium">Tổng quan doanh số</span>
        {/* Icon group */}
        <div className="flex flex-row w-full gap-5">
          <IconGroup Icon={SalesIcon} label="Doanh số" value={1000} />
          <IconGroup Icon={RevenueIcon} label="Doanh thu" value={2000} />
          <IconGroup Icon={ProfitIcon} label="Lợi nhuận" value={1500} />
          <IconGroup Icon={CostIcon} label="Chi phí" value={500} />
        </div>
      </div>

      {/*Stock */}
      <div>

      </div>

      {/** */}


    </div>
  );
}
