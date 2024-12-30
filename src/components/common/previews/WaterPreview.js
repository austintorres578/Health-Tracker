import React from "react";
import '../../../assets/styles/component-styles/WaterPreview.css';

function WaterPreview(){
    return(
        <div className="water-preview-con">
            <div>
               <h2>Water</h2> 
               <div className="water-count-con">
                <p className="water-count">0</p>
                <p className="water-total">8</p>
               </div>
               <a href="#"><button>Enter</button></a>
            </div>
            <div>
                <div className="water-meter-con">
                    <div className="water-meter">

                    </div>
                </div>
            </div>
        </div>
    )
}

export default WaterPreview;