import { FaFacebook, FaGithub, FaGoogle, FaInstagram, FaTwitter } from 'react-icons/fa';
import qZone1 from '../../../assets/qZone1.png'
import qZone2 from '../../../assets/qZone2.png'
import qZone3 from '../../../assets/qZone3.png'
const RightSideNav = () => {
    return (
        <div>
            <div className='px-4'>
                <h2 className="text-3xl font-semibold">Login With</h2>
                <button className="btn btn-outline w-full normal-case my-2">
                    <FaGoogle></FaGoogle>
                    Login With Google
                </button>
                <button className="btn btn-outline w-full normal-case my-2">
                    <FaGithub></FaGithub>
                    Login With Github
                </button>
            </div>
            <div className='px-4'>
                <h2 className="text-3xl font-semibold">Find Us On</h2>
                <a className="p-4 text-lg border rounded-t-lg flex gap-2 items-center w-full normal-case">
                    <FaFacebook></FaFacebook>
                    Facebook
                </a>
                <a className="p-4 text-lg border-x flex gap-2 items-center w-full normal-case">
                    <FaTwitter></FaTwitter>
                    Twitter
                </a>
                <a className="p-4 text-lg border rounded-b-lg flex gap-2 items-center w-full normal-case">
                    <FaInstagram></FaInstagram>
                    Instagram
                </a>
            </div>
            <div className='px-4'>
                <h2 className="text-3xl font-semibold">Q-Zone</h2>
                <img src={qZone1} alt="" />
                <img src={qZone2} alt="" />
                <img src={qZone3} alt="" />
            </div>
        </div>
    );
};

export default RightSideNav;