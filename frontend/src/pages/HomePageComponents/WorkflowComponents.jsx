import React from "react";
function WorkflowComponents({svg,description}) {
  return (
    <div className="text-center">
        <div className="w-20 h-20 bg-blue-950 rounded-full flex items-center justify-center mx-auto mb-4">   
            {svg}
        </div>
        <h2 className="text-lg mt-4">{description}</h2>
    </div>
  );
}
export default WorkflowComponents;