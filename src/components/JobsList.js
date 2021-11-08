import React from "react";

import jobs from '../data/jobs'
import Job from "./Job";
function JobsList(props){
  const {  jobs,
    searchText,
    showOnlyFeaturedJobs,
    showOnlyRemoteJobs,
    vertical
}=props; 
    let filteredJobs = jobs.filter(job => {
    return job.title.toLowerCase().includes(searchText.toLowerCase());
    });
    if (showOnlyFeaturedJobs) {
    filteredJobs = filteredJobs.filter(job => job.isFeatured);
    }
    if (showOnlyRemoteJobs) {
    filteredJobs = filteredJobs.filter(job => job.isRemote);
    }
    if (vertical && vertical !== "All") {
    filteredJobs = filteredJobs.filter(job => job.verticals.includes(vertical));
    }
    
    
    return (
    <div>
    <ol>
    {filteredJobs.map(job => (
    <Job key={job.title} job={job} />
    ))}
    </ol>
    </div>
    );
    }
    
    
export default JobsList;