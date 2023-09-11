import PropTypes from 'prop-types';
import { BsBookmarks } from 'react-icons/bs';
const Blog = ({ blog, handleToBookMark }) => {
    const { title, cover, author, author_img, posted_date, reading_time, hashtags } = blog;
    return (
        <div className='mb-20'>
            <img className='mb-8 w-full' src={cover} alt={`Cover picture of the tite: ${title}`} />
            <div className='flex justify-between mb-8'>
                <div className='flex gap-6'>
                    <img className='w-14' src={author_img} alt="" />
                    <div>
                        <h3 className='text-2xl'>{author}</h3>
                        <p>{posted_date}</p>
                    </div>
                </div>
                <div>
                    <span>{reading_time} min read</span>
                    <button onClick={handleToBookMark} className='ml-2 text-lg text-green-500'><BsBookmarks></BsBookmarks></button>
                </div>
            </div>
            <h2 className='text-4xl mb-8'>{title}</h2>
            <p>
                {
                    hashtags.map((hash, idx) => <span key={idx}><a href=''>#{hash}</a></span>)
                }
            </p>
        </div>
    );
};

Blog.PropTypes = {
    blog:PropTypes.object.isRequired
}

export default Blog;