// Create AppContext.js
import * as React from "react";
import "./App.css";
import { useState, useEffect, createContext } from "react";

function importAll(r) {
  let images = {};
  r.keys().map((item, index) => { images[item.replace('./', '')] = r(item); });
  return images;
}

const images = importAll(require.context('../images', false, /\.(png|jpe?g|svg)$/));
console.log(images)

export const AppContext = createContext(null);

function AppProvider({ children }) {

  //   set initial states here:
  const [appList, setAppList] = useState([
    { name: `MatterMost IL2`, description: `IL2 Chat platform`, url: `https://chat.il2.dso.mil/`, icon_url: `./images/Mattermost.svg`, role: '/Platform One/Party Bus/IL2/IL2-Atlassian' },
    { name: `Jira`, description: `IL2 Ticket System`, url: `https://jira.il2.dso.mil/secure/Dashboard.jspa`, icon_url: `./images/Jira.svg`, role: '/Platform One/Party Bus/IL2/IL2-Atlassian' },
    { name: `Confluence`, description: `Collaboration platform`, url: `https://confluence.il2.dso.mil/#all-updates`, icon_url: `./images/confluence.svg`, role: '/Platform One/Party Bus/IL2/IL2-Atlassian' },
    { name: `GitLab`, description: `Gitlab for Platform One`, url: `https://code.il2.dso.mil/`, icon_url: `./images/gitlab.svg`, role: '/Platform One/Party Bus/IL2/IL2-Gitlab' },
    { name: `Iron Bank`, description: `Your source for secured container images`, url: `https://ironbank.dso.mil/about`, icon_url: `./images/Iron_Bank.svg`, role: '' },

  ]);
  //full list of Apps in database (this is an array of objects of all apps)
  // const [permissionsList, setPermissionsList] = useState([]);
  const [user, setUser] = useState([]);
  //   const [activeApps, setActiveApps] = useState([]) //set based on token on load (this is an array including each app object that is active)
  //   const [isAdmin, setIsAdmin] = useState([])
  //   const [searchTerm, setSearchTerm] = useState([])
  // a favorites or MyApp state?

  //   function handleAppSubmit - function that runs when product team submits a new app
  //        handles changes to appList
  //   function handleIronBankSearchSubmit - function once search is entered
  //        handles a change to search item (need state for search item?)
  //   function handleRepoSearch - function for searching repo1 (navbar searchbar)\
  //   function handleCategorySearch - function for filtering by category

  // if we need these, redo these add and remove functions for this project (this was using two diff arrays, Favorites and isFav)
  //   function addFavorite(appObj){
  //       if (!favorites.includes(appObj)) {
  //           setFavorites(favorites.concat(appObj));
  //           setIsFav(isFav.concat(appObj.name));
  //       }
  //   }

  //   function removeFavorite(appObj){
  //       let index = favorites.indexOf(appObj);
  //       let temp = [...favorites.slice(0, index), ...favorites.slice(index + 1)];
  //       setFavorites(temp);
  //       let index2 = isFav.indexOf(appObj.name);
  //       let temp2 = [...isFav.slice(0, index2), ...isFav.slice(index2 + 1)];
  //       setIsFav(temp2);
  //   }

  //   function getJSON(res) {
  //       return res.json();
  //   }

  useEffect(() => {
    // fetch app list from API //mocked
    // fetch tokens from endpoint //mocked
    // set setAppList //mocked
    // set a user with the info from the token
    // example user:
    let fakeUserInfo = { first_name: '', last_name: ``, organization: ``, affiliation: ``, permissions: [], email: ``, rank: `` };
    setUser(fakeUserInfo);
  }, []);

  // create object with all your states and state-changing functions for the children to use
  const valueObj = {
    appList,
    setAppList,
    user,
    setUser
  };

  return (
    <div className="App-provider">
      <AppContext.Provider value={valueObj}>
        {children}
      </AppContext.Provider>
    </div>
  );
}

export default AppProvider;