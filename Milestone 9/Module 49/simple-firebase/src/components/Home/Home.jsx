import { Link } from "react-router-dom";

const Home = () => {
    return (
        <div>
            <Link to={'/'}>
                <p>This is home</p>
            </Link>
            <Link to={'/login'}>Login</Link>
        </div>
    );
};

export default Home;