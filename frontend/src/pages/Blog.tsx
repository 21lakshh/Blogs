import { Appbar } from "../components/Appbar"
import { useBlog } from "../hooks/useBlog"

interface Blog {
    title: string,
    content: string,
    author: {
        name: string
    },
    id: string
}   
export const Blog = () => {
    const {loading, blog} = useBlog();

    if (loading) {
        return <div>
            loading....
        </div>
    }

    return (
        <div>
            <Appbar></Appbar>
            <div className="max-w-3xl mx-auto p-8 bg-white shadow-lg rounded-lg mt-10 border border-gray-200">
                <div className="flex items-center mb-6">
                    <div className="w-10 h-10 rounded-full bg-gray-200 flex items-center justify-center text-xl font-semibold text-blue-600">
                        {blog.author.name[0]}
                    </div>
                    <div className="ml-4">
                        <div className="text-md font-medium text-gray-700">{blog.author.name}</div>
                        <div className="text-sm text-gray-400">Published: {"Today"}</div>
                    </div>
                </div>
                <h1 className="text-4xl font-extrabold mb-6 text-gray-900 leading-snug">{blog.title}</h1>
                <div className="prose prose-lg text-gray-800 leading-relaxed">
                    {blog.content}
                </div>
            </div>
        </div>
    )
}