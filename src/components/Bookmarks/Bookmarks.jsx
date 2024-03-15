import PropTypes from 'prop-types'
import Bookmark from '../Bookmark/Bookmark';
const Bookmarks = ({bookmarks,readingTime}) => {
    return (
        <div className="md:w-1/3 p-6">
            <div>
                <h3 className='text-4xl'>Reading Time: {readingTime} minutes</h3>
            </div>
            <div className='bg-gray-300 p-6 rounded-xl'>
            <h2 className="text-3xl">Bookmarked Blogs: {bookmarks.length} </h2>
            {
                bookmarks.map(bookmark => <Bookmark key={bookmark.id}  bookmark={bookmark}></Bookmark> )
            }
            </div>
        </div>
    );
};

Bookmarks.propTypes = {
    bookmarks: PropTypes.array,
    readingTime: PropTypes.any
}

export default Bookmarks;