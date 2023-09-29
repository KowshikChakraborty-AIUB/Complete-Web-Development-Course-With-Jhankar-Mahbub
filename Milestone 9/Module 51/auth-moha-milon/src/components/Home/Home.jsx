import { useContext } from "react";
import { authContext } from "../../Providers/AuthProviders";

const Home = () => {

    const info = useContext(authContext);
    console.log(info);

    return (
        <div>
            <p>this is home</p>
        </div>
    );
};

export default Home;