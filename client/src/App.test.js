import React from 'react';
import App from './App';
import "@testing-library/jest-dom/extend-expect"
import * as rtl from "@testing-library/react"

//describe("sum", () => {
  //it("3+4", () => {
    //const expected = 7;
    //const actual = App.sum(3,4)
    //expected(actual).toBe(expected);
  //})
//})

afterEach (rtl.cleanup)

it('renders without crashing', () =>{
  const wrapper = rtl.render(<App/>)
  wrapper.debug()
});

describe('addition', () => {
  it('3 and 4 will make 7', () => {
    expect(3+4).toBe(7);
  });
});