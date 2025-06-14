import { BlogCard } from "../components/BlogCard"
import { Appbar } from "../components/Appbar";
import { useBlogs } from "../hooks/useBlogs";
export const Blogs = () => {

    const { loading, blogs } = useBlogs()
    if (loading) {
        return <div>
            loading.....
        </div>
    }
    return (<div>
        <Appbar></Appbar>
        <div className="max-w-xl mx-auto p-4">
            <div>
                {blogs.map(blog => <BlogCard authorName={blog.author.name} title={blog.title} content={blog.content} publishedDate="Test" blogId={blog.id} />)}

            </div>
        </div>
    </div>
    );
}