import { useEffect } from "react";
import { useLoaderData } from "react-router-dom";
import { getStoredJobApplication } from "../../utility/localStorage.js";
const AppliedJobs = () => {

    const jobs = useLoaderData();

    useEffect(()=>{
        const storedJobIds = getStoredJobApplication();
        if (jobs.length > 0) {
            const appliedJobs = 
        }
    }, [])

    return (
        <div>
            <h2>Jobs I Applied</h2>
        </div>
    );
};

export default AppliedJobs;
