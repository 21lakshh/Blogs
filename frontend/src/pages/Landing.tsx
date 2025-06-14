import { Link } from "react-router-dom"
import { Appbar } from "../components/Appbar"
export const Landing = () => {
    return (
        <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-blue-100 flex flex-col">
            <Appbar></Appbar>

            {/* Hero Section */}
            <main className="flex-1">
                <section className="py-20 px-6">
                    <div className="max-w-7xl mx-auto flex flex-col-reverse md:flex-row items-center justify-between gap-12">
                        {/* Text */}
                        <div className="md:w-1/2 space-y-8">
                            <div className="space-y-4"> 
                                <h1 className="text-5xl font-extrabold text-gray-900 leading-tight">
                                    Share Your Stories <br />
                                    <span className="bg-gradient-to-r from-blue-600 to-blue-800 bg-clip-text text-transparent">
                                        With The World
                                    </span>
                                </h1>
                            </div>
                            <p className="text-xl text-gray-600 leading-relaxed">
                                Browse. Add. Contribute
                            </p>
                            <Link to={"/signup"}>
                            <div className="flex flex-col sm:flex-row gap-4">
                                <button className="bg-blue-600 text-white px-8 py-4 rounded-full font-semibold hover:bg-blue-700 transition-all duration-300 shadow-lg hover:shadow-xl transform hover:-translate-y-0.5">
                                    Get Started
                                </button>
                            </div>
                            </Link>
                            <div className="flex items-center space-x-8 pt-4">

                                <p className="text-gray-600">
                                    <span className="font-semibold text-gray-900">10k+</span> writers already joined
                                </p>
                            </div>
                        </div>

                    </div>
                </section>
            </main>
        </div>
    )
}