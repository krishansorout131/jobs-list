import React, { useContext,  useState, useEffect } from "react";
import SelectedJobContext from "../SelectedJobContext";
import useOutsideClickRef from "../hooks/useOutsideClickRef";
export default function JobDrawer(props) {
const selectedJobContextValue = useContext(SelectedJobContext);
const [isOpen, setIsOpen] = useState(false);
const ref = useOutsideClickRef(() => {
setIsOpen(false);
}, isOpen);
useEffect(() => {
if (selectedJobContextValue.selectedJob) {
setIsOpen(true);
}
}, [selectedJobContextValue.selectedJob]);
const { selectedJob } = selectedJobContextValue;
return (
<div
className={
isOpen
? "drawer has-background-light has-shadow open"
: "drawer has-background-light has-shadow "

}
ref={ref}
>
<section className="section">
<div className="content">
<h1>{selectedJob ? selectedJob.title : ""}</h1>
<p>{selectedJob ? selectedJob.description : ""}</p>
</div>
</section>
</div>
);
}
