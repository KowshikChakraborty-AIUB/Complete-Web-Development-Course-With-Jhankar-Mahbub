import { useEffect } from "react";
import { useState } from "react";
import Blog from "../Blog/Blog";


const Blogs = ({handleToBookMark}) => {
    const [blogs, setBlogs] = useState([]);

    useEffect(()=>{

        fetch('blogs_fake_data.json')
        .then(res => res.json())
        .then(data => setBlogs(data))

    }, [])

    return (
        <div className="md:w-2/3">
            <h2 className="text-3xl font-bold">Blogs</h2>
            {
                blogs.map(blog => <Blog key={blog.id} blog={blog} handleToBookMark={handleToBookMark}></Blog>)
            }
        </div>
    );
};

export default Blogs;