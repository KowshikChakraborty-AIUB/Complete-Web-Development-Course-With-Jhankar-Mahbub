import PropTypes from 'prop-types';
import Bookmark from '../Bookmark/Bookmark';
const Bookmarks = ({bookmarks, readingTime}) => {
    console.log(bookmarks);

    return (
        <div className="md:w-1/3 bg-gray-300 pt-4">
            <div>
                <h4 className='text-2xl text-center mb-4'>Spent time on read: {readingTime} min</h4>
            </div>
            <h2 className="text-3xl font-bold ml-4 text-center">Bookmarked Blogs: {bookmarks.length}</h2>
            {
                bookmarks.map(bookmark => <Bookmark key={bookmark.id} bookmark={bookmark}></Bookmark>)
            }
        </div>
    );
};

Bookmarks.propTypes = {
    bookmarks: PropTypes.object.isRequired,
    readingTime: PropTypes.number.isRequired
}

export default Bookmarks;