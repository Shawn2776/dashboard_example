import Card from "@/components/Card";
import Chart from "@/components/Chart";
import Rightbar from "@/components/Rightbar";
import Transactions from "@/components/Transactions";
import React from "react";

const DashboardPage = () => {
  return (
    <div className="flex gap-5 mt-5">
      <div className="flex-3">
        <div className="flex justify-between gap-5">
          <Card />
          <Card />
          <Card />
        </div>
        <Transactions />
        <Chart />
      </div>
      <div className="flex-1">
        <Rightbar />
      </div>
    </div>
  );
};

export default DashboardPage;
