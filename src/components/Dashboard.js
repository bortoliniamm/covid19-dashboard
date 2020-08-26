import React from "react";
import "./styles.css";

import PieAndCardsGrid from "./PieAndCardsGrid";
import ChartGrid from "./ChartGrid";

import dashboardHelper from "../helpers/dashboardHelpers";

export default function Dashboard({ currCountrySummary }) {
  const formattedCurrCountry = dashboardHelper.formatCurrCountryArr(
    currCountrySummary
  );

  const percentages = dashboardHelper.calculatePercentages(currCountrySummary);

  return (
    <div className="my-dashboard" style={{ alignItems: "center" }}>
      <div className="custom-main-grid">
        <PieAndCardsGrid
          country={formattedCurrCountry}
          percentages={percentages}
        />
        <ChartGrid />
      </div>
    </div>
  );
}
