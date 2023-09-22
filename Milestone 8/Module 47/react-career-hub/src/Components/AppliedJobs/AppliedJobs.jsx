import { useEffect, useState } from "react";
import { getStoredJobApplication } from "../../utility/localStorage.js";
import { useLoaderData } from "react-router-dom";
const AppliedJobs = () => {

    const [jobsApplied, setAppliedJobs] = useState([]);
    const [displayJobs, setDisplayJobs] = useState([]);

    const jobs = useLoaderData();

    const handleFilterJobs = filter => {
        if (filter === 'all') {
            setDisplayJobs(jobsApplied);
        } else if (filter === 'remote') {
            const remoteJobs = jobsApplied.filter(job => job.remote_or_onsite === 'Remote');
            setDisplayJobs(remoteJobs);
        } else if (filter === 'onsite') {
            const onsiteJobs = jobsApplied.filter(job => job.remote_or_onsite === 'Onsite');
            setDisplayJobs(onsiteJobs);
        }
    }

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
            setDisplayJobs(appliedJobs);
        }
    }, [jobs])

    return (
        <div>
            <h2>Jobs I Applied : {jobsApplied.length}</h2>
            <details className="dropdown mb-32">
                <summary className="m-1 btn">Filter</summary>
                <ul className="p-2 shadow menu dropdown-content z-[1] bg-base-100 rounded-box w-52">
                    <li onClick={() => handleFilterJobs('all')}><a>All</a></li>
                    <li onClick={() => handleFilterJobs('remote')}><a>Remote</a></li>
                    <li onClick={() => handleFilterJobs('onsite')}><a>Onsite</a></li>
                </ul>
            </details>
            {
                displayJobs.map((job, idx) => <li key={job.id}><span>{idx + 1} {job.job_title} <br />Company: {job.company_name}</span></li>)
            }
        </div>
    );
};

export default AppliedJobs;
