import React from "react";
import CanvasJSReact from "@canvasjs/react-charts";
import "./index.css";
const CanvasJSChart = CanvasJSReact.CanvasJSChart;

const SummaryChart = () => {
  const options = {
    animationEnabled: true,
    backgroundColor: "transparent",
    axisY: {
      title: "",
      suffix: " k",
      labelFontColor: "#fff",
      lineColor: "transparent",
      tickColor: "transparent",
      fontSize: 1,
      fontFamily: "Readex Pro",
      gridColor: "#2d3530",
      fontWeight: 600,
    },
    axisX: {
      labelFontColor: "#FFFFFF",
      lineColor: "transparent",
      tickColor: "transparent",
      fontSize: 16,
      fontFamily: "Readex Pro",
      fontWeight: 500,
      labelFormatter: function (e) {
        // Custom labels for x-axis without year
        const customLabels = {
          1990: "Q1",
          1994: "Q2",
          1998: "Q3",
          2002: "Q4",
        };
        // Remove year by returning custom label or empty string
        return customLabels[e.value.getFullYear()] || "";
      },
    },
    data: [
      {
        type: "spline",
        color: "#E53535", // Custom color with transparency
        lineThickness: 3,
        markerSize: 10,
        xValueFormatString: " ",
        yValueFormatString: "#'K'",
        showInLegend: false,
        legendText: "",
        dataPoints: [
          { x: new Date(1990, 0), y: 90 },
          { x: new Date(1994, 0), y: 65 },
          { x: new Date(1998, 0), y: 5 },
          { x: new Date(2002, 0), y: 53 },
        ],
      },
    ],
  };

  return (
    <div className="chart-container">
      <CanvasJSChart options={options} />
    </div>
  );
};

export default SummaryChart;
