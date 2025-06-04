function TeamCards({name,image}){
    return(
    <div className="bg-white rounded-xl shadow-md p-6 text-center hover:shadow-lg transition duration-300">
      <img
        src={image}
        alt={name}
        className="w-32 h-40 object-cover rounded-lg mx-auto mb-4"
      />
      <h3 className="text-xl font-semibold text-blue-950">{name}</h3>
    </div>
    );
}
export default TeamCards;