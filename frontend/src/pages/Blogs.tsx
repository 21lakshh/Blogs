import { BlogCard } from "../components/BlogCard"
import { Appbar } from "../components/Appbar";
import { useBlogs } from "../hooks/useBlogs";
import Animations from "../components/Skeleton";

export const Blogs = () => {
    const { loading, blogs } = useBlogs();

    return (
        <div>
            <Appbar />

            {loading ? (
                <div className="flex justify-center items-center min-h-screen">
                    <Animations />
                </div>
            ) : (
                <div className="max-w-xl mx-auto p-4">
                    <div>
                 {blogs.map(blog => <BlogCard authorName={blog.author.name} title={blog.title} content={blog.content} publishedDate="Test" blogId={blog.id} />)}
                    </div>
                </div>
            )}
        </div>
    );
}