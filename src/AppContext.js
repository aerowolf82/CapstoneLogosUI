// Create AppContext.js
import * as React from "react";
import "./App.css";
import { useState, useEffect, createContext } from "react";

export const AppContext = createContext(null);

function AppProvider({children}) {

//   set initial states here:
//   const [appList, setAppList] = useState([]); //full list of Apps in database (this is an array of objects of all apps)
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

//   useEffect(() => {
//       fetch API
//       set list
//       compare with token
//       set state active Apps
//       sort apps by active and inactive (make array of active using the token group-full, make array of inactive on the rest, then use .concat to recombine into one array)
//       set state inactive Apps (logic to set only inactive apps. Based on jwt group -full or simple)
//   }, []);

// create object with all your states and state-changing functions for the children to use
  const valueObj = {
//       list,
//       setList,
//       myApps,
//       setMyApps,
//       isMyApps,
//       setIsMyApp,
//       isActive,
//       setIsActive,
//       addMyApp, 
//       removeMyApp,
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