import React from "react";
import '../../../assets/styles/component-styles/SleepPreview.css';

function SleepPreview(){
    return(
        <a className="sleep-preview-con">
            <div>
                <h2>Sleep</h2>
                <div className="sleep-time">
                    <p className="sleep-hours">2</p>
                    <p className="sleep-minutes">20</p>
                </div>
                <a href="#"><button>Enter</button></a>
            </div>
            <div className="sleep-meter-col">
                <p>2</p>
                <div className="sleep-meter-con">
                    <div>

                    </div>
                </div>
            </div>
        </a>
    )
}

export default SleepPreview;