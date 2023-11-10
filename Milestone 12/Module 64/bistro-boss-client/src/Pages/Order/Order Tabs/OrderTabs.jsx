import FoodCard from '../../../components/Food Card/FoodCard';

const OrderTabs = ({items}) => {
    return (
        <div className='grid grid-cols-1 md:grid-cols-3 gap-10'>
            {
                items.map(item => <FoodCard key={item._id} item={item}></FoodCard>)
            }
        </div>
    );
};

export default OrderTabs;