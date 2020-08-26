function getBarChartParameters(countryTimelineData, period, barChartType) {
  let title = "";
  let xLabel = "";
  let yLabel = "";

  //barChartType: 1 for daily new cases and 2 for daily new deaths
  switch (barChartType) {
    case 1:
      title = "Daily cases";

      xLabel = "Day";
      yLabel = "New Cases (x10^3)";
      break;
    case 2:
      title = "Daily deaths";

      xLabel = "Day";
      yLabel = "Deaths";
      break;
    default:
  }

  let auxCountryTimeLineData = [];
  let day = 0;
  let dailyCount = 0;
  let accumulated = 0;
  countryTimelineData.forEach((entrie) => {
    if (barChartType === 1) {
      dailyCount = Number(entrie.cases) - accumulated;
    } else if (barChartType === 2) {
      dailyCount = Number(entrie.deaths) - accumulated;
    }

    accumulated = accumulated + dailyCount;
    auxCountryTimeLineData.push({
      x: day,
      y: Number(dailyCount),
      tickDate: entrie.dayAndMonth,
    });

    day++;
  });

  const mostRecentTimelineData = auxCountryTimeLineData.slice(-period);
  let yMax = 0;
  mostRecentTimelineData.forEach((entrie) => {
    if (entrie.y > yMax) {
      yMax = entrie.y;
    }
  });

  const chartParameters = {
    title: title,
    xLabel: xLabel,
    yLabel: yLabel,
    yMax: yMax,
    mostRecentPlotDataArr: mostRecentTimelineData,
  };

  return chartParameters;
}

export default { getBarChartParameters };
