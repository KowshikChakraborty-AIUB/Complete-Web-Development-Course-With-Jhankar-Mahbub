import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
const Job = ({ job }) => {
    const { id, logo, job_title, company_name, remote_or_onsite, location, job_type, salary } = job;
    return (
        <div className="card card-compact bg-base-100 shadow-xl">
            <figure><img src={logo} alt="" /></figure>
            <div className="card-body">
                <h2 className="card-title">{job_title}</h2>
                <p>{company_name}</p>
                <div>
                    <button className='px-5 py-2 mr-4 font-extrabold border rounded border-[#7E90FE] text-[#7E90FE]'>{remote_or_onsite}</button>
                    <button className='px-5 py-2 font-extrabold border rounded border-[#7E90FE] text-[#7E90FE]'>{job_type}</button>
                </div>
                <div className='flex gap-6'>
                    <h5 className='flex'><img className='mr-2' src="src/assets/icons/Location.png" alt="" /> {location}</h5>
                    <h5 className='flex'><img className='mr-2' src="src/assets/icons/money.png" alt="" /> {salary}</h5>
                </div>
                <div className="card-actions">
                    <Link to={`/job/${id}`}>
                        <button className="btn btn-primary">View Details</button>
                    </Link>
                </div>
            </div>
        </div>
    );
};

export default Job;

Job.propTypes = {
    job: PropTypes.object.isRequired
}