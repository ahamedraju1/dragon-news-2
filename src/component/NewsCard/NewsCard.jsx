import { FaRegBookmark, FaShareAlt, FaEye, FaStar } from 'react-icons/fa';
import { format } from 'date-fns';

const NewsCard = ({ news }) => {
    const {
        title,
        image_url,
        details,
        author,
        rating,
        total_view,
    } = news;

    return (
        <div className="card bg-base-100 shadow-sm border-base-300 rounded-lg overflow-hidden">
            {/* Top bar: Author + Actions */}
            <div className="flex justify-between items-center px-4 pt-4 bg-base-200 ">
                {/* Author */}
                <div className="flex items-center gap-3">
                    <img
                         className="w-10 h-10 rounded-full object-cover"
                        src={author?.img}
                        alt={author?.name} 
                    />
                    <div className="text-sm">
                        <p className="font-semibold">{author?.name}</p>
                        <p className="text-gray-500 text-xs">
                            {format(new Date(author?.published_date), 'dd-MM-yyyy')}
                        </p>
                    </div>
                </div>

                {/* Actions */}
                <div className="flex gap-3 text-gray-500">
                    <FaShareAlt className="cursor-pointer" />
                    <FaRegBookmark className="cursor-pointer" />
                </div>
            </div>

            {/* Title */}
            <div className="px-4 pt-3">
                <h2 className="text-lg font-semibold leading-snug text-primary">{title}</h2>
            </div>

            {/* Image */}
            <div className="mt-3">
                <img
                    src={image_url}
                    alt={title}
                    className="w-full h-52 object-cover rounded"
                />
            </div>

            {/* Description */}
            <div className="px-4 pt-3 text-sm text-accent">
                <p>
                    {details.slice(0, 180)}...
                    <span className="text-orange-500 ml-1 font-medium cursor-pointer">
                        Read More
                    </span>
                </p>
            </div>

            {/* Footer: Rating & Views */}
            <div className="flex justify-between items-center px-4 py-3 border-t border-t-base-300 text-sm text-accent">
                {/* Rating */}
                <div className="flex items-center text-orange-400 gap-1">
                    {[...Array(rating?.number || 0)].map((_, i) => (
                        <FaStar key={i} className="text-orange-400" />
                    ))}
                    <span className="ml-1 text-black">{rating?.number}</span>
                </div>

                {/* Views */}
                <div className="flex items-center gap-1">
                    <FaEye />
                    <span>{total_view}</span>
                </div>
            </div>
        </div>
    );
};

export default NewsCard;
