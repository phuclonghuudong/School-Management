"use client";

import Image from "next/image";
import {
  Bar,
  BarChart,
  CartesianGrid,
  Legend,
  Tooltip,
  XAxis,
  YAxis,
} from "recharts";

const data = [
  {
    name: "Mon",
    present: 60,
    absent: 40,
  },
  {
    name: "Tue",
    present: 60,
    absent: 40,
  },
  {
    name: "Wed",
    present: 60,
    absent: 40,
  },
  {
    name: "Thu",
    present: 60,
    absent: 40,
  },
  {
    name: "Fri",
    present: 70,
    absent: 60,
  },
  {
    name: "Sar",
    present: 60,
    absent: 30,
  },
  {
    name: "Sun",
    present: 80,
    absent: 40,
  },
];

const AttendanceChart = () => {
  return (
    <div className="bg-white rounded-lg p-4 h-full">
      <div className="flex justify-between items-center">
        <h1 className="text-lg font-semibold">Attendance</h1>
        <Image src={"/moreDark.png"} alt="" width={20} height={20} />
      </div>

      <div className="">
        <BarChart
          style={{
            width: "100%",
            height: "90%",
            aspectRatio: 1.618,
          }}
          responsive
          data={data}
          barSize={20}
        >
          <CartesianGrid strokeDasharray="3 3" vertical={false} stroke="#ddd" />
          <XAxis
            dataKey="name"
            axisLine={false}
            tick={{ fill: "var(--lama-gray)" }}
          />
          <YAxis
            axisLine={false}
            tick={{ fill: "var(--lama-gray)" }}
            tickLine={false}
          />
          <Tooltip
            contentStyle={{ borderRadius: "10px", borderColor: "lightgray" }}
          />
          <Legend
            align="center"
            verticalAlign="top"
            wrapperStyle={{ paddingTop: "20px", paddingBottom: "40px" }}
          />
          <Bar
            dataKey="present"
            fill="var(--lama-yellow)"
            legendType="circle"
            radius={[10, 10, 0, 0]}
          />
          <Bar
            dataKey="absent"
            fill="var(--lama-sky)"
            legendType="circle"
            radius={[10, 10, 0, 0]}
          />
        </BarChart>
      </div>
    </div>
  );
};

export default AttendanceChart;
