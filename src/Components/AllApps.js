import { Grid } from "@mui/material";
import AppCard from "./AppCard.js";
import { useContext } from "react";
import { AppContext } from "../AppContext.js";
import './AllApps.css'

export default function AllApps() {
  const { appList, activeApps } = useContext(AppContext);
  let activeNames = [];
  for (let item of activeApps) {
    activeNames.push(Object.values(item)[0]);
  }

  return (
    <Grid container spacing={4} className = 'grid'>
      {activeApps.map((app, index) => (
        <Grid item xs={12} sm={6} md={4} lg={3} xl={2} >
          <AppCard
            app={app}
            appicon={app.icon}
            appiconalt={app.icon_alt}
            key={index}
          />
        </Grid>
      ))}
      {appList.map((app, index) =>
        !activeNames.includes(app.name) ? (
          <Grid item xs={12} sm={6} md={4} lg={3} xl={2}>
            <AppCard
              app={app}
              appicon={app.icon_grey}
              appiconalt={app.icon_grey_alt}
              key={index}
            />
          </Grid>
        ) : (
          <></>
        )
      )}
    </Grid>
  );
}
