
function Test(){
    return (
    <div className="bg-gray-50 min-h-screen py-12 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto space-y-12">
            {/* This is the header  */}
            <div className="text-center">
                <h1 className="text-4xl font-bold text-blue-950">Test Our Service</h1>
                <p className="mt-2 text-gray-600 max-w-2xl mx-auto">
                    Upload your point cloud, process it with our AI, and explore the results visually.
                </p>
            </div>

             {/* 2. File Upload Section */}
            <div className="bg-white p-8 rounded-xl shadow-md space-y-6 text-center">
                <h2 className="text-2xl font-semibold text-blue-950 mb-4">Upload Your Point Cloud</h2>
                <input
                    type="file"
                    accept=".ply,.las,.pcd,.laz"
                    className="border border-gray-300 rounded-md p-3 w-full"
                />
                <button className="bg-blue-900 text-white px-6 py-3 rounded-md hover:bg-blue-800 transition">
                    Submit for Processing
                </button>
            </div>

            {/* 3. Visualization using rerun api */}
            <div className="bg-white p-8 rounded-xl shadow-md space-y-4 text-center">
                <h2 className="text-2xl font-semibold text-blue-950">Visualization</h2>
                <div className="w-full h-[500px] bg-gray-200 rounded-lg flex items-center justify-center text-gray-500">
                    {/* Placeholder for .ply/.rrd viewer like Potree or Three.js */}
                    3D Viewer Placeholder
                </div>
            </div>



            {/* 4. Chatbot Section */}
            <div className="bg-white p-8 rounded-xl shadow-md space-y-4 text-center">
                <h2 className="text-2xl font-semibold text-blue-950">Ask About the Result</h2>
                <div className="h-[300px] bg-gray-100 rounded-md p-4 overflow-y-auto mb-4">
                    {/* Placeholder for chat messages */}
                    <p className="text-sm text-gray-600">Chat will appear here...</p>
                </div>
                <div className="flex items-center space-x-2">
                    <input
                    type="text"
                    placeholder="Ask something..."
                    className="flex-1 border border-gray-300 rounded-md px-4 py-2"
                    />
                    <button className="bg-blue-900 text-white px-4 py-2 rounded-md hover:bg-blue-800">
                    Send
                    </button>
                </div>
            </div>

        </div>
    </div>
    )
}
export default Test;