import Cousin from "../Cousin/Cousin";

const Uncle = ({asset}) => {
    return (
        <div>
            <h2>Uncle</h2>
            <section className="flex">
                <Cousin name={'Kamal'} asset={asset}></Cousin>
                <Cousin name={'Jamal'}></Cousin>
            </section>
        </div>
    );
};

export default Uncle;