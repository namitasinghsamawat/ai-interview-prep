import { Link } from "react-router-dom";

function Home() {
    return (
        <div className="min-h-screen bg-gray-50">

            {/* HERO SECTION */}

            <div className="relative flex flex-col items-center justify-center text-center px-6 pt-40 pb-24 overflow-hidden">

                {/* Background Glow */}

                <div className="absolute w-96 h-96 bg-blue-300 rounded-full blur-3xl opacity-20 top-10"></div>

                <div className="relative z-10">

                    <h1 className="text-5xl md:text-7xl font-extrabold leading-tight max-w-5xl">

                        Crack Technical Interviews with{" "}

                        <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
                            AI-Powered
                        </span>

                        {" "}Preparation

                    </h1>

                    <p className="text-gray-600 text-lg md:text-xl mt-8 max-w-2xl mx-auto leading-relaxed">

                        Practice DSA, take AI mock interviews,
                        track your progress, and prepare smarter
                        for top tech companies.

                    </p>

                    <div className="mt-10 flex flex-col sm:flex-row gap-4 justify-center">

                        <Link
                            to="/signup"
                            className="bg-blue-600 text-white px-8 py-4 rounded-xl hover:bg-blue-700 transition shadow-lg"
                        >
                            Get Started
                        </Link>

                        <Link
                            to="/login"
                            className="border border-gray-300 px-8 py-4 rounded-xl hover:bg-gray-100 transition"
                        >
                            Login
                        </Link>

                    </div>

                </div>

            </div>
            {/* FEATURES SECTION */}

            <div className="py-24 px-6 bg-gray-50">

                <h2 className="text-4xl font-bold text-center mb-14">
                    Powerful Features
                </h2>

                <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">

                    {/* CARD 1 */}

                    <div className="bg-white p-8 rounded-3xl shadow-sm hover:shadow-2xl hover:-translate-y-2 transition duration-300">

                        <div className="text-5xl mb-6">
                            🎤
                        </div>

                        <h3 className="text-2xl font-semibold mb-4">
                            AI Mock Interviews
                        </h3>

                        <p className="text-gray-600 leading-relaxed">
                            Practice interview questions with AI-powered
                            feedback and improve communication confidence.
                        </p>

                    </div>

                    {/* CARD 2 */}

                    <div className="bg-white p-8 rounded-3xl shadow-sm hover:shadow-2xl hover:-translate-y-2 transition duration-300">

                        <div className="text-5xl mb-6">
                            💻
                        </div>

                        <h3 className="text-2xl font-semibold mb-4">
                            DSA Tracker
                        </h3>

                        <p className="text-gray-600 leading-relaxed">
                            Track coding consistency, solved questions,
                            and interview preparation progress.
                        </p>

                    </div>

                    {/* CARD 3 */}

                    <div className="bg-white p-8 rounded-3xl shadow-sm hover:shadow-2xl hover:-translate-y-2 transition duration-300">

                        <div className="text-5xl mb-6">
                            📊
                        </div>

                        <h3 className="text-2xl font-semibold mb-4">
                            Performance Analytics
                        </h3>

                        <p className="text-gray-600 leading-relaxed">
                            Analyze strengths and weaknesses
                            with smart AI-generated insights.
                        </p>

                    </div>

                </div>

            </div>
            {/* HOW IT WORKS SECTION */}

            <div className="bg-white py-24 px-6">

                <h2 className="text-4xl font-bold text-center mb-16">
                    How It Works
                </h2>

                <div className="grid md:grid-cols-4 gap-8 max-w-6xl mx-auto text-center">

                    <div>
                        <div className="text-5xl font-bold text-blue-500 mb-4">
                            1
                        </div>

                        <h3 className="text-xl font-semibold mb-2">
                            Create Account
                        </h3>

                        <p className="text-gray-600">
                            Sign up and start your interview preparation journey.
                        </p>
                    </div>

                    <div>
                        <div className="text-5xl font-bold text-blue-500 mb-4">
                            2
                        </div>

                        <h3 className="text-xl font-semibold mb-2">
                            Practice DSA
                        </h3>

                        <p className="text-gray-600">
                            Solve coding problems and improve problem-solving skills.
                        </p>
                    </div>

                    <div>
                        <div className="text-5xl font-bold text-blue-500 mb-4">
                            3
                        </div>

                        <h3 className="text-xl font-semibold mb-2">
                            Take Mock Interviews
                        </h3>

                        <p className="text-gray-600">
                            Experience AI-powered interview simulations.
                        </p>
                    </div>

                    <div>
                        <div className="text-5xl font-bold text-blue-500 mb-4">
                            4
                        </div>

                        <h3 className="text-xl font-semibold mb-2">
                            Track Progress
                        </h3>

                        <p className="text-gray-600">
                            Monitor strengths, weaknesses, and improvement areas.
                        </p>
                    </div>

                </div>

            </div>
            
            {/* FOOTER */}

            <footer className="bg-blue-800 text-white py-6">

                <div className="max-w-5xl mx-auto px-6 flex flex-col md:flex-row justify-between items-center">

                    <h2 className="text-xl font-bold mb-2 md:mb-0">
                        AI Interview Prep
                    </h2>

                    <div className="flex gap-4 text-white text-sm">

                        <p>Home</p>
                        <p>Features</p>
                        <p>Login</p>
                        <p>Signup</p>

                    </div>

                </div>

                <p className="text-center text-white text-sm mt-4">
                    © 2026 AI Interview Prep. All rights reserved.
                </p>

            </footer>

        </div>
    );
}

export default Home;