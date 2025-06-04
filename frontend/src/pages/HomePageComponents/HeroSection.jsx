import React from "react";
import { Link } from "react-router-dom";
function HeroSection(){
    return (
    <section className="bg-blue-950 text-white py-24">
      <div className="max-w-5xl mx-auto px-6 text-center">
        <h1 className="text-4xl md:text-5xl font-bold mb-6">
          SCAN TO BIM AUTOMATION
        </h1>
        <p className="text-lg md:text-xl text-gray-200 mb-10">
          Converting Reality to Digital Models with AI
        </p>
        <Link
          to="/test"
          className="inline-block bg-blue-200 hover:bg-blue-300 text-blue-900 font-semibold px-6 py-3 rounded-lg transition duration-300"
        >
          SEE HOW IT WORKS
        </Link>
      </div>
    </section>
    );
}
export default HeroSection;