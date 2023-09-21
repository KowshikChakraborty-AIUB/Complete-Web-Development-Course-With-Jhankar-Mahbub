import { useEffect, useState } from "react";
import Job from "../Job/Job";

const FeaturedJobs = () => {

    const [jobs, setJobs] = useState([]);

    //this is not the best way to show all data.
    const[datalength, setDatalength] = useState(4);


    useEffect(() => {
        fetch('data/jobs.json')
            .then(res => res.json())
            .then(data => setJobs(data))
    }, [])


    return (
        <div>
            <div>
                <h2 className="text-5xl text-center">Featured Jobs {jobs.length}</h2>
                <p>Explore thousands of job opportunities with all the information you neeed. It&apos;s your future.</p>
            </div>
            <div className="grid grid-cols-2 gap-6">
                {
                    jobs.slice(0, datalength).map(job => <Job key={job.id} job={job}></Job>)
                }
            </div>
            <div className={`text-center my-6 ${datalength === jobs.length && 'hidden'}`}>
                <button onClick={() => setDatalength(jobs.length)} className="btn btn-primary">Show All Jobs</button>
            </div>
        </div>
    );
};

export default FeaturedJobs;