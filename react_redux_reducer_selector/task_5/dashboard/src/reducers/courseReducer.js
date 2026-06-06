import { Map } from "immutable";
import {
  FETCH_COURSE_SUCCESS,
  SELECT_COURSE,
  UNSELECT_COURSE,
} from "../actions/courseActionTypes";
import { coursesNormalizer } from "../schema/courses";

export const initialState = Map();

export const courseReducer = (state = initialState, action) => {
  switch (action.type) {
    case FETCH_COURSE_SUCCESS:
      const normalizedData = coursesNormalizer(action.data);
      const courses = normalizedData.entities.courses;
      for (const key in courses) {
        courses[key].isSelected = false;
      }
      return state.merge(courses);
    case SELECT_COURSE:
      return state.setIn([String(action.index), "isSelected"], true);
    case UNSELECT_COURSE:
      return state.setIn([String(action.index), "isSelected"], false);
    default:
      return state;
  }
};
