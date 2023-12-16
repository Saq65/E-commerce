import {React, useEffect, useState} from "react";
import "./e-commerce.css";
import k20 from "./images/kidImage/c5.jpg";
import K1 from "./images/kidImage/c1.jpg";
import K2 from "./images/kidImage/c3.jpg";
import K3 from "./images/kidImage/c12.webp";
import K4 from "./images/kidImage/c11.webp";
import K5 from "./images/kidImage/c10.jpg";
import K6 from "./images/kidImage/c6.webp";
import K7 from "./images/kidImage/c5.jpg";
import K8 from "./images/kidImage/c9.webp";
import K10 from "./images/kidImage/c7.webp";
import axios from "axios";
import { Star } from "@mui/icons-material";


export function Kids(props) {
    const [data,setdata] = useState({"kid1":{},"kid2":{},"kid3":{},"kid4":{},"kid5":{},"kid6":{},"kid7":{},"kid8":{},"kid9":{},"kid10":{}});
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
                    <h1 id="mensOffer" >55% Off kids clothing...</h1>
                </div>
            </div>
            <div className="headingMens mt-2">
                <h3 className="text-center">KIDS'S FASHION</h3>
                <div style={{position:'relative',marginBottom:'120px'}} className="d-flex justify-content-center">
                    <hr style={{ width: '100px',color:'black',borderRadius:'5px'}} />
                </div>
            </div>
            <div id="card" className="m-3">
                <div className="card m1 m-2" >
                    <img className="w-100 h-100 card-image-top" src={K1} alt="kids" />
                    <div style={{border:'1px solid black'}} className="card-body ">
                       <p className="card-text">{data.kid1.Name}</p>
                       <tt>Rs.{data.kid1.Price}/</tt>
                       <p>{data.kid1.Rating}<i><Star/></i></p>
                    </div>
                    <button value="k1" onClick={props.onClick}>Add to Cart</button>
                </div>
                <div className="card m1 m-2" >
                    <img className="w-100 h-100 card-image-top" src={K2} alt="kids" />
                    <div style={{border:'1px solid black'}} className="card-body ">
                       <p className="card-text">{data.kid2.Name}</p>
                       <tt>Rs.{data.kid2.Price}/</tt>
                       <p>{data.kid2.Rating}<i><Star/></i></p>
                    </div>
                    <button value="k2" onClick={props.onClick}>Add to Cart</button>
                </div>
                <div className="card m1 m-2" >
                    <img className="w-100 h-100 card-image-top" src={K3} alt="kids" />
                    <div style={{border:'1px solid black'}} className="card-body ">
                       <p className="card-text">{data.kid3.Name}</p>
                       <tt>Rs.{data.kid3.Price}/</tt>
                       <p>{data.kid3.Rating}<i><Star/></i></p>
                    </div>
                    <button value="k3" onClick={props.onClick}>Add to Cart</button>
                </div>
                <div className="card m1 m-2" >
                    <img className="w-100 h-100 card-image-top" src={K4} alt="kids" />
                    <div style={{border:'1px solid black'}} className="card-body ">
                       <p className="card-text">{data.kid4.Name}</p>
                       <tt>Rs.{data.kid4.Price}/</tt>
                       <p>{data.kid4.Rating}<i><Star/></i></p>
                    </div>
                    <button value="k4" onClick={props.onClick}>Add to Cart</button>
                </div>
                <div className="card m1 m-2" >
                    <img className="w-100 h-100 card-image-top" src={K5} alt="kids" />
                    <div style={{border:'1px solid black'}} className="card-body ">
                       <p className="card-text">{data.kid5.Name}</p>
                       <tt>Rs.{data.kid5.Price}/</tt>
                       <p>{data.kid5.Rating}<i><Star/></i></p>
                    </div>
                    <button value="k5" onClick={props.onClick}>Add to Cart</button>
                </div>
                <div className="card m1 m-2" >
                    <img className="w-100 h-100 card-image-top" src={K6} alt="kids" />
                    <div style={{border:'1px solid black'}} className="card-body ">
                       <p className="card-text">{data.kid6.Name}</p>
                       <tt>Rs.{data.kid6.Price}/</tt>
                       <p>{data.kid6.Rating}<i><Star/></i></p>
                    </div>
                    <button value="k6" onClick={props.onClick}>Add to Cart</button>
                </div>
                <div className="card m1 m-2" >
                    <img className="w-100 h-100 card-image-top" src={K7} alt="kids" />
                    <div style={{border:'1px solid black'}} className="card-body ">
                       <p className="card-text">{data.kid7.Name}</p>
                       <tt>Rs.{data.kid7.Price}/</tt>
                       <p>{data.kid7.Rating}<i><Star/></i></p>
                    </div>
                    <button value="k7" onClick={props.onClick}>Add to Cart</button>
                </div>
                <div className="card m1 m-2" >
                    <img className="w-100 h-100 card-image-top" src={K8} alt="kids" />
                    <div style={{border:'1px solid black'}} className="card-body ">
                       <p className="card-text">{data.kid8.Name}</p>
                       <tt>Rs.{data.kid8.Price}/</tt>
                       <p>{data.kid8.Rating}<i><Star/></i></p>
                    </div>
                    <button value="k8" onClick={props.onClick}>Add to Cart</button>
                </div>
                <div className="card m1 m-2" >
                    <img className="w-100 h-100 card-image-top" src={k20} alt="kids" />
                    <div style={{border:'1px solid black'}} className="card-body ">
                       <p className="card-text">{data.kid9.Name}</p>
                       <tt>Rs.{data.kid9.Price}/</tt>
                       <p>{data.kid9.Rating}<i><Star/></i></p>
                    </div>
                    <button value="k9" onClick={props.onClick}>Add to Cart</button>
                </div> <div className="card m1 m-2" >
                    <img className="w-100 h-100 card-image-top" src={K10} alt="kids" />
                    <div style={{border:'1px solid black'}} className="card-body ">
                       <p className="card-text">{data.kid10.Name}</p>
                       <tt>Rs.{data.kid10.Price}/</tt>
                       <p>{data.kid10.Rating}<i><Star/></i></p>
                    </div>
                    <button value="k10" onClick={props.onClick}>Add to Cart</button>
                </div>
            </div>
            <br />
            <br />
            <hr />
        </div>
    )
}