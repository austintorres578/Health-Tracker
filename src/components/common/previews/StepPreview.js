import React from "react";
import '../../../assets/styles/component-styles/StepPreview.css'

function StepPreview(){
    return(
        <a href="#" className="step-preview-con">
            <div className="step-preview-count">
                <h1>Steps</h1>
                <h2>1000</h2>
                <p>/6000</p>
                <a href="#"><button>Enter</button></a>
            </div>
            <div className="step-preview-meter-con">
                <p className="step-preview-percent">0%</p>
                <div className="step-preview-meter">
                    <div>

                    </div>
                </div>
            </div>
        </a>
    )
}

export default StepPreview;