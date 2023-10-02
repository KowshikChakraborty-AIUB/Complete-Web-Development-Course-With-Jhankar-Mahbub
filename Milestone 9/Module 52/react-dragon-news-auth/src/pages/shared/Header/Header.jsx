import logo from '../../../assets/logo.png'
import moment from 'moment';

const Header = () => {
    return (
        <div className='grid justify-center'>
            <img src={logo} alt="" />
            <p className='text-xl text-center mt-4'>Journalism Without Fear and Favour</p>
            <p className='text-center'>{moment().format("dddd, MMMM D, YYYY")}</p>
        </div>
    );
};

export default Header;