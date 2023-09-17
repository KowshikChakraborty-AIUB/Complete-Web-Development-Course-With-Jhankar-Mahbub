import PropTypes from 'prop-types';
import Features from '../Features/Features';

const PriceOption = ({ option }) => {

    const { name, price, features } = option;

    return (
        <div className='flex flex-col bg-blue-600 text-white rounded-md p-6'>
            <h2 className='text-center'>
                <span className='text-6xl font-extrabold'>{price}</span>
                <span className='text-3xl'>/mon</span>
            </h2>
            <h4 className='text-3xl text-center my-8'>{name}</h4>
            <div className='flex-grow'>
                {
                    features.map((feature, index) => <Features key={index} feature={feature}></Features>)
                }
            </div>
            <button className='w-full mt-12 py-2 bg-green-600 font-bold rounded-lg'>Buy Now</button>
        </div>
    );
};

PriceOption.propTypes = {
    option: PropTypes.object.isRequired
}

export default PriceOption;