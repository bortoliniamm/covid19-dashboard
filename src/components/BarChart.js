import React from "react";
import { useSelector } from "react-redux";
import "./styles.css";
import "../../node_modules/react-vis/dist/style.css";

import {
  FlexibleXYPlot,
  VerticalBarSeries,
  XAxis,
  YAxis,
  VerticalGridLines,
  HorizontalGridLines,
} from "react-vis";

import barChartHelper from "../helpers/barChartHelper";

export default function BarChart({ barChartType }) {
  const period = useSelector(({ periodToCheck }) => periodToCheck.period);
  const countryTimelineData = useSelector(
    ({ timeline }) => timeline.currCountryTimelineData
  );

  const chartParameters = barChartHelper.getBarChartParameters(
    countryTimelineData,
    period,
    barChartType
  );

  function formatTicks(tick) {
    const entrieToChangeTick = chartParameters.mostRecentPlotDataArr.find(
      (entrie) => {
        return entrie.x === tick;
      }
    );

    const newTick = entrieToChangeTick.tickDate;

    return newTick;
  }

  return (
    <div className="center">
      <h5>{chartParameters.title}</h5>
      <FlexibleXYPlot height={250} yDomain={[0, 1.1 * chartParameters.yMax]}>
        <VerticalGridLines />
        <HorizontalGridLines />
        <VerticalBarSeries data={chartParameters.mostRecentPlotDataArr} />
        <XAxis tickFormat={formatTicks} title={chartParameters.xLabel} />
        <YAxis title={chartParameters.yLabel} tickFormat={(v) => v / 1000} />
      </FlexibleXYPlot>
    </div>
  );
}

const mapStateToProps = function (state) {
  return {
    period: state.periodToCheck.period,
    countryTimelineData: state.timeline.currCountryTimelineData,
  };
};

// export default connect(mapStateToProps)(BarChart);
