import React from "react";
import "./LeftPart.css";
import { useNavigate } from "react-router";
export default function LeftPart(props) {

  return (
    <div>
      <div className="Left-right-box" style={{ backgroundColor: "#000000" }}>
        <div className="Left-outer-box">
          <div className="Left-inner-box">
            <div className="category-supper-app-title">Super app</div>
            <div className="LeftPart-Content">
              Choose your entertainment category
            </div>
          </div>
        </div>
        <div className="selectedItem">
          {props.selectedItem.map(function (val, index) {
            return (
              <>
                <div className="selectedItem-List"><div className="c_val">{val}</div><i onClick={()=>{props.delSelected(val) }} class="cross-fa fa fa-times" aria-hidden="true"></i></div>
              </>
            );
          })}

        </div>
            {props.sizeValidation?<div className="validation3Size"><i class="fa fa-exclamation-triangle" aria-hidden="true"></i> Minimum 3 category required</div>:null}

      </div>
    </div>
  );
}
