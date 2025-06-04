import React from "react";
import TeamCards from "./TeamCards";
import SlideRight from "../../components/ui/SlideRight";

const teamMembers = [
    {
      name: "Alfred Mikhael",
      imageSrc: "/images/alfred.jpg", // Replace with real paths
      
    },
    {
      name: "Salma Ismail",
      imageSrc: "/images/sarah.jpg",
    },
    {
      name: "Seif Hany",
      imageSrc: "/images/seif.jpg",
    },
    {
      name: "Haneen Hazem",
      imageSrc: "/images/haneen.jpg",
    },
  ];
function TeamSection() {
    return (
        <div className="py-20 bg-gray-50 px-6">
            <div className="max-w-6xl mx-auto">
                <h2 className="text-3xl md:text-4xl font-bold text-center text-blue-950 mb-6">
                Meet Our Team
                </h2>
                <p className="text-center text-gray-600 mb-12 max-w-2xl mx-auto">
                A dedicated team of engineers and developers bringing buildings to life through AI.
                </p>

                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8">
                {teamMembers.map((member, index) => index<2?(
                  <SlideRight delay={0.4} direction="left">
                  <TeamCards
                    key={index}
                    name={member.name}
                    imageSrc={member.imageSrc}
                  />
                  </SlideRight>
                ):(
                 <SlideRight delay={0.4} direction="right">
                  <TeamCards
                    key={index}
                    name={member.name}
                    imageSrc={member.imageSrc}
                  />
                  </SlideRight>
                )    
                )}
                </div>
            </div>
        </div>
    );

}

export default TeamSection;

