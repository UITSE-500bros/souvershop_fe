import React from "react";
import SalesIcon from "@/admin/assets/SalesIcon";

export default function AdminDashboard() {
  return (
    <div className="grid grid-cols-[2fr_1fr] grid-rows-4 place-items-center gap-5">
      <div className="Sale overview flex flex-col w-full p-5 bg-white rounded-md shadow-md justify-evenly">
        <span className="mb-5 text-xl font-medium">Tổng quan doanh số</span>
        {/* Icon group */}
        <div className="flex flex-row w-full gap-5">
          {/* Sale */}
          <div className="flex flex-col justify-center flex-1 border-r border-gray-300 pr-5">
            <SalesIcon className="self-center" />
            <div className="flex justify-between">
              <span>Doanh số </span>
              <span>1000</span>
            </div>
          </div>

          {/* Revenue */}
          <div className="flex flex-col justify-center flex-1 border-r border-gray-300 pr-5">
            <SalesIcon className="self-center" />
            <div className="flex justify-between">
              <span>Doanh thu </span>
              <span>2000</span>
            </div>
          </div>

          {/* Profit */}
          <div className="flex flex-col justify-center flex-1 border-r border-gray-300 pr-5">
            <SalesIcon className="self-center" />
            <div className="flex justify-between">
              <span>Lợi nhuận </span>
              <span>1500</span>
            </div>
          </div>

          {/* Cost */}
          <div className="flex flex-col justify-center flex-1 pr-5">
            <SalesIcon className="self-center" />
            <div className="flex justify-between">
              <span>Chi phí </span>
              <span>500</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
