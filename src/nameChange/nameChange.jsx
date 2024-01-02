import "./nameChange.css";
import { Link } from "react-router-dom";
import React, { useState } from "react";

function NameChange() {  
    // 使用 useState Hook 来定义一个状态变量 "name"，并为其提供一个初始值 "defaultValue"  
    const [name, setName] = useState('南昌校区');  
    
    const handleNameChange = (value) => {  
        if (value === '南昌校区') {
            setName('抚州校区')
        } else {
            setName('南昌校区')
        }
    };  
    
    return (  
      <div> 
        <Link to="/list">第二题</Link>
        <p className="lableP">我是东华理工大学学生，居住在<span onClick={() => handleNameChange(name)}>{name}</span></p>  
      </div>  
    );  
  }  
    
  export default NameChange;