import {
  SET_ALL_COUNTRIES_SUMMARY,
  SET_ALL_COUNTRIES_TIMELINE,
  SET_COUNTRY_SUMMARY,
  SET_COUNTRY_TIMELINE,
  SET_PERIOD,
} from "./actionTypes";

export function setAllCountriesSummaries(summary) {
  return {
    type: SET_ALL_COUNTRIES_SUMMARY,
    payload: summary,
  };
}
export function setAllCountriesTimelines(summary) {
  return {
    type: SET_ALL_COUNTRIES_TIMELINE,
    payload: summary,
  };
}
export function setCountrySummary(summary) {
  return {
    type: SET_COUNTRY_SUMMARY,
    payload: summary,
  };
}
export function setCountryTimeline(timeline) {
  return {
    type: SET_COUNTRY_TIMELINE,
    payload: timeline,
  };
}
export function setPeriod(period) {
  return {
    type: SET_PERIOD,
    payload: period,
  };
}
