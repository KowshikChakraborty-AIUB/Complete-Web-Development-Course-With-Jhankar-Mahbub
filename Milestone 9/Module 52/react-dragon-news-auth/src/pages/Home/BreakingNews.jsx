import Marquee from "react-fast-marquee";
import { Link } from "react-router-dom";
const BreakingNews = () => {
    return (
        <div className="flex gap-2">
            <button className="btn btn-secondary">Breaking News</button>
            <Marquee pauseOnHover speed={150}>
                <Link className="mr-12" to={'/'}>I can be a React component, multiple React components, or just some text.</Link>
                <Link className="mr-12" to={'/'}>I can be a React component, multiple React components, or just some text.</Link>
                <Link className="mr-12" to={'/'}>I can be a React component, multiple React components, or just some text.</Link>
            </Marquee>
        </div>
    );
};

export default BreakingNews;