import PropTypes from 'prop-types';
import {AiFillCheckCircle} from 'react-icons/ai'
const Features = ({feature}) => {
    return (
        <div className='flex gap-2 items-center'>
            <AiFillCheckCircle className='text-green-600'></AiFillCheckCircle>
            <p>{feature}</p>
        </div>
    );
};

Features.propTypes = {
    feature: PropTypes.string.isRequired
}

export default Features;