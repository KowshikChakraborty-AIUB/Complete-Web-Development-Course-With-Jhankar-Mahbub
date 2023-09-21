import { useLoaderData, useParams } from "react-router-dom";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { savedJobApplication } from "../../utility/localStorage";
const JobDetails = () => {
    const jobs = useLoaderData();
    const { id } = useParams();
    const details = jobs.find(job => job.id === parseInt(id))

    //console.log();

    const handleApplyNow = ()=>{
        savedJobApplication(id);
        toast('You have applied successfully!');
    }

    return (
        <div>
            <h2 className="text-3xl">Job Details of: {details.job_title}</h2>
            <div className="grid gap-4 md:grid-cols-4 my-2">
                <div className="md:col-span-3 my-4">
                    <h2 className="text-2xl my-4">Company: {details.company_name}</h2>
                    <div>
                        <p className="my-4"> <span className="font-bold">Job Description:</span> {details.job_description}</p>
                        <p className="my-4"><span className="font-bold">Job Responsibility:</span> {details.job_responsibility}</p>
                        <p className="my-4"><span className="font-bold">Educational Requirements:</span> <br />{details.educational_requirements}</p>
                        <p className="my-4"><span className="font-bold">Experiences:</span> {details.experiences}</p>
                    </div>
                </div>
                <div>
                    <h2 className="text-3xl">Side Things</h2>
                    <button onClick={handleApplyNow} className="btn btn-primary w-full">Apply Now</button>
                </div>
            </div>
            <ToastContainer></ToastContainer>
        </div>
    );
};

export default JobDetails;