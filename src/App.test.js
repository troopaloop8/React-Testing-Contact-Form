import React from "react";
import { render, fireEvent } from "@testing-library/react";
import ReactDOM from 'react-dom';
import ReactTestUtils from 'react-dom/test-utils';
import { act } from 'react-dom/test-utils';
import App from "./App";
import "@testing-library/jest-dom/extend-expect";

test("renders App without crashing", () => {
  render(<App />);
  
});

test("Checks that all input fields are present, properly labeled, and that no duplicates exist", () => {
  const container = render(<App />);
  container.getByTestId("firstName");
  container.getByTestId("lastName");
  container.getByTestId("email");
  container.getByTestId("message");
  container.getByText(/First Name/i);
  container.getByText(/Last Name/i);
  container.getByText(/Email/i);
  container.getByText(/Message/i);
  console.log("All input fields in place and appropriately labeled.");
});

// test("button works", () => {
//   const container = render(<App />);
 
  
//   const submitButton = container.getByText(/submit/i);
  
//   act(() => {
//     submitButton.dispatchEvent(new MouseEvent('click', {bubbles: true}));;
    
//   })
  
//   const submitData = container.getByTestId("submitData");
  
//   expect(submitData.textContent).toBe(/aaa/i);
 
// });


// const lastName = getByText(/last/i);
  // const email = getByText(/email/i);
  // const message = getByText(/message/i);