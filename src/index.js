import React from "react";
import  ReactDOM  from "react-dom";
import {useEffect, useState } from "react";
import JobsList from "./components/JobsList";
import FilterJobs from "./components/FilterJobs";
import useInputState from './hooks/useInputState';
import useCheckboxState from "./hooks/useCheckboxState";
import SelectedJobContext from "./SelectedJobContext";
import JobDrawer from "./components/JobDrawer";


function AppWrapper() {
  const [jobs, setJobs] = useState([]);
  let requestURL="https://krishansorout131.github.io/hello-world/data.json";
  let request= new XMLHttpRequest();
  request.open('GET',requestURL);
  request.responseType="json";
  request.send();
  request.onload=function()
  {
    const jobsvalue = request.response;
    setJobs(jobsvalue);

  }
  
  if (!jobs) {
    return null;
    } else {
    return <App jobs={jobs} />;
    }
}

  
 
  

function App(props) {
 const { jobs } = props;


  const [vertical, setVertical] = useState("All");
  const searchTextInputState = useInputState("");
  const [selectedJob, setSelectedJob] = useState(null);

  const showOnlyFeaturedCheckboxState = useCheckboxState(false);
const showOnlyRemoteCheckboxState = useCheckboxState(false);
 
const selectedJobContextValue = {
  selectedJob,
  setSelectedJob
  }
  

  return <SelectedJobContext.Provider value={selectedJobContextValue}>
<div>
<FilterJobs
vertical={vertical}
setVertical={setVertical}
searchTextInputState={searchTextInputState}
showOnlyFeaturedCheckboxState={showOnlyFeaturedCheckboxState}
showOnlyRemoteCheckboxState={showOnlyRemoteCheckboxState}
/>
<JobsList
jobs={jobs}

searchText={searchTextInputState.value}
showOnlyFeaturedJobs={showOnlyFeaturedCheckboxState.checked}
showOnlyRemoteJobs={showOnlyRemoteCheckboxState.checked}
vertical={vertical}
/>
<JobDrawer />
</div>
</SelectedJobContext.Provider>
}


ReactDOM.render(<AppWrapper />,document.getElementById("root"));
