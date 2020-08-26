import React from "react";
import CurveChart from "./CurveChart";
import BarChart from "./BarChart";
import "./styles.css";

export default function ChartGrid() {
  return (
    <div className="chart-grid">
      <div className="charts">
        <CurveChart curveType={1} />
      </div>

      <div className="charts">
        <BarChart barChartType={1} />
      </div>

      <div className="charts">
        <CurveChart curveType={2} />
      </div>

      <div className="charts">
        <BarChart barChartType={2} />
      </div>
    </div>
  );
}
