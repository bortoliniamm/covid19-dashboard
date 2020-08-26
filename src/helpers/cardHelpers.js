function getCardParameters(country, percentages, cardType) {
  const smallFontSize = "15px";
  const bigFontSize = "20px";

  const badNumberFontColor = "#ee5253";
  const goodNumberFontColor = "#10ac84";

  let title = "";

  let info1 = "";
  let value1 = "";
  let percentage1 = "";
  let showPercentage1 = false;
  let fontSize1 = "";
  let fontColor1 = "";

  let info2 = "";
  let value2 = "";
  let percentage2 = "";
  let showPercentage2 = false;
  let fontSize2 = "";
  let fontColor2 = "";

  //cardType: 1 for today summary, 2 for country overview
  //3 for closed cases and 4 for more info
  switch (cardType) {
    case 1:
      title = "Today";

      info1 = "New cases";
      value1 = "+" + country.total_new_cases_today;
      percentage1 = "";
      showPercentage1 = false;
      fontColor1 = badNumberFontColor;
      fontSize1 = bigFontSize;

      info2 = "New deaths";
      value2 = "+" + country.total_new_deaths_today;
      percentage2 = "";
      showPercentage2 = false;
      fontColor2 = badNumberFontColor;
      fontSize2 = smallFontSize;
      break;
    case 2:
      title = "Overview";

      info1 = "Total cases";
      value1 = country.total_cases;
      percentage1 = "";
      showPercentage1 = false;
      fontColor1 = badNumberFontColor;
      fontSize1 = smallFontSize;

      info2 = "Total deaths";
      value2 = country.total_deaths;
      percentage2 = percentages.strDeathsToTotalCases;
      showPercentage2 = true;
      fontColor2 = badNumberFontColor;
      fontSize2 = smallFontSize;

      break;
    case 3:
      title = "Closed";

      info1 = "Deaths";
      value1 = country.total_deaths;
      percentage1 = percentages.strDeathsToClosedCases;
      showPercentage1 = false;
      fontColor1 = badNumberFontColor;
      fontSize1 = smallFontSize;

      info2 = "Recovered";
      value2 = country.total_recovered;
      percentage2 = percentages.strRecoveredToClosedCases;
      showPercentage2 = false;
      fontColor2 = goodNumberFontColor;
      fontSize2 = smallFontSize;

      break;
    case 4:
      title = "More info";

      info1 = "Total critical";
      value1 = country.total_serious_cases;
      percentage1 = "";
      showPercentage1 = false;
      fontColor1 = badNumberFontColor;
      fontSize1 = smallFontSize;

      info2 = "Active";
      value2 = country.total_active_cases;
      percentage2 = "";
      showPercentage2 = false;
      fontColor2 = badNumberFontColor;
      fontSize2 = bigFontSize;

      break;
    default:
  }

  const cardParameters = {
    title: title,

    info1: info1,
    value1: value1,
    percentage1: percentage1,
    showPercentage1: showPercentage1,
    fontColor1: fontColor1,
    fontSize1: fontSize1,

    info2: info2,
    value2: value2,
    percentage2: percentage2,
    showPercentage2: showPercentage2,
    fontColor2: fontColor2,
    fontSize2: fontSize2,
  };

  return cardParameters;
}

const formatCurrCountryArr = (currCountry) => {
  const numberStyle = new Intl.NumberFormat("en-US");

  const {
    code,
    ourid,
    source,
    title,
    total_active_cases,
    total_cases,
    total_deaths,
    total_new_cases_today,
    total_new_deaths_today,
    total_recovered,
    total_serious_cases,
    total_unresolved,
  } = currCountry;

  const closed_cases = total_recovered + total_deaths;

  const formattedCurrCountry = {
    code,
    ourid,
    source,
    title,
    total_active_cases: numberStyle.format(total_active_cases),
    total_cases: numberStyle.format(total_cases),
    total_deaths: numberStyle.format(total_deaths),
    total_new_cases_today: numberStyle.format(total_new_cases_today),
    total_new_deaths_today: numberStyle.format(total_new_deaths_today),
    total_recovered: numberStyle.format(total_recovered),
    total_serious_cases: numberStyle.format(total_serious_cases),
    total_unresolved: numberStyle.format(total_unresolved),
    total_closed_cases: numberStyle.format(closed_cases),
  };

  return formattedCurrCountry;
};

const calculatePercentages = (currCountry) => {
  const { total_cases, total_deaths, total_recovered } = currCountry;

  const closed_cases = total_recovered + total_deaths;

  const rawPercentages = {
    deathsToTotalCases: total_deaths / total_cases,
    deathsToClosedCases: total_deaths / closed_cases,
    recoveredToClosedCases: total_recovered / closed_cases,
  };

  const formattedPercentages = {
    deathsToTotalCases: parseFloat(
      (100 * rawPercentages.deathsToTotalCases).toFixed(2)
    ),
    deathsToClosedCases: parseFloat(
      (100 * rawPercentages.deathsToClosedCases).toFixed(2)
    ),
    recoveredToClosedCases: parseFloat(
      (100 * rawPercentages.recoveredToClosedCases).toFixed(2)
    ),

    strDeathsToTotalCases:
      (100 * rawPercentages.deathsToTotalCases).toFixed(2) + "%",
    strDeathsToClosedCases:
      (100 * rawPercentages.deathsToClosedCases).toFixed(2) + "%",
    strRecoveredToClosedCases:
      (100 * rawPercentages.recoveredToClosedCases).toFixed(2) + "%",
  };

  return formattedPercentages;
};

export default {
  calculatePercentages,
  formatCurrCountryArr,
  getCardParameters,
};
