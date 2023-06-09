import React from "react";

const CustomTooltip = ({ active, payload }) => {
  if (active && payload && payload.length) {
    const data = payload[0].payload;
    return (
        <div className="bg-white border rounded p-2">
        <p className="text-gray-600">{`Month: ${data.month}`}</p>
        <p className="text-blue-500">{`Personal Website: ${data.personalWebsite}`}</p>
        <p className="text-green-500">{`Google: ${data.google}`}</p>
        <p className="text-yellow-500">{`Other: ${data.other}`}</p>
      </div>
    );
  }

  return null;
};

export default CustomTooltip;
