import React from "react";
import './LeftPart.css'
import './RightPart.css'
import img1 from '../../image/image 2.png'
import img2 from '../../image/image 3.png'
import img3 from '../../image/image 4.png'
import img4 from '../../image/image 6.png'
import img5 from '../../image/image 7.png'
import img6 from '../../image/image 8.png'
import img7 from '../../image/image 9.png'
import img8 from '../../image/image 10.png'
import img9 from '../../image/image 11.png'

export default function RightPart(props) {

  return (
    <div>
      <div className="right-part-box" style={{backgroundColor:'#000000'}}>
        <div className="category-main-box" >
          <div className="category-box orange" onClick={()=>{
            props.onSelect("Action")
          }}> 
          <div className="cate-title" >Action</div>
          <div className="image-box"> <img src={img1}/> </div>
          </div>

          <div className="category-box light-pink" onClick={()=>{
            props.onSelect("Drama")
          }}> 
            <div className="cate-title" >Drama</div>
            <div className="image-box"> <img src={img2}/> </div>
          </div>

          <div className="category-box green" onClick={()=>{
            props.onSelect("Romance")
          }}> 
          <div className="cate-title" >Romance</div>
          <div className="image-box"> <img src={img3}/> </div>
          </div>

          <div className="category-box sky-blue" onClick={()=>{
            props.onSelect("Thriller")
          }}> 
          <div className="cate-title" >Thriller</div>
          <div className="image-box"> <img src={img4}/> </div>
          </div>

          <div className="category-box brown" onClick={()=>{
            props.onSelect("Western")
          }} > 
          <div className="cate-title" >Western</div>
          <div className="image-box"> <img src={img5}/> </div>
          </div>

          <div className="category-box violet" onClick={()=>{
            props.onSelect("Horror")
          }}> 
          <div className="cate-title" >Horror</div>
          <div className="image-box"> <img src={img6}/> </div>
          </div>

          <div className="category-box pink" onClick={()=>{
            props.onSelect("Fantasy")
          }}> 
          <div className="cate-title" >Fantasy</div>
          <div className="image-box"> <img src={img7}/> </div>
          </div>
          <div className="category-box red" onClick={()=>{
            props.onSelect("Music")
          }}> 
          <div className="cate-title" >Music</div>
          <div className="image-box"> <img src={img8}/> </div>
          </div>
          <div className="category-box light-green" onClick={()=>{
            props.onSelect("Fiction")
          }}> 
          <div className="cate-title" >Fiction</div>
          <div className="image-box"> <img src={img9}/> </div>
          </div>

        </div>
        <div className="next-btn">
          <input  type="button" value="Next Page" onClick={props.sizeOfarr}/>
        </div>
      </div>
    </div>
  );
}
