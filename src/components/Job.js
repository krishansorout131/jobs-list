import React, { useContext} from "react";
import SelectedJobContext from "../SelectedJobContext";
function Job(props) {
const { job } = props;
const { title } = job;

const selectedJobContextValue = useContext(SelectedJobContext);
function handleClick() {
if (selectedJobContextValue.selectedJob) {
selectedJobContextValue.setSelectedJob(null);
} else {
selectedJobContextValue.setSelectedJob(job);

}
}
const isJobSelected =
selectedJobContextValue.selectedJob &&
selectedJobContextValue.selectedJob.id === job.id;
return (
<li>
<article className="media job">
<div className="media-content">
<h4
onClick={handleClick}
className={isJobSelected ? "has-text-danger" : ""}
>
{title}
</h4>
</div>
</article>
</li>
);
}
export default Job;
