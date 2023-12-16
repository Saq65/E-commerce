import {React, useEffect, useState} from "react";
import "./e-commerce.css";
import M1 from "./images/menImage/men1.png";
import M2 from "./images/menImage/men2.jpg";
import M3 from "./images/menImage/men3.webp";
import M4 from "./images/menImage/men4.jpg";
import M5 from "./images/menImage/men5.jpg";
import M6 from "./images/menImage/m6.jpg";
import M7 from "./images/menImage/m7.jpg";
import M8 from "./images/menImage/m8.jpg";
import M9 from "./images/menImage/m9.jpg";
import M10 from "./images/menImage/m10.jpg";
import axios from "axios";
import { Star } from "@mui/icons-material";


export function Mens(props) {
    const [data,setdata] = useState({Men1:{},Men2:{},Men3:{},Men4:{},Men5:{},Men6:{},Men7:{},Men8:{},Men9:{},Men10:{}});
    useEffect(()=>{
        axios.get('ecommerce.json').then((response)=>{
            setdata(response.data)
        })
    })
  
    return (
        <div className="container-fluid">
            <br />
            <div className="container-fluid">
                <div id="ban" className="container rounded">
                    <h1 id="mensOffer" >30% Off mens clothing...</h1>
                </div>
            </div>
            <div className="headingMens mt-2">
                <h3 className="text-center">MENS'S FASHION</h3>
                <div style={{position:'relative',marginBottom:'120px'}} className="d-flex justify-content-center">
                    <hr style={{ width: '100px',color:'black',borderRadius:'5px'}} />
                </div>
            </div>
            <div id="card" className="m-3">
                <div className="card m1 m-2" >
                    <img className="w-100 h-100 card-image-top" src={M1} alt="mens" />
                    <div style={{border:'1px solid black'}} className="card-body ">
                       <p className="card-text">{data.Men1.Name}</p>
                       <tt>Rs.{data.Men1.Price}/</tt>
                       <p>{data.Men1.Rating}<i><Star/></i></p>
                    </div>
                    <button value="m1" onClick={props.onClick}>Add to Cart</button>
                </div>
                <div className="card m1 m-2" >
                    <img className="w-100 h-100 card-image-top" src={M2} alt="mens" />
                    <div style={{border:'1px solid black'}} className="card-body ">
                       <p className="card-text">{data.Men2.Name}</p>
                       <tt>Rs.{data.Men2.Price}/</tt>
                       <p>{data.Men2.Rating}<i><Star/></i></p>
                    </div>
                    <button value="m2" onClick={props.onClick}>Add to Cart</button>
                </div>
                <div className="card m1 m-2" >
                    <img className="w-100 h-100 card-image-top" src={M3} alt="mens" />
                    <div style={{border:'1px solid black'}} className="card-body ">
                       <p className="card-text">{data.Men3.Name}</p>
                       <tt>Rs.{data.Men3.Price}/</tt>
                       <p>{data.Men3.Rating}<i><Star/></i></p>
                    </div>
                    <button value="m3" onClick={props.onClick}>Add to Cart</button>
                </div>
                <div className="card m1 m-2" >
                    <img className="w-100 h-100 card-image-top" src={M4} alt="mens" />
                    <div style={{border:'1px solid black'}} className="card-body ">
                       <p className="card-text">{data.Men4.Name}</p>
                       <tt>Rs.{data.Men4.Price}/</tt>
                       <p>{data.Men4.Rating}<i><Star/></i></p>
                    </div>
                    <button value="m4" onClick={props.onClick}>Add to Cart</button>
                </div>
                <div className="card m1 m-2" >
                    <img className="w-100 h-100 card-image-top" src={M5} alt="mens" />
                    <div style={{border:'1px solid black'}} className="card-body ">
                       <p className="card-text">{data.Men5.Name}</p>
                       <tt>Rs.{data.Men5.Price}/</tt>
                       <p>{data.Men5.Rating}<i><Star/></i></p>
                    </div>
                    <button value="m5" onClick={props.onClick}>Add to Cart</button>
                </div>
                <div className="card m1 m-2" >
                    <img className="w-100 h-100 card-image-top" src={M6} alt="mens" />
                    <div style={{border:'1px solid black'}} className="card-body ">
                       <p className="card-text">{data.Men6.Name}</p>
                       <tt>Rs.{data.Men6.Price}/</tt>
                       <p>{data.Men6.Rating}<i><Star/></i></p>
                    </div>
                    <button value="m6" onClick={props.onClick}>Add to Cart</button>
                </div>
                <div className="card m1 m-2" >
                    <img className="w-100 h-100 card-image-top" src={M7} alt="mens" />
                    <div style={{border:'1px solid black'}} className="card-body ">
                       <p className="card-text">{data.Men7.Name}</p>
                       <tt>Rs.{data.Men7.Price}/</tt>
                       <p>{data.Men7.Rating}<i><Star/></i></p>
                    </div>
                    <button value="m7" onClick={props.onClick}>Add to Cart</button>
                </div>
                <div className="card m1 m-2" >
                    <img className="w-100 h-100 card-image-top" src={M8} alt="mens" />
                    <div style={{border:'1px solid black'}} className="card-body ">
                       <p className="card-text">{data.Men8.Name}</p>
                       <tt>Rs.{data.Men8.Price}/</tt>
                       <p>{data.Men8.Rating}<i><Star/></i></p>
                    </div>
                    <button value="m8" onClick={props.onClick}>Add to Cart</button>
                </div>
                <div className="card m1 m-2" >
                    <img className="w-100 h-100 card-image-top" src={M9} alt="mens" />
                    <div style={{border:'1px solid black'}} className="card-body ">
                       <p className="card-text">{data.Men9.Name}</p>
                       <tt>Rs.{data.Men9.Price}/</tt>
                       <p>{data.Men9.Rating}<i><Star/></i></p>
                    </div>
                    <button value="m9" onClick={props.onClick}>Add to Cart</button>
                </div> <div className="card m1 m-2" >
                    <img className="w-100 h-100 card-image-top" src={M10} alt="mens" />
                    <div style={{border:'1px solid black'}} className="card-body ">
                       <p className="card-text">{data.Men10.Name}</p>
                       <tt>Rs.{data.Men10.Price}/</tt>
                       <p>{data.Men10.Rating}<i><Star/></i></p>
                    </div>
                    <button value="m10" onClick={props.onClick}>Add to Cart</button>
                </div>
            </div>
            <br />
            <br />
            <hr />
        </div>
    )
}