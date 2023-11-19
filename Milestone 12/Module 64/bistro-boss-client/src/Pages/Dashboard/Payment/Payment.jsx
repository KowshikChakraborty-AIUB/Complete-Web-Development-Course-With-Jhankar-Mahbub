import { loadStripe } from "@stripe/stripe-js";
import SectionTitle from "../../../components/Section Title/SectionTitle";
import { Elements } from "@stripe/react-stripe-js";

const stripePromise = loadStripe();

const Payment = () => {
    return (
        <div>
            <SectionTitle heading={'payment'} subHeading={'Please pay to eat'}></SectionTitle>
            <div>
                <Elements stripe={stripePromise}>

                </Elements>
            </div>
        </div>
    );
};

export default Payment;