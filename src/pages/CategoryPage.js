import React, { useState } from 'react'
import LeftPart from '../components/Category/LeftPart'
import RightPart from '../components/Category/RightPart.js'
import './CategoryPage.css'
import { useNavigate } from 'react-router'
export default function CategoryPage() {

  const [catItem,setCatItem]=useState([])
  const Choosed_Category=(category)=>{

    console.log("OUR ARR: ",catItem)

    const valid_cat = catItem.includes(category);
    if(false==valid_cat){
    setCatItem((oldItems)=>{
      return [...oldItems,category]
    });}
    else{
      delteCategory(category)
    }
    console.log("===",catItem)
  }

const delteCategory=(cat)=>{
  console.log("Delete "+cat)
  setCatItem((oldItems)=>{
    return oldItems.filter((arrElement,index) =>{
       return cat!==arrElement;
     });
 });
}
const nextP=useNavigate()
const [arrFlag,setarrFlag]=useState(false)
const nexPage=()=>{
  if(catItem.length>=3){
   setarrFlag(false)

   let string = JSON.stringify(catItem)
   localStorage.setItem("catItems", string)
   nextP('/MainHomePage')
  }

  else{
setarrFlag(true)
  }

}


  return (
    <div className='category-body'>
      <LeftPart delSelected= {delteCategory} sizeValidation={arrFlag} selectedItem={catItem} />
      <RightPart  onSelect={Choosed_Category} sizeOfarr={nexPage} />
      
    </div>
  )
}
