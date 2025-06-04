import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
function StepsCard({ title,description, img}) {
  return (
    <div className="flex flex-col md:flex-row items-center justify-center gap-8 bg-white p-10 rounded-2xl ">
      {/* Text Section */}
      <div className="max-w-xl mr-30">
        <h2 className="text-3xl font-bold text-gray-900 mb-4">{title}</h2>
        <p className="text-lg text-gray-600 mb-6">
          {description}
        </p>
       
      </div>

      {/* Image Section */}
      <div className="w-full md:w-1/4 hover:md:scale-102 transition-transform duration-300 ease-in-out">
        <img
          src={img} // Replace with your actual image path
          alt="3D Inspection Model"
          className="rounded-2xl shadow-xl"
        />
      </div>
    </div>
  );
}

export default StepsCard;
