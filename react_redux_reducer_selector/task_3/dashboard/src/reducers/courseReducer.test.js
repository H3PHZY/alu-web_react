import { courseReducer } from "./courseReducer";
import {
  FETCH_COURSE_SUCCESS,
  SELECT_COURSE,
  UNSELECT_COURSE,
} from "../actions/courseActionTypes";

describe("courseReducer", () => {
  it("returns an empty array as default state", () => {
    const state = courseReducer(undefined, {});
    expect(state).toEqual([]);
  });

  it("returns the data passed with isSelected false for FETCH_COURSE_SUCCESS", () => {
    const action = {
      type: FETCH_COURSE_SUCCESS,
      data: [
        { id: 1, name: "ES6", credit: 60 },
        { id: 2, name: "Webpack", credit: 20 },
        { id: 3, name: "React", credit: 40 },
      ],
    };
    const expectedData = [
      { id: 1, name: "ES6", isSelected: false, credit: 60 },
      { id: 2, name: "Webpack", isSelected: false, credit: 20 },
      { id: 3, name: "React", isSelected: false, credit: 40 },
    ];
    const state = courseReducer(undefined, action);
    expect(state).toEqual(expectedData);
  });

  it("returns the data with the right item updated for SELECT_COURSE", () => {
    const initialState = [
      { id: 1, name: "ES6", isSelected: false, credit: 60 },
      { id: 2, name: "Webpack", isSelected: false, credit: 20 },
      { id: 3, name: "React", isSelected: false, credit: 40 },
    ];
    const action = { type: SELECT_COURSE, index: 2 };
    const expectedData = [
      { id: 1, name: "ES6", isSelected: false, credit: 60 },
      { id: 2, name: "Webpack", isSelected: true, credit: 20 },
      { id: 3, name: "React", isSelected: false, credit: 40 },
    ];
    const state = courseReducer(initialState, action);
    expect(state).toEqual(expectedData);
  });

  it("returns the data with the right item updated for UNSELECT_COURSE", () => {
    const initialState = [
      { id: 1, name: "ES6", isSelected: false, credit: 60 },
      { id: 2, name: "Webpack", isSelected: true, credit: 20 },
      { id: 3, name: "React", isSelected: false, credit: 40 },
    ];
    const action = { type: UNSELECT_COURSE, index: 2 };
    const expectedData = [
      { id: 1, name: "ES6", isSelected: false, credit: 60 },
      { id: 2, name: "Webpack", isSelected: false, credit: 20 },
      { id: 3, name: "React", isSelected: false, credit: 40 },
    ];
    const state = courseReducer(initialState, action);
    expect(state).toEqual(expectedData);
  });
});
