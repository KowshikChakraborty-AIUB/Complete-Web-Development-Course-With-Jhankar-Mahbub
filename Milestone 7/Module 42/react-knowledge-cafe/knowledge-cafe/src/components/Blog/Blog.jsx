import PropTypes from 'prop-types';
import { BsBookmarks } from 'react-icons/bs';
const Blog = ({ blog, handleToBookMark, handleMarkedAsRead }) => {
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
                    <button onClick={()=>handleToBookMark(blog)} className='ml-2 text-lg text-green-500'><BsBookmarks></BsBookmarks></button>
                </div>
            </div>
            <h2 className='text-4xl mb-8'>{title}</h2>
            <p>
                {
                    hashtags.map((hash, idx) => <span key={idx}><a href=''>#{hash}</a></span>)
                }
            </p>
            <button className='text-blue-700 underline mt-8' onClick={()=>handleMarkedAsRead(reading_time)}>Marked as read</button>
        </div>
    );
};

Blog.propTypes = {
    blog: PropTypes.object.isRequired,
    handleToBookMark: PropTypes.func.isRequired,
    handleMarkedAsRead: PropTypes.func.isRequired
}

export default Blog;