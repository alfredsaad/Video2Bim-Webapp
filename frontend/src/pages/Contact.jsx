import ContactSection from "./HomePageComponents/ContactSection";
function Contact(){
    return(
        <div >
            {/* Page Header */}
            <div className="bg-blue-950 py-16 text-white text-center">
                <h1 className="text-4xl md:text-5xl font-bold">Contact Us</h1>
                <p className="text-lg mt-4 max-w-2xl mx-auto">
                We're here to help! Reach out and let's start a conversation.
                </p>
            </div>

            {/* Contact Form and Info */}
            <ContactSection />
        </div>
    )
}
export default Contact;