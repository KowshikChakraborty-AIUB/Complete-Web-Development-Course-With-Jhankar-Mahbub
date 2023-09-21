import { useEffect, useState } from "react";
import { getStoredJobApplication } from "../../utility/localStorage.js";
import { useLoaderData } from "react-router-dom";
const AppliedJobs = () => {

    const [jobsApplied, setAppliedJobs] = useState([]);

    const jobs = useLoaderData();

    useEffect(() => {
        const storedJobIds = getStoredJobApplication();
        if (jobs.length > 0) {
            // const appliedJobs = jobs.filter(job => storedJobIds.includes(job.id))

            // alternative way to display data from local storage
            const appliedJobs = [];
            for (const id of storedJobIds) {
                const job = jobs.find(job => job.id === id)
                if (job) {
                    appliedJobs.push(job);
                }
            }
            setAppliedJobs(appliedJobs);
        }
    }, [])

    return (
        <div>
            <h2>Jobs I Applied : {jobsApplied.length}</h2>
            {
                jobsApplied.map((job, idx) => <li key={job.id}><span>{idx+1} {job.job_title} <br />Company: {job.company_name}</span></li>)
            }
        </div>
    );
};

export default AppliedJobs;
