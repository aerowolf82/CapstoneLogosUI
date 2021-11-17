import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import { useContext } from "react";
import { AppContext } from "./AppContext.js";

const { appList, setAppList, user, setUser } = useContext(AppContext);

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<App />, div);
  ReactDOM.unmountComponentAtNode(div);
});

//App.js tests:
//carousel tests
it('renders a Slider object', () => {
  ReactDOM.render(<App />);
  expect(document.getElementById('Slider')).toBeTruthy();
});
xit(`shows an app the user has access to`, () => {
  //const user = {permissions: [access list via token.group_full]}
  //const appList = AppContext.appList;
  ReactDOM.render(<App />);

})
xit(`doesn't show an app the user doesn't have access to`, () => {

})
//grid tests

//AppCard.js:
//it('opens a modal on click')

//describe Home page
//it('Displays all Platform One apps', ()=>{})
//it('Allows user to see app details on click', ()=>{})
//it('Allows user to search apps by title', ()=>{})
//it('Allows user to search apps by purpose/description', ()=>{})
//it('Allows user to get to the download page/home page for an app', ()=>{})
//it('Allows user to submit a request form to change permissions/group access for an app', ()=>{})
//it('Allows user to navigate to profile page', ()=>{})
//it('Allows admin users to navigate to an admin page', ()=>{})
//it('Allows user to navigate to platform one home page?', ()=>{})

//describe Profile page
//it('Allows user to navigate to home page', ()=>{})
//it('Displays user's info and permissions', ()=>{})
//it('Allows user to submit a request form to change organization permissions/group access', ()=>{})


//describe Admin page
//it('', ()=>{})
//it('Allows admin to submit a form to publish a new product', ()=>{})
//it('Displays existing products filtered by same category and keywords as form, and asks user to confirm this is a new product before submitting', ()=>{})
//it('Allows user to navigate to profile page', ()=>{})
//it('Allows user to navigate to home page', ()=>{})
