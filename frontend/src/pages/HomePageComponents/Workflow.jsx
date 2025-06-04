import React from "react";
import WorkflowComponents from "./WorkflowComponents";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMicrochip, faBraille,faBuilding,faR} from '@fortawesome/free-solid-svg-icons';

function Workflow() {
    return (
        <div className="bg-gray-100 py-5 px-6">
            <div className="max-w-6xl mx-auto">
                <h2 className="text-center pb-8 text-3xl font-bold text-blue-950">WORKFLOW</h2>
                <div className="grid grid-cols-1 md:grid-cols-4 lg:grid-cols-4 gap-6">
                    <WorkflowComponents
                        svg={<FontAwesomeIcon icon={faMicrochip} style={{color: "#ffffff",}}  size="2xl"/>}
                        description="Laser Scanning"
                    />
                    <WorkflowComponents
                        svg={<FontAwesomeIcon icon={faBraille} style={{color: "#ffffff",}} size="2xl"/>}
                        description="Data Processing"
                    />
                    <WorkflowComponents
                        svg={<FontAwesomeIcon icon={faBuilding} style={{color: "#ffffff",}} size="2xl"/>}
                        description="Segmentation and Classification"
                    />
                    <WorkflowComponents
                        svg={<FontAwesomeIcon icon={faR} style={{color: "#ffffff",}} size="2xl"/>}
                        description="Final BIM Model"
                    />
                </div>
            </div>
        </div>
    )
}
export default Workflow;