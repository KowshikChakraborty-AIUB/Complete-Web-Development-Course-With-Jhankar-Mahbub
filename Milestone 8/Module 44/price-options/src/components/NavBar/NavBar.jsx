import { useState } from "react";
import Link from "../Link/Link";
import { BiMenu } from 'react-icons/bi';
import { AiOutlineClose } from 'react-icons/ai'

const NavBar = () => {
    const [open, setOpen] = useState(false);

    const routes = [
        { id: 1, path: '/', name: 'Home' },
        { id: 2, path: '/about', name: 'About' },
        { id: 3, path: '/services', name: 'Services' },
        { id: 4, path: '/contact', name: 'Contact' },
        { id: 5, path: '*', name: 'NotFound' }
    ];

    return (
        <nav>
            <div onClick={() => setOpen(!open)} className="md:hidden text-2xl">
                {
                    open === true ? <AiOutlineClose></AiOutlineClose>

                        : <BiMenu></BiMenu>
                }
            </div>
            <ul className={`md:flex bg-black md:bg-white text-white md:text-black gap-6 absolute md:static duration-1000 ${

                open ? 'top-16' : '-top-60'

            }`}>
                {
                    routes.map(route => <Link key={route.id} route={route}></Link>)
                }
            </ul>
        </nav>
    );
};

export default NavBar;