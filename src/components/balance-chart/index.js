import React from "react";
import Chart from "react-apexcharts";

class BalanceChart extends React.Component {
  constructor(props) {
    super(props);

    // Get the current day name (e.g., "Mon", "Tue", etc.)
    const daysOfWeek = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];
    const currentDayName = daysOfWeek[new Date().getDay()];

    // Categories for the X-axis
    const categories = ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"];

    // Dynamically set the color for each day
    const labelColors = categories.map((day) =>
      day === currentDayName ? "#FFFFFF" : "#A1A2AF"
    );

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
          categories: categories,
          labels: {
            show: true, // Ensure X-axis labels are visible
            rotate: 0, // Prevent rotation of X-axis labels
            trim: false, // Don't trim long labels
            style: {
              colors: labelColors, // Set colors dynamically
            },
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
            show: false, // Hides the Y-axis labels
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
        },
        dataLabels: {
          enabled: false,
        },
        title: {
          text: "",
          align: "center",
          margin: 20,
          offsetY: 20,
          style: {
            fontSize: "12px",
          },
        },
        tooltip: {
          theme: "dark",
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
          data: [50689, 60789, 70986, 35894, 88000, 30000, 90000],
        },
      ],
    };
  }

  render() {
    return (
      <div id="chart" style={{ width: "100%", overflow: "hidden" }}>
        <Chart
          options={this.state.options}
          series={this.state.series}
          type="area"
          height={215}
        />
      </div>
    );
  }
}

export default BalanceChart;
