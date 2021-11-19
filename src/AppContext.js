// Create AppContext.js
import * as React from "react";
import "./App.css";
import { useState, useEffect, createContext } from "react";
import mattermost from './images/MatterMost.svg'
import iron_bank from './images/Iron_Bank.svg'
import jira from './images/Jira.svg'
import confluence from './images/Confluence.svg'
import confluence_grey from './images/Confluence_Grey.svg'
import mattermost_grey from './images/Mattermost_Grey.svg'
import iron_bank_grey from './images/Iron_Bank_Grey.svg'
import jira_grey from './images/Jira_Grey.svg'
import terminus from './images/Terminus.svg'
import terminus_grey from './images/Terminus_Grey.svg'



function importAll(r) {
  let images = {};
  r.keys().map((item, index) => { images[item.replace('./', '').replace('.svg', '').replace('_', ' ')] = r(item); });
  return images;
}
const images = importAll(require.context('./images', false, /\.(png|jpe?g|svg)$/));
// const images = importAll(require.context('./images', false, /\.(png|jpe?g|svg)$/));
// console.log(images)


function getImageLocations(applist, images) {
  //  map each item in appList and assign an image location to icon_url
  //  correct image location example : /static/media/confluence.6de3944b.svg

  let newAppList = applist.map((item) => {
    // let result = ``;
    //  loops through apps and assigns icon_url
    let imageKeyNames = Object.keys(images);
    for (let index = 0; index < imageKeyNames.length; index++) {
      if (item.name === imageKeyNames[index]) {
        // result = images[index].default;
        item.icon_url = images[imageKeyNames[index]].default;
      }
    }
    return item;
  });
  return newAppList;
}

export const AppContext = createContext(null);

function AppProvider({ children }) {

  //   set initial states here:
  const [appList, setAppList] = useState([]);
  const [imgLocations, setImgLocations] = useState([]);

  //full list of Apps in database (this is an array of objects of all apps)
  // const [permissionsList, setPermissionsList] = useState([]);
  const [user, setUser] = useState([]);
  const [activeApps, setActiveApps] = useState([]) //set based on token on load (this is an array including each app object that is active)


  //   const [isAdmin, setIsAdmin] = useState([])
  //   const [searchTerm, setSearchTerm] = useState([])
  // a favorites or MyApp state?

  //   function handleAppSubmit - function that runs when product team submits a new app
  //        handles changes to appList
  //   function handleIronBankSearchSubmit - function once search is entered
  //        handles a change to search item (need state for search item?)
  //   function handleRepoSearch - function for searching repo1 (navbar searchbar)\
  //   function handleCategorySearch - function for filtering by category


  useEffect(() => {
    // fetch app list from API //mocked
    // fetch tokens from endpoint //mocked
    // set setAppList //mocked
    // set a user with the info from the token
    // example user:
    // let fakeUserToken = []

    // async function addUser(fakeUserInfo) {
    //get real user info
    let fakeUserInfo = { first_name: 'Gary', last_name: `Guardian`, organization: `Oogity`, affiliation: `Boogity`, permissions: ['A', 'B', 'C'], email: `boo@boo.com`, rank: `Senior General` };
    setUser(fakeUserInfo);
    //console.log(user)
    // }
    // addUser(fakeUserInfo);
    let fakeAppList = [
      { name: `MatterMost`, description: `IL2 Chat platform`, url: `https://chat.il2.dso.mil/`, icon_url: `./images/MatterMost.svg`, role: '/Platform One/Party Bus/IL2/IL2-Atlassian' },
      { name: `Jira`, description: `IL2 Ticket System`, url: `https://jira.il2.dso.mil/secure/Dashboard.jspa`, icon_url: `./images/Jira.svg`, role: '/Platform One/Party Bus/IL2/IL2-Atlassian' },
      { name: `Confluence`, description: `Collaboration platform`, url: `https://confluence.il2.dso.mil/#all-updates`, icon_url: `/static/media/confluence.6de3944b.svg`, role: '/Platform One/Party Bus/IL2/IL2-Atlassian' },
      { name: `GitLab`, description: `Gitlab for Platform One`, url: `https://code.il2.dso.mil/`, icon_url: `/static/media/gitlab.08073d5a.svg`, role: '/Platform One/Party Bus/IL2/IL2-Gitlab' },
      { name: `Iron Bank`, description: `Your source for secured container images`, url: `https://ironbank.dso.mil/about`, icon_url: `./images/Iron_Bank.svg`, role: '' }
    ]

    // const [appList, setAppList] = useState([
    //   { name: `MatterMost IL2`, description: `IL2 Chat platform`, url: `https://chat.il2.dso.mil/`, icon: mattermost, role: '/Platform One/Party Bus/IL2/IL2-Atlassian', icon_grey: mattermost_grey, icon_grey_alt: 'mattermost_grey' },
    //   { name: `Jira`, description: `IL2 Ticket System`, url: `https://jira.il2.dso.mil/secure/Dashboard.jspa`, icon: jira, role: '/Platform One/Party Bus/IL2/IL2-Atlassian', icon_grey: jira_grey, icon_grey_alt: 'jira_grey' },
    //   { name: `Confluence`, description: `Collaboration platform`, url: `https://confluence.il2.dso.mil/#all-updates`, icon: confluence, role: '/Platform One/Party Bus/IL2/IL2-Atlassian', icon_grey: confluence_grey, icon_grey_alt: 'confluence_grey' },
    //   { name: `GitLab`, description: `Gitlab for Platform One`, url: `https://code.il2.dso.mil/`, icon: terminus, role: '/Platform One/Party Bus/IL2/IL2-Gitlab', icon_grey: terminus_grey, icon_grey_alt: 'GitLab_grey' },
    //   { name: `Iron Bank`, description: `Your source for secured container images`, url: `https://ironbank.dso.mil/about`, icon: iron_bank, role: '', icon_grey: iron_bank_grey, icon_grey_alt: 'iron_bank_grey' }
    // ]);
  
    // const [activeApps, setActiveApps] = useState([{ name: `MatterMost IL2`, description: `IL2 Chat platform`, url: `https://chat.il2.dso.mil/`, icon: mattermost, role: '/Platform One/Party Bus/IL2/IL2-Atlassian', icon_grey: mattermost_grey, icon_grey_alt: 'mattermost_grey' },
    //   { name: `Jira`, description: `IL2 Ticket System`, url: `https://jira.il2.dso.mil/secure/Dashboard.jspa`, icon: jira, role: '/Platform One/Party Bus/IL2/IL2-Atlassian', icon_grey: jira_grey, icon_grey_alt: 'jira_grey' },
    //   { name: `GitLab`, description: `Gitlab for Platform One`, url: `https://code.il2.dso.mil/`, icon: terminus, role: '/Platform One/Party Bus/IL2/IL2-Gitlab', icon_grey: terminus_grey, icon_grey_alt: 'GitLab_grey' },
    //   { name: `Iron Bank`, description: `Your source for secured container images`, url: `https://ironbank.dso.mil/about`, icon: iron_bank, role: '', icon_grey: iron_bank_grey, icon_grey_alt: 'iron_bank_grey' }
    // ])



    function addAppList(fakeAppList) {

      //get real user info from token
      // setAppList(fakeAppList)
      let newAppList = getImageLocations(fakeAppList, images)
      setAppList(newAppList)
    }



    addAppList(fakeAppList);

    // async function addActiveApps(fakeActiveApps) {
    let fakeActiveApps = [
      { name: `MatterMost IL2`, description: `IL2 Chat platform`, url: `https://chat.il2.dso.mil/`, icon_url: `./images/MatterMost.svg`, role: '/Platform One/Party Bus/IL2/IL2-Atlassian' },
      { name: `Jira`, description: `IL2 Ticket System`, url: `https://jira.il2.dso.mil/secure/Dashboard.jspa`, icon_url: `./images/Jira.svg`, role: '/Platform One/Party Bus/IL2/IL2-Atlassian' },
      { name: `Confluence`, description: `Collaboration platform`, url: `https://confluence.il2.dso.mil/#all-updates`, icon_url: `./images/confluence.svg`, role: '/Platform One/Party Bus/IL2/IL2-Atlassian' },
      { name: `Iron Bank`, description: `Your source for secured container images`, url: `https://ironbank.dso.mil/about`, icon_url: `./images/Iron_Bank.svg`, role: '' }
    ]
    setActiveApps(fakeActiveApps);
    // }
    // addActiveApps(fakeActiveApps);

    // function addImages(fakeImageLocations) {
    // fails to render because of this
    //console.log(`images from log: `, imgLocations)
    // }
    // addImages(fakeImageLocations);
    // setAppList(getImageLocations(fakeAppList, images));

  }, []);

  // create object with all your states and state-changing functions for the children to use
  const valueObj = {
    appList,
    setAppList,
    imgLocations,
    setImgLocations,
    user,
    setUser,
    activeApps,
    setActiveApps
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