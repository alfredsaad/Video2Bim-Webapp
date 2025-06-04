import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEnvelope,faPhone } from "@fortawesome/free-solid-svg-icons";

function ContactSection() {
    return (
        <div className="bg-gray-100 py-20 px-6" id="contact">
            <div className="max-w-6xl mx-auto">
                <div className="grid md:grid-cols-2 gap-12">
                {/* Left side */}
                    <div className="space-y-6 text-gray-700 flex flex-col justify-center">
                        <div>
                            <h2 className="text-3xl md:text-4xl font-bold text-center text-blue-950 mb-6">
                            Get in Touch
                            </h2>
                            <p className="text-center text-gray-600 mb-12 max-w-2xl mx-auto">
                            We’d love to hear from you! Whether you have a question or want to discuss a project, feel free to reach out.
                            </p>
                        </div>

                        {/* Email */}
                        <div className="flex items-center space-x-4 justify-center">
                            <FontAwesomeIcon icon={faEnvelope} size="xl" className="text-blue-900" />
                            <div className="flex items-center space-x-2">
                            <h4 className="text-xl font-semibold text-blue-950">Email</h4>
                            <p className="text-gray-700">aast@gmail.com</p>
                            </div>
                        </div>

                        {/* Phone */}
                        <div className="flex items-center space-x-4 justify-center">
                            <FontAwesomeIcon icon={faPhone} size="xl" className="text-blue-900" />
                            <div className="flex items-center space-x-2"> 
                            <h4 className="text-xl font-semibold text-blue-950">Phone</h4>
                            <p className="text-gray-700">+201550743457</p>
                            </div>
                        </div>
                    </div>

                {/* Right: Form */}
                <form className="space-y-6 bg-white p-8 rounded-xl shadow-md">
                    <div>
                    <label className="block text-gray-700 font-medium mb-2">
                        Name
                    </label>
                    <input
                        type="text"
                        name="user_name"
                        className="w-full border border-gray-300 px-4 py-3 rounded-lg"
                        required
                    />
                    </div>
                    <div>
                    <label className="block text-gray-700 font-medium mb-2">
                        Email
                    </label>
                    <input
                        type="email"
                        name="user_email"
                        className="w-full border border-gray-300 px-4 py-3 rounded-lg"
                        required
                    />
                    </div>
                    <div>
                    <label className="block text-gray-700 font-medium mb-2">
                        Message
                    </label>
                    <textarea
                        name="message"
                        rows="5"
                        className="w-full border border-gray-300 px-4 py-3 rounded-lg"
                        required
                    ></textarea>
                    </div>
                    <button
                    type="submit"
                    className="w-full bg-blue-900 text-white font-semibold py-3 px-6 rounded-lg hover:bg-blue-800 transition duration-300">
                    Send Message
                    </button>
                </form>
                </div>
            </div>
        </div>
    )
}
export default ContactSection;