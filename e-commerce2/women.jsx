import {React, useEffect, useState} from "react";
import "./e-commerce.css";
import W1 from "./images/womenImage/w1.jpg";
import W2 from "./images/womenImage/w2.jpg";
import W3 from "./images/womenImage/w3.jpg";
import W4 from "./images/womenImage/w4.jpeg";
import W5 from "./images/womenImage/w5.jpg";
import W6 from "./images/womenImage/w6.webp";
import W7 from "./images/womenImage/w7.jpg";
import W8 from "./images/womenImage/w8.jpg";
import W9 from "./images/womenImage/w9.jpg";
import W10 from "./images/womenImage/w10.jpg";
import axios from "axios";
import { Star } from "@mui/icons-material";

export function Womenreal(props) {
    const [data,setdata] = useState({women1:{},women2:{},women3:{},women4:{},women5:{},women6:{},women7:{},women8:{},women9:{},women10:{}});
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
                    <h1 id="mensOffer">45% Off womens clothing...</h1>
                </div>
            </div>
            <div className="headingMens mt-2">
                <h3 className="text-center">WOMEN'S FASHION</h3>
                <div style={{position:'relative',marginBottom:'120px'}} className="d-flex justify-content-center">
                    <hr style={{ width: '100px',color:'black',borderRadius:'5px'}} />
                </div>
            </div>
            <div id="card" className="m-3" >
                <div className="card m1 m-2" >
                    <img className="w-100 h-100 card-image-top" src={W1} alt="womens" />
                    <div style={{border:'1px solid black'}} className="card-body ">
                       <p className="card-text">{data.women1.Name}</p>
                       <tt>Rs.{data.women1.Price}/</tt>
                       <p>{data.women1.Rating}<i><Star/></i></p>
                    </div>
                    <button value="w1" onClick={props.onClick}>Add to Cart</button>
                </div>
                <div className="card m1 m-2" >
                    <img className="w-100 h-100 card-image-top" src={W2} alt="womens" />
                    <div style={{border:'1px solid black'}} className="card-body ">
                       <p className="card-text">{data.women2.Name}</p>
                       <tt>Rs.{data.women2.Price}/</tt>
                       <p>{data.women2.Rating}<i><Star/></i></p>
                    </div>
                    <button value="w2" onClick={props.onClick}>Add to Cart</button>
                </div>
                <div className="card m1 m-2" >
                    <img className="w-100 h-100 card-image-top" src={W3} alt="womens" />
                    <div style={{border:'1px solid black'}} className="card-body ">
                       <p className="card-text">{data.women3.Name}</p>
                       <tt>Rs.{data.women3.Price}/</tt>
                       <p>{data.women3.Rating}<i><Star/></i></p>
                    </div>
                    <button value="w3" onClick={props.onClick}>Add to Cart</button>
                </div>
                <div className="card m1 m-2" >
                    <img className="w-100 h-100 card-image-top" src={W4} alt="womens" />
                    <div style={{border:'1px solid black'}} className="card-body ">
                       <p className="card-text">{data.women4.Name}</p>
                       <tt>Rs.{data.women4.Price}/</tt>
                       <p>{data.women4.Rating}<i><Star/></i></p>
                    </div>
                    <button value="w4" onClick={props.onClick}>Add to Cart</button>
                </div>
                <div className="card m1 m-2" >
                    <img className="w-100 h-100 card-image-top" src={W5} alt="womens" />
                    <div style={{border:'1px solid black'}} className="card-body ">
                       <p className="card-text">{data.women5.Name}</p>
                       <tt>Rs.{data.women5.Price}/</tt>
                       <p>{data.women5.Rating}<i><Star/></i></p>
                    </div>
                    <button value="w5" onClick={props.onClick}>Add to Cart</button>
                </div>
                <div className="card m1 m-2" >
                    <img className="w-100 h-100 card-image-top" src={W6} alt="womens" />
                    <div style={{border:'1px solid black'}} className="card-body ">
                       <p className="card-text">{data.women6.Name}</p>
                       <tt>Rs.{data.women6.Price}/</tt>
                       <p>{data.women6.Rating}<i><Star/></i></p>
                    </div>
                    <button value="w6" onClick={props.onClick}>Add to Cart</button>
                </div>
                <div className="card m1 m-2" >
                    <img className="w-100 h-100 card-image-top" src={W7} alt="womens" />
                    <div style={{border:'1px solid black'}} className="card-body ">
                       <p className="card-text">{data.women7.Name}</p>
                       <tt>Rs.{data.women7.Price}/</tt>
                       <p>{data.women7.Rating}<i><Star/></i></p>
                    </div>
                    <button value="w7" onClick={props.onClick}>Add to Cart</button>
                </div>
                <div className="card m1 m-2" >
                    <img className="w-100 h-100 card-image-top" src={W8} alt="womens" />
                    <div style={{border:'1px solid black'}} className="card-body ">
                       <p className="card-text">{data.women8.Name}</p>
                       <tt>Rs.{data.women8.Price}/</tt>
                       <p>{data.women8.Rating}<i><Star/></i></p>
                    </div>
                    <button value="w8" onClick={props.onClick}>Add to Cart</button>
                </div>
                <div className="card m1 m-2" >
                    <img className="w-100 h-100 card-image-top" src={W9} alt="womens" />
                    <div style={{border:'1px solid black'}} className="card-body ">
                       <p className="card-text">{data.women9.Name}</p>
                       <tt>Rs.{data.women9.Price}/</tt>
                       <p>{data.women9.Rating}<i><Star/></i></p>
                    </div>
                    <button value="w9" onClick={props.onClick}>Add to Cart</button>
                </div> <div className="card m1 m-2" >
                    <img className="w-100 h-100 card-image-top" src={W10} alt="womens" />
                    <div style={{border:'1px solid black'}} className="card-body ">
                       <p className="card-text">{data.women10.Name}</p>
                       <tt>Rs.{data.women10.Price}/</tt>
                       <p>{data.women10.Rating}<i><Star/></i></p>
                    </div>
                    <button value="w10" onClick={props.onClick}>Add to Cart</button>
                </div>
            </div>
            <br />
            <br />
            <hr />
        </div>
    )
}