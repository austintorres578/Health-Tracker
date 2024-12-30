import React from "react";
import '../../../assets/styles/component-styles/CaloriePreview.css';
import foodIcon from '../../../assets/images/icons/food-icon.png';

function CaloriePreview(){
    return(
        <a className="calorie-preview-con" href="#">
            <div className="calories">
                <h2>Calories</h2>
                <div className="cal-count-con">
                    <img src={foodIcon}></img>
                    <p className="cal-count">550</p>
                    <p className="total-cal">2000</p>
                </div>
                <a href="#"><button>Enter</button></a>
            </div>
            <div className="calorie-preview">
                <div>

                </div>
            </div>
        </a>
    )
}

export default CaloriePreview;