import { combineReducers } from "redux";

import {
  SET_PERIOD,
  SET_COUNTRY_SUMMARY,
  SET_COUNTRY_TIMELINE,
  SET_ALL_COUNTRIES_SUMMARY,
  SET_ALL_COUNTRIES_TIMELINE,
} from "./actionTypes";

const initialPeriodToCheck = {
  period: 0,
};
const initialCountrySummary = {
  currCountrySummary: null,
};
const initialCountryTimeline = {
  currCountryTimelineData: null,
};
const initialAllCountriesSummary = {
  allCountriesSummary: null,
};
const initialAllCountriesTimeline = {
  allCountriesTimelineData: null,
};

function periodToCheck(state = initialPeriodToCheck, action) {
  switch (action.type) {
    case SET_PERIOD: {
      state = {
        period: action.payload,
      };
    }
    default:
      state = { ...state };
  }

  return state;
}

function summary(state = initialCountrySummary, action) {
  switch (action.type) {
    case SET_COUNTRY_SUMMARY: {
      state = {
        ...state,
        currCountrySummary: action.payload,
      };
    }
    default:
      state = { ...state };
  }

  return state;
}

function timeline(state = initialCountryTimeline, action) {
  switch (action.type) {
    case SET_COUNTRY_TIMELINE: {
      state = {
        ...state,
        currCountryTimelineData: action.payload,
      };
    }
    default:
      state = { ...state };
  }

  return state;
}

function allCountriesTimeline(state = initialAllCountriesTimeline, action) {
  switch (action.type) {
    case SET_ALL_COUNTRIES_TIMELINE: {
      state = {
        ...state,
        allCountriesTimelineData: action.payload,
      };
    }
    default:
      state = { ...state };
  }

  return state;
}
function allCountriesSummary(state = initialAllCountriesSummary, action) {
  switch (action.type) {
    case SET_ALL_COUNTRIES_SUMMARY: {
      state = {
        ...state,
        allCountriesSummary: action.payload,
      };
    }
    default:
      state = { ...state };
  }

  return state;
}
export default combineReducers({
  allCountriesSummary,
  allCountriesTimeline,
  periodToCheck,
  summary,
  timeline,
});
