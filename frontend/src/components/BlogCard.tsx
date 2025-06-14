    import { Link } from "react-router-dom"
    import { Avatar } from "./Avatar"
    interface BlogCardProps {
        authorName: string,
        title: string,
        content: string,
        publishedDate: string
        blogId: string
    }
    export const BlogCard = ({ authorName, title, content, publishedDate, blogId }: BlogCardProps) => {
        
        return <Link to={`/blog/${blogId}`}>
            <div className="bg-white shadow-md rounded-xl p-4 mb-6 border border-gray-200 transition hover:shadow-lg hover: cursor-pointer">
                {/* Author and Date */}
                <div className="flex justify-between items-center mb-4 text-md text-gray-500">
                    <div className="flex flex-row space-x-2">
                        <Avatar name={authorName}></Avatar>
                        <div className="font-medium">{authorName}</div>
                    </div>
                    <div>{publishedDate}</div>
                </div>

                {/* Title */}
                <div className="text-xl font-semibold text-gray-900 mb-2">
                    {title}
                </div>

                {/* Content Preview */}
                <div className="text-gray-700 mb-4">
                    {content.slice(0, 100) + "…"}
                </div>

                {/* Footer */}
                <div className="flex justify-between items-center text-sm text-gray-500">
                    <div>{`${Math.ceil(content.length / 100)} min read`}</div>
                    <div className="bg-blue-100 text-blue-600 px-3 py-1 rounded-full text-xs">For you</div>
                </div>
            </div>
        </Link>
    }
