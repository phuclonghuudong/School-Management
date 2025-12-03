"use client";
import Image from "next/image";
import { RadialBar, RadialBarChart } from "recharts";

const data = [
  {
    name: "Total",
    count: 130,
    fill: "white",
  },
  {
    name: "Girls",
    count: 50,
    fill: "#FAE27C",
  },
  {
    name: "Boys",
    count: 80,
    fill: "#C3EBFE",
  },
];

const style = {
  top: "50%",
  right: 0,
  transform: "translate(0, -50%)",
  lineHeight: "24px",
};

const CountChart = () => {
  return (
    <div className="bg-white rounded-xl w-full h-full p-4">
      {/* TITLE */}
      <div className="flex justify-between items-center">
        <h1 className="font-semibold text-lg">Students</h1>
        <Image src={"/moreDark.png"} alt="" width={20} height={20} />
      </div>

      {/* CHART */}
      <div className="w-full h-[75%] relative">
        <RadialBarChart
          style={{
            width: "100%",
            height: "100%",
            aspectRatio: 1.618,
          }}
          outerRadius={"100%"}
          innerRadius={"40%"}
          responsive
          cx="50%"
          cy="50%"
          barSize={32}
          data={data}
        >
          <RadialBar background dataKey="count" />
        </RadialBarChart>
        <Image
          src="/maleFemale.png"
          alt=""
          width={50}
          height={50}
          className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2"
        />
      </div>

      {/* BOTTOM */}
      <div className="flex justify-center gap-16">
        <div className="flex flex-col gap-1">
          <div className="w-5 h-5 bg-lamaSky rounded-full" />
          <h1 className="font-bold">1,23</h1>
          <h2 className="text-xs text-gray-300">Boys (55%)</h2>
        </div>
        <div className="flex flex-col gap-1">
          <div className="w-5 h-5 bg-lamaYellow rounded-full" />
          <h1 className="font-bold">1,23</h1>
          <h2 className="text-xs text-gray-300">Girls (45%)</h2>
        </div>
      </div>
    </div>
  );
};

export default CountChart;
