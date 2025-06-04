import StepsCard from "./AboutPageComponents/StepsCard";
import StepsCardRev from "./AboutPageComponents/StepsCard2";
import ImageComparison from "./AboutPageComponents/ImageComparison";
import SlideInOnScroll from "../components/ui/SlideOnScroll"
// import {
//   faCamera,
// } from "@fortawesome/free-solid-svg-icons";
function About(){
    return (
        <div className="space-y-10">
            {/* 1. Introduction  */}
            <SlideInOnScroll delay={0.2}>
            <div className="bg-blue-950 py-20 px-6 md:px-20">
                <div className="max-w-5xl mx-auto grid md:grid-cols-2 gap-12 items-center">
                    <div>
                        <h2 className="text-3xl font-bold text-white mb-4">
                        What is Scan to BIM?
                        </h2>
                        <p className="text-gray-400 text-lg">
                        Scan to BIM is a cutting-edge process that converts reality-captured data
                        into precise digital Building Information Models using AI and automation.
                        It bridges the gap between field conditions and digital design.
                        </p>
                    </div>
                    <div>
                        <img
                        src=" /scantobim.png"
                        alt="Scan to BIM Illustration"
                        className="w-full rounded-lg shadow-md"
                        />
                    </div>
                </div>
            </div>
            </SlideInOnScroll>
            {/* 2. Vision  */}
            <SlideInOnScroll delay={0.3}>
            <div className="bg-blue-50 py-20 px-6 md:px-20 text-center">
                <div className="max-w-3xl mx-auto">
                    <h2 className="text-3xl font-bold text-blue-900 mb-6">Our Vision</h2>
                    <p className="text-gray-700 text-lg italic">
                        "To revolutionize the AEC industry by making 3D modeling more accessible, automated, and accurate through intelligent Scan to BIM solutions."
                    </p>
                </div>
            </div>
            </SlideInOnScroll>

            {/* 3. how it works  */}
            <SlideInOnScroll delay={0.3}>
            <div>
                <StepsCard title="Scan the Building"description="Capture your environment using any LiDAR sensors." img="/lidar-2.png"/>
                <StepsCardRev title="Clean the Scan"description="Process raw point clouds using PDAL and filters." img="/lidar-2.png"/>
                <div className="max-w-4xl mx-auto my-10 rounded-lg p-6">
                    <h2 className="text-3xl font-bold text-gray-900 mb-4">Segment</h2>
                    <p className="text-lg text-gray-600 mb-6">
                        Use AI to identify building elements. Our advanced algorithms analyze point cloud data to automatically segment walls, floors, ceilings, and other structural components, ensuring high accuracy and efficiency.
                    </p>
                </div>
                {/* <StepsCard title="Segment" description="Use AI to identify building elements." img="/lidar-2.png"/> */}
                <ImageComparison before="./beforeClassification.JPG" after="./beforeClassification.JPG"/> 
                <StepsCard title="Model" description="Convert segmented data to BIM using Revit & Dynamo." img="/lidar-2.png"/>
            </div>
            </SlideInOnScroll>
            

            {/* 4. Why Choose Us?  */}
            <SlideInOnScroll delay={0.3}>
            <div className="bg-blue-50 py-20 px-6 md:px-20">
                <div className="max-w-5xl mx-auto text-center">
                    <h2 className="text-3xl font-bold text-blue-950 mb-10">Why Choose Us?</h2>
                    <div className="grid grid-cols-1 md:grid-cols-4 gap-8 ">
                        {[
                        {
                            title: "Accuracy",
                            text: "High-fidelity models with minimal errors."
                        },
                        {
                            title: "Automation",
                            text: "AI-driven segmentation saves hours of manual work."
                        },
                        {
                            title: "Speed",
                            text: "Fast turnaround times for large projects."
                        },
                        {
                            title:"Pricing",
                            text: "Competitive pricing with flexible packages."
                        }
                        ].map(({ title, text }, index) => (
                        <div
                            key={index}
                            className="border-blue-100 p-6 rounded-lg shadow-md hover:scale-105 hover:bg-blue-100 transition-transform duration-300 ease-in-out "
                        >
                            <h4 className="text-xl font-semibold text-blue-950 mb-2">{title}</h4>
                            <p className="text-gray-600">{text}</p>
                        </div>
                        ))}
                    </div>
                </div>
            </div>
            </SlideInOnScroll>

        </div>
    )
}
export default About;