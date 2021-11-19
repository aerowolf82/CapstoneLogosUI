import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import { render, screen } from '@testing-library/react'
import { AppContext } from "./AppContext.js";
import '@testing-library/jest-dom'

//App.js tests:
//carousel tests

//grid tests
describe('Testing the grid', () => {

  const appList = [
    { name: `MatterMost IL2`, description: `IL2 Chat platform`, url: `https://chat.il2.dso.mil/`, icon: ``, role: '/Platform One/Party Bus/IL2/IL2-Atlassian', icon_alt: 'Mattermost', icon_grey: '', icon_grey_alt: 'Mattermost_grey' },
    { name: `Jira`, description: `IL2 Ticket System`, url: `https://jira.il2.dso.mil/secure/Dashboard.jspa`, icon: ``, role: '/Platform One/Party Bus/IL2/IL2-Atlassian', icon_alt: 'Jira', icon_grey: '', icon_grey_alt: 'Jira_grey'  },
    { name: `Confluence`, description: `Collaboration platform`, url: `https://confluence.il2.dso.mil/#all-updates`, icon: ``, role: '/Platform One/Party Bus/IL2/IL2-Atlassian', icon_alt: 'Confluence', icon_grey: '', icon_grey_alt: 'Confluence_grey'  },
    { name: `GitLab`, description: `Gitlab for Platform One`, url: `https://code.il2.dso.mil/`, icon: ``, role: '/Platform One/Party Bus/IL2/IL2-Gitlab', icon_alt: 'GitLab', icon_grey: '', icon_grey_alt: 'GitLab_grey'  },
    { name: `Iron Bank`, description: `Your source for secured container images`, url: `https://ironbank.dso.mil/about`, icon: ``, role: '', icon_alt: 'Iron Bank', icon_grey: '', icon_grey_alt: 'Iron_Bank_grey'  },
  ];

  const activeApps = [
    { name: `MatterMost IL2`, description: `IL2 Chat platform`, url: `https://chat.il2.dso.mil/`, icon: ``, role: '/Platform One/Party Bus/IL2/IL2-Atlassian', icon_alt: 'Mattermost', icon_grey: '', icon_grey_alt: 'Mattermost_grey' },
    { name: `Jira`, description: `IL2 Ticket System`, url: `https://jira.il2.dso.mil/secure/Dashboard.jspa`, icon: ``, role: '/Platform One/Party Bus/IL2/IL2-Atlassian', icon_alt: 'Jira', icon_grey: '', icon_grey_alt: 'Jira_grey'  },
    { name: `GitLab`, description: `Gitlab for Platform One`, url: `https://code.il2.dso.mil/`, icon: ``, role: '/Platform One/Party Bus/IL2/IL2-Gitlab', icon_alt: 'GitLab', icon_grey: '', icon_grey_alt: 'GitLab_grey'  },
    { name: `Iron Bank`, description: `Your source for secured container images`, url: `https://ironbank.dso.mil/about`, icon: ``, role: '', icon_alt: 'Iron Bank', icon_grey: '', icon_grey_alt: 'Iron_Bank_grey'  },
  ]

  const valueObj = {
    appList,
    activeApps
  };

  it('should render icons and titles from our mock data and grey icons if the app is not listed in active app', async () => {
    render(
      <AppContext.Provider value={valueObj}>
        <App />
      </AppContext.Provider>
    );
    let wait = await screen.findByText(/jira/i);
    expect(screen.getByText(/Mattermost/i)).toBeInTheDocument();
    expect(screen.getByAltText(/Mattermost/i)).toBeInTheDocument();
    expect(screen.queryByAltText('Confluence')).not.toBeInTheDocument();
    expect(screen.getByAltText(/Confluence_grey/i)).toBeInTheDocument();
  });
  
});


//AppCard.js:

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
