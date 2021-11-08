import React from "react";
import useDocumentTitle from "../hooks/useDocumentTitle";
import SelectInput from './SelectInput'


function FilterJobs(props) {
  const {vertical,setVertical,
    searchTextInputState,
    showOnlyFeaturedCheckboxState,
    showOnlyRemoteCheckboxState
    } = props;
    const searchMessage = searchTextInputState.value
     ? "Searching for " + searchTextInputState.value
     : "Search Jobs";

   useDocumentTitle(searchMessage);
  
   return (
    <section className="section filter-jobs">
    <h1>{searchMessage}</h1>
    <div>
    <div className="field has-addons">
    <div className="control is-expanded">
    <input
className="input"
value={searchTextInputState.value}
onChange={searchTextInputState.onChange}
/>
</div>
<div className="control is-expanded">
<label>
<SelectInput
value={vertical}
options={["All", "Frontend", "Backend"]}
onChange={setVertical}
/>
</label>
</div>
</div>

    <div className="field">
    <label className="label">Options</label>
    </div>
    <div className="field is-grouped">
    <div className="control">
    <label className="checkbox" htmlFor="featured">
    <input
    id="featured"
    type="checkbox"
    checked={showOnlyFeaturedCheckboxState.checked}
    onChange={showOnlyFeaturedCheckboxState.onChange}
    />
    Featured
    </label>
    </div>
    <div className="control">
    <label className="checkbox" htmlFor="remote">
    <input
    id="remote"
    type="checkbox"
    
    checked={showOnlyRemoteCheckboxState.checked}
    onChange={showOnlyRemoteCheckboxState.onChange}
    />
    Remote
    </label>
    </div>
    </div>
    </div>
    </section>
    );
    }
    
export default FilterJobs;    