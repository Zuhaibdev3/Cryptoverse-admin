import React from "react";
import Chart from "react-apexcharts";

class TableChart extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      options: {
        chart: {
          background: "transparent",
          foreColor: "#A1A2AF",
          toolbar: {
            show: false, // Hide the toolbar (zoom, pan options)
          },
        },
        colors: ["#38C947"],
        xaxis: {
          labels: {
            show: false, // Hide X-axis labels
          },
          axisBorder: {
            show: false, // Hide the X-axis border
          },
          axisTicks: {
            show: false, // Hide the X-axis ticks
          },
          tickPlacement: "on",
        },
        yaxis: {
          labels: {
            show: false, // Hide the Y-axis labels
          },
          axisBorder: {
            show: false, // Hide the Y-axis border
          },
          axisTicks: {
            show: false, // Hide the Y-axis ticks
          },
        },
        fill: {
          type: "gradient",
          gradient: {
            shade: "dark",
            type: "vertical",
            shadeIntensity: 0.5,
            gradientToColors: ["#38C94600", "#38C946"],
            inverseColors: false,
            opacityFrom: 1,
            opacityTo: 0.8,
            stops: [0, 100],
          },
        },
        stroke: {
          curve: "smooth",
          width: 1, // Adjust stroke width to fit smaller height
        },
        dataLabels: {
          enabled: false,
        },
        title: {
          text: "",
          align: "center",
          margin: 0,
          offsetY: 0,
          style: {
            fontSize: "1px",
          },
        },
        tooltip: {
          enabled: false, // Disable tooltips for better view in small height
        },
        grid: {
          padding: {
            right: 0,
            left: 0,
          },
          show: false, // Hide the grid lines
        },
      },
      series: [
        {
          name: "$",
          data: [1, 45, 65, 2], // Example data
        },
      ],
    };
  }

  render() {
    return (
      <div
        id="chart"
        style={{
          width: "100%",
          height: "154px", // Set fixed height
          minHeight: "154px",
          maxHeight: "154px",
          overflow: "hidden",
        }}
      >
        <Chart
          options={this.state.options}
          series={this.state.series}
          type="area"
          height={154} // Keep the height in Chart as well
        />
      </div>
    );
  }
}

export default TableChart;
