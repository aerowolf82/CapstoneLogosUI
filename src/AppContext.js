// Create AppContext.js
import * as React from "react";
import "./App.css";
import { useState, useEffect, createContext } from "react";
import mattermost from './images/Mattermost.svg'
import iron_bank from './images/Iron_Bank.svg'
import jira from './images/Jira.svg'
import confluence from './images/Confluence.svg'
import confluence_grey from './images/Confluence_Grey.svg'
import mattermost_grey from './images/Mattermost_Grey.svg'
import iron_bank_grey from './images/Iron_Bank_Grey.svg'
import jira_grey from './images/Jira_Grey.svg'
import terminus from './images/Terminus.svg'
import terminus_grey from './images/Terminus_Grey.svg'

// function importAll(r) {
//   let images = {};
//   r.keys().map((item, index) => { images[item.replace('./', '')] = r(item); });
//   return images;
// }
// const images = importAll(require.context('../images', false, /\.(png|jpe?g|svg)$/));
// console.log(images)

export const AppContext = createContext(null);

function AppProvider({ children }) {

  //   set initial states here:
  const [appList, setAppList] = useState([
    { name: `MatterMost IL2`, description: `IL2 Chat platform`, url: `https://chat.il2.dso.mil/`, icon: mattermost, role: '/Platform One/Party Bus/IL2/IL2-Atlassian', icon_grey: mattermost_grey, icon_grey_alt: 'mattermost_grey' },
    { name: `Jira`, description: `IL2 Ticket System`, url: `https://jira.il2.dso.mil/secure/Dashboard.jspa`, icon: jira, role: '/Platform One/Party Bus/IL2/IL2-Atlassian', icon_grey: jira_grey, icon_grey_alt: 'jira_grey' },
    { name: `Confluence`, description: `Collaboration platform`, url: `https://confluence.il2.dso.mil/#all-updates`, icon: confluence, role: '/Platform One/Party Bus/IL2/IL2-Atlassian', icon_grey: confluence_grey, icon_grey_alt: 'confluence_grey' },
    { name: `GitLab`, description: `Gitlab for Platform One`, url: `https://code.il2.dso.mil/`, icon: terminus, role: '/Platform One/Party Bus/IL2/IL2-Gitlab', icon_grey: terminus_grey, icon_grey_alt: 'GitLab_grey' },
    { name: `Iron Bank`, description: `Your source for secured container images`, url: `https://ironbank.dso.mil/about`, icon: iron_bank, role: '', icon_grey: iron_bank_grey, icon_grey_alt: 'iron_bank_grey' }
  ]);

  const [activeApps, setActiveApps] = useState([{ name: `MatterMost IL2`, description: `IL2 Chat platform`, url: `https://chat.il2.dso.mil/`, icon: mattermost, role: '/Platform One/Party Bus/IL2/IL2-Atlassian', icon_grey: mattermost_grey, icon_grey_alt: 'mattermost_grey' },
    { name: `Jira`, description: `IL2 Ticket System`, url: `https://jira.il2.dso.mil/secure/Dashboard.jspa`, icon: jira, role: '/Platform One/Party Bus/IL2/IL2-Atlassian', icon_grey: jira_grey, icon_grey_alt: 'jira_grey' },
    { name: `GitLab`, description: `Gitlab for Platform One`, url: `https://code.il2.dso.mil/`, icon: terminus, role: '/Platform One/Party Bus/IL2/IL2-Gitlab', icon_grey: terminus_grey, icon_grey_alt: 'GitLab_grey' },
    { name: `Iron Bank`, description: `Your source for secured container images`, url: `https://ironbank.dso.mil/about`, icon: iron_bank, role: '', icon_grey: iron_bank_grey, icon_grey_alt: 'iron_bank_grey' }
  ])
  
  // const [permissionsList, setPermissionsList] = useState([]);
  const [user, setUser] = useState([]);
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
    activeApps,
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