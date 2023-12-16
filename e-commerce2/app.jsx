import React, { useEffect, useState } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Nav } from "./nav";
import { Ecommerce } from "./e-commerce";
import { Mens } from "./mens";
import { Kids } from "./kids";
import { Cart } from "./cart";
import { Login } from "./login";
import axios from "axios";
import { StarFill } from "react-bootstrap-icons";
import { Womenreal } from "./women";
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
import K20 from "./images/kidImage/c5.jpg";
import K1 from "./images/kidImage/c1.jpg";
import K2 from "./images/kidImage/c3.jpg";
import K3 from "./images/kidImage/c12.webp";
import K4 from "./images/kidImage/c11.webp";
import K5 from "./images/kidImage/c10.jpg";
import K6 from "./images/kidImage/c6.webp";
import K7 from "./images/kidImage/c5.jpg";
import K8 from "./images/kidImage/c9.webp";
import K10 from "./images/kidImage/c7.webp";

export function AppEcommerce() {
  const [data, setData] = useState(0);
  const [totalPrice, setTotalPrice] = useState(0);
  const [details, setDetails] = useState({
    "Men1": {}, "Men2": {}, "Men3": {}, "Men4": {}, "Men5": {}, Men6: {}, Men7: {}, Men8: {}, Men9: {}, Men10: {},
    "women1": {}, "women2": {}, "women3": {}, "women4": {}, "women5": {}, "women6": {}, "women7": {}, "women8": {}, "women9": {}, "women10": {},
    "kid1": {}, "kid2": {}, "kid3": {}, "kid4": {}, "kid5": {}, "kid6": {}, "kid7": {}, "kid8": {}, "kid9": {}, "kid10": {}
  });
  const [a, setA] = useState([]);

  useEffect(() => {
    axios.get('ecommerce.json').then((res) => {
      setDetails(res.data);
    });
  }, []);

  const handleClick = (e) => {
    if (e.target.value === "m1") {
      setTotalPrice((prevTotal) => prevTotal + details.Men1.Price);

      setData(data + 1);
      // Update total price
      const itemKey = `Men${data + 1}`;
      setA((oldA) => [
        ...oldA,
        <div key={itemKey} id="cart" className="d-flex justify-content-between m-1">
          <img style={{ width: '75px', height: '65px' }} className="card-image-top" src={M1} alt="mens" />
          <p>{details.Men1.Name}</p>
          <p>Rs.{details.Men1.Price}/</p>
          <p>{details.Men1.Rating}<StarFill /></p>
          <div>
          <button value={itemKey} className="btn btn-outline-danger" onClick={() => Remove(itemKey, details.Men1.Price)}>remove</button>
          </div>
        </div>
      ]);
    } else if (e.target.value === "m2") {
      setTotalPrice((prevTotal) => prevTotal + details.Men2.Price);
      setData(data + 1);
      const itemKey = `Men${data + 1}`;
      setA((oldA) => [
        ...oldA,
        <div key={itemKey} id="cart" className="d-flex justify-content-between m-1">
          <img style={{ width: '75px', height: '65px' }} className="card-image-top" src={M2} alt="mens" />
          <p>{details.Men2.Name}</p>
          <p>Rs.{details.Men2.Price}/</p>
          <p>{details.Men2.Rating}<StarFill /></p>
          <div>
            <button value={itemKey} className="btn btn-outline-danger" onClick={() => Remove(itemKey,details.Men2.Price)}>remove</button>
          </div>
        </div>
      ]);
    } else if (e.target.value === "m3") {
      setTotalPrice((prevTotal) => prevTotal + details.Men3.Price);
      setData(data + 1);
      const itemKey = `Men${data + 1}`;
      setA((oldA) => [
        ...oldA,
        <div key={itemKey} id="cart" className="d-flex justify-content-between m-1">
          <img style={{ width: '75px', height: '65px' }} className="card-image-top" src={M3} alt="mens" />
          <p>{details.Men3.Name}</p>
          <p>Rs.{details.Men3.Price}/</p>
          <p>{details.Men3.Rating}<StarFill /></p>
          <div>
            <button value={itemKey} className="btn btn-outline-danger" onClick={() => Remove(itemKey,details.Men3.Price)}>remove</button>
          </div>
        </div>
      ]);
    } else if (e.target.value === "m4") {
      setTotalPrice((prevTotal) => prevTotal + details.Men4.Price);
      setData(data + 1);
      const itemKey = `Men${data + 1}`;
      setA((oldA) => [
        ...oldA,
        <div key={itemKey} id="cart" className="d-flex justify-content-between m-1">
          <img style={{ width: '75px', height: '65px' }} className="card-image-top" src={M4} alt="mens" />
          <p>{details.Men4.Name}</p>
          <p>Rs.{details.Men4.Price}/</p>
          <p>{details.Men4.Rating}<StarFill /></p>
          <div>
            <button value={itemKey} className="btn btn-outline-danger" onClick={() => Remove(itemKey,details.Men4.Price)}>remove</button>
          </div>
        </div>
      ]);
    } else if (e.target.value === "m5") {
      setTotalPrice((prevTotal) => prevTotal + details.Men5.Price);
      setData(data + 1);
      const itemKey = `Men${data + 1}`;
      setA((oldA) => [
        ...oldA,
        <div key={itemKey} id="cart" className="d-flex justify-content-between m-1">
          <img style={{ width: '75px', height: '65px' }} className="card-image-top" src={M5} alt="mens" />
          <p>{details.Men5.Name}</p>
          <p>Rs.{details.Men5.Price}/</p>
          <p>{details.Men5.Rating}<StarFill /></p>
          <div>
            <button value={itemKey} className="btn btn-outline-danger" onClick={() => Remove(itemKey,details.Men5.Price)}>remove</button>
          </div>
        </div>
      ]);
    } else if (e.target.value === "m6") {
      setTotalPrice((prevTotal) => prevTotal + details.Men6.Price);
      setData(data + 1);
      const itemKey = `Men${data + 1}`;
      setA((oldA) => [
        ...oldA,
        <div key={itemKey} id="cart" className="d-flex justify-content-between m-1">
          <img style={{ width: '75px', height: '65px' }} className="card-image-top" src={M6} alt="mens" />
          <p>{details.Men6.Name}</p>
          <p>Rs.{details.Men6.Price}/</p>
          <p>{details.Men6.Rating}<StarFill /></p>
          <div>
            <button value={itemKey} className="btn btn-outline-danger" onClick={() => Remove(itemKey,details.Men6.Price)}>remove</button>
          </div>
        </div>
      ]);
    } else if (e.target.value === "m7") {
      setTotalPrice((prevTotal) => prevTotal + details.Men7.Price);
      setData(data + 1);
      const itemKey = `Men${data + 1}`;
      setA((oldA) => [
        ...oldA,
        <div key={itemKey} id="cart" className="d-flex justify-content-between m-1">
          <img style={{ width: '75px', height: '65px' }} className="card-image-top" src={M7} alt="mens" />
          <p>{details.Men7.Name}</p>
          <p>Rs.{details.Men7.Price}/</p>
          <p>{details.Men7.Rating}<StarFill /></p>
          <div>
            <button value={itemKey} className="btn btn-outline-danger" onClick={() => Remove(itemKey,details.Men7.Price)}>remove</button>
          </div>
        </div>
      ]);
    } else if (e.target.value === "m8") {
      setTotalPrice((prevTotal) => prevTotal + details.Men8.Price);
      setData(data + 1);
      const itemKey = `Men${data + 1}`;
      setA((oldA) => [
        ...oldA,
        <div key={itemKey} id="cart" className="d-flex justify-content-between m-1">
          <img style={{ width: '75px', height: '65px' }} className="card-image-top" src={M8} alt="mens" />
          <p>{details.Men5.Name}</p>
          <p>Rs.{details.Men8.Price}/</p>
          <p>{details.Men8.Rating}<StarFill /></p>
          <div>
            <button value={itemKey} className="btn btn-outline-danger" onClick={() => Remove(itemKey,details.Men8.Price)}>remove</button>
          </div>
        </div>
      ]);
    } else if (e.target.value === "m9") {
      setTotalPrice((prevTotal) => prevTotal + details.Men9.Price);
      setData(data + 1);
      const itemKey = `Men${data + 1}`;
      setA((oldA) => [
        ...oldA,
        <div key={itemKey} id="cart" className="d-flex justify-content-between m-1">
          <img style={{ width: '75px', height: '65px' }} className="card-image-top" src={M9} alt="mens" />
          <p>{details.Men9.Name}</p>
          <p>Rs.{details.Men9.Price}/</p>
          <p>{details.Men9.Rating}<StarFill /></p>
          <div>
            <button value={itemKey} className="btn btn-outline-danger" onClick={() => Remove(itemKey,details.Men9.Price)}>remove</button>
          </div>
        </div>
      ]);
    } else if (e.target.value === "m10") {
      setTotalPrice((prevTotal) => prevTotal + details.Men10.Price);
      setData(data + 1);
      const itemKey = `Men${data + 1}`;
      setA((oldA) => [
        ...oldA,
        <div key={itemKey} id="cart" className="d-flex justify-content-between m-1">
          <img style={{ width: '75px', height: '65px' }} className="card-image-top" src={M10} alt="mens" />
          <p>{details.Men10.Name}</p>
          <p>Rs.{details.Men10.Price}/</p>
          <p>{details.Men10.Rating}<StarFill /></p>
          <div>
            <button value={itemKey} className="btn btn-outline-danger" onClick={() => Remove(itemKey,details.Men10.Price)}>remove</button>
          </div>
        </div>
      ]);
    }
  };

  //womens 

  const handleClick2 = (e) => {
    if (e.target.value === "w1") {
      setTotalPrice((prevTotal) => prevTotal + details.women1.Price);

      setData(data + 1);
      // Update total price
      const itemKey = `Men${data + 1}`;
      setA((oldA) => [
        ...oldA,
        <div key={itemKey} id="cart" className="d-flex justify-content-between m-1">
          <img style={{ width: '75px', height: '65px' }} className=" card-image-top" src={W1} alt="womens" />
          <p>{details.women1.Name}</p>
          <p>Rs.{details.women1.Price}/</p>
          <p>{details.women1.Rating}<StarFill /></p>
          <div>
            <button value={itemKey} className="btn btn-outline-danger" onClick={() => Remove(itemKey,details.women1.Price)}>remove</button>
          </div>
        </div>
      ]);
    } else if (e.target.value === "w2") {
      setTotalPrice((prevTotal) => prevTotal + details.women2.Price);
      setData(data + 1);
      const itemKey = `Men${data + 1}`;
      setA((oldA) => [
        ...oldA,
        <div key={itemKey} id="cart" className="d-flex justify-content-between m-1">
          <img style={{ width: '75px', height: '65px' }} className=" card-image-top" src={W2} alt="womens" />
          <p>{details.women2.Name}</p>
          <p>Rs.{details.women2.Price}/</p>
          <p>{details.women2.Rating}<StarFill /></p>
          <div>
            <button value={itemKey} className="btn btn-outline-danger" onClick={() => Remove(itemKey,details.women2.Price)}>remove</button>
          </div>
        </div>
      ]);
    } else if (e.target.value === "w3") {
      setTotalPrice((prevTotal) => prevTotal + details.women3.Price);
      setData(data + 1);
      const itemKey = `Men${data + 1}`;
      setA((oldA) => [
        ...oldA,
        <div key={itemKey} id="cart" className="d-flex justify-content-between m-1">
          <img style={{ width: '75px', height: '65px' }} className=" card-image-top" src={W3} alt="womens" />
          <p>{details.women3.Name}</p>
          <p>Rs.{details.women3.Price}/</p>
          <p>{details.women3.Rating}<StarFill /></p>
          <div>
            <button value={itemKey} className="btn btn-outline-danger" onClick={() => Remove(itemKey,details.women3.Price)}>remove</button>
          </div>
        </div>
      ]);
    } else if (e.target.value === "w4") {
      setTotalPrice((prevTotal) => prevTotal + details.women4.Price);
      setData(data + 1);
      const itemKey = `Men${data + 1}`;
      setA((oldA) => [
        ...oldA,
        <div key={itemKey} id="cart" className="d-flex justify-content-between m-1">
          <img style={{ width: '75px', height: '65px' }} className=" card-image-top" src={W4} alt="womens" />
          <p>{details.women4.Name}</p>
          <p>Rs.{details.women4.Price}/</p>
          <p>{details.women4.Rating}<StarFill /></p>
          <div>
            <button value={itemKey} className="btn btn-outline-danger" onClick={() => Remove(itemKey,details.women4.Price)}>remove</button>
          </div>
        </div>
      ]);
    } else if (e.target.value === "w5") {
      setTotalPrice((prevTotal) => prevTotal + details.women5.Price);
      setData(data + 1);
      const itemKey = `Men${data + 1}`;
      setA((oldA) => [
        ...oldA,
        <div key={itemKey} id="cart" className="d-flex justify-content-between m-1">
          <img style={{ width: '75px', height: '65px' }} className=" card-image-top" src={W5} alt="womens" />
          <p>{details.women5.Name}</p>
          <p>Rs.{details.women5.Price}/</p>
          <p>{details.women5.Rating}<StarFill /></p>
          <div>
            <button value={itemKey} className="btn btn-outline-danger" onClick={() => Remove(itemKey,details.women5.Price)}>remove</button>
          </div>
        </div>
      ]);
    } else if (e.target.value === "w6") {
      setTotalPrice((prevTotal) => prevTotal + details.women6.Price);
      setData(data + 1);
      const itemKey = `Men${data + 1}`;
      setA((oldA) => [
        ...oldA,
        <div key={itemKey} id="cart" className="d-flex justify-content-between m-1">
          <img style={{ width: '75px', height: '65px' }} className=" card-image-top" src={W6} alt="womens" />
          <p>{details.women6.Name}</p>
          <p>Rs.{details.women6.Price}/</p>
          <p>{details.women6.Rating}<StarFill /></p>
          <div>
            <button value={itemKey} className="btn btn-outline-danger" onClick={() => Remove(itemKey,details.women6.Price)}>remove</button>
          </div>
        </div>
      ]);
    } else if (e.target.value === "w7") {
      setTotalPrice((prevTotal) => prevTotal + details.women7.Price);
      setData(data + 1);
      const itemKey = `Men${data + 1}`;
      setA((oldA) => [
        ...oldA,
        <div key={itemKey} id="cart" className="d-flex justify-content-between m-1">
          <img style={{ width: '75px', height: '65px' }} className=" card-image-top" src={W7} alt="womens" />
          <p>{details.women7.Name}</p>
          <p>Rs.{details.women7.Price}/</p>
          <p>{details.women7.Rating}<StarFill /></p>
          <div>
            <button value={itemKey} className="btn btn-outline-danger" onClick={() => Remove(itemKey,details.women7.Price)}>remove</button>
          </div>
        </div>
      ]);
    } else if (e.target.value === "w8") {
      setTotalPrice((prevTotal) => prevTotal + details.women8.Price);
      setData(data + 1);
      const itemKey = `Men${data + 1}`;
      setA((oldA) => [
        ...oldA,
        <div key={itemKey} id="cart" className="d-flex justify-content-between m-1">
          <img style={{ width: '75px', height: '65px' }} className=" card-image-top" src={W8} alt="womens" />
          <p>{details.women5.Name}</p>
          <p>Rs.{details.women8.Price}/</p>
          <p>{details.women8.Rating}<StarFill /></p>
          <div>
            <button value={itemKey} className="btn btn-outline-danger" onClick={() => Remove(itemKey,details.women8.Price)}>remove</button>
          </div>
        </div>
      ]);
    } else if (e.target.value === "w9") {
      setTotalPrice((prevTotal) => prevTotal + details.women9.Price);
      setData(data + 1);
      const itemKey = `Men${data + 1}`;
      setA((oldA) => [
        ...oldA,
        <div key={itemKey} id="cart" className="d-flex justify-content-between m-1">
          <img style={{ width: '75px', height: '65px' }} className=" card-image-top" src={W9} alt="womens" />
          <p>{details.women9.Name}</p>
          <p>Rs.{details.women9.Price}/</p>
          <p>{details.women9.Rating}<StarFill /></p>
          <div>
            <button value={itemKey} className="btn btn-outline-danger" onClick={() => Remove(itemKey,details.women9.Price)}>remove</button>
          </div>
        </div>
      ]);
    } else if (e.target.value === "w10") {
      setTotalPrice((prevTotal) => prevTotal + details.women10.Price);
      setData(data + 1);
      const itemKey = `Men${data + 1}`;
      setA((oldA) => [
        ...oldA,
        <div key={itemKey} id="cart" className="d-flex justify-content-between m-1">
          <img style={{ width: '75px', height: '65px' }} className=" card-image-top" src={W10} alt="womens" />
          <p>{details.women10.Name}</p>
          <p>Rs.{details.women10.Price}/</p>
          <p>{details.women10.Rating}<StarFill /></p>
          <div>
            <button value={itemKey} className="btn btn-outline-danger" onClick={() => Remove(itemKey,details.women10.Price)}>remove</button>
          </div>
        </div>
      ]);
    }
  };

  //kids

  const handleClick3 = (e) => {
    if (e.target.value === "k1") {
      setTotalPrice((prevTotal) => prevTotal + details.kid1.Price);

      setData(data + 1);
      // Update total price
      const itemKey = `Men${data + 1}`;
      setA((oldA) => [
        ...oldA,
        <div key={itemKey} id="cart" className="d-flex justify-content-between m-1">
          <img style={{ width: '75px', height: '65px' }} className="card-image-top" src={K1} alt="kids" />
          <p>{details.kid1.Name}</p>
          <p>Rs.{details.kid1.Price}/</p>
          <p>{details.kid1.Rating}<StarFill /></p>
          <div>
            <button value={itemKey} className="btn btn-outline-danger" onClick={() => Remove(itemKey,details.kid1.Price)}>remove</button>
          </div>
        </div>
      ]);
    } else if (e.target.value === "k2") {
      setTotalPrice((prevTotal) => prevTotal + details.kid2.Price);
      setData(data + 1);
      const itemKey = `Men${data + 1}`;
      setA((oldA) => [
        ...oldA,
        <div key={itemKey} id="cart" className="d-flex justify-content-between m-1">
          <img style={{ width: '75px', height: '65px' }} className="card-image-top" src={K2} alt="kids" />
          <p>{details.kid2.Name}</p>
          <p>Rs.{details.kid2.Price}/</p>
          <p>{details.kid2.Rating}<StarFill /></p>
          <div>
            <button value={itemKey} className="btn btn-outline-danger" onClick={() => Remove(itemKey,details.kid2.Price)}>remove</button>
          </div>
        </div>
      ]);
    } else if (e.target.value === "k3") {
      setTotalPrice((prevTotal) => prevTotal + details.kid3.Price);
      setData(data + 1);
      const itemKey = `Men${data + 1}`;
      setA((oldA) => [
        ...oldA,
        <div key={itemKey} id="cart" className="d-flex justify-content-between m-1">
          <img style={{ width: '75px', height: '65px' }} className="card-image-top" src={K3} alt="kids" />
          <p>{details.kid3.Name}</p>
          <p>Rs.{details.kid3.Price}/</p>
          <p>{details.kid3.Rating}<StarFill /></p>
          <div>
            <button value={itemKey} className="btn btn-outline-danger" onClick={() => Remove(itemKey,details.kid3.Price)}>remove</button>
          </div>
        </div>
      ]);
    } else if (e.target.value === "k4") {
      setTotalPrice((prevTotal) => prevTotal + details.kid4.Price);
      setData(data + 1);
      const itemKey = `Men${data + 1}`;
      setA((oldA) => [
        ...oldA,
        <div key={itemKey} id="cart" className="d-flex justify-content-between m-1">
          <img style={{ width: '75px', height: '65px' }} className="card-image-top" src={K4} alt="kids" />
          <p>{details.kid4.Name}</p>
          <p>Rs.{details.kid4.Price}/</p>
          <p>{details.kid4.Rating}<StarFill /></p>
          <div>
            <button value={itemKey} className="btn btn-outline-danger" onClick={() => Remove(itemKey,details.kid4.Price)}>remove</button>
          </div>
        </div>
      ]);
    } else if (e.target.value === "k5") {
      setTotalPrice((prevTotal) => prevTotal + details.kid5.Price);
      setData(data + 1);
      const itemKey = `Men${data + 1}`;
      setA((oldA) => [
        ...oldA,
        <div key={itemKey} id="cart" className="d-flex justify-content-between m-1">
          <img style={{ width: '75px', height: '65px' }} className="card-image-top" src={K5} alt="kids" />
          <p>{details.kid5.Name}</p>
          <p>Rs.{details.kid5.Price}/</p>
          <p>{details.kid5.Rating}<StarFill /></p>
          <div>
          <button value={itemKey} className="btn btn-outline-danger" onClick={() => Remove(itemKey,details.kid5.Price)}>remove</button>          </div>
        </div>
      ]);
    } else if (e.target.value === "k6") {
      setTotalPrice((prevTotal) => prevTotal + details.kid6.Price);
      setData(data + 1);
      const itemKey = `Men${data + 1}`;
      setA((oldA) => [
        ...oldA,
        <div key={itemKey} id="cart" className="d-flex justify-content-between m-1">
          <img style={{ width: '75px', height: '65px' }} className="card-image-top" src={K6} alt="kids" />
          <p>{details.kid6.Name}</p>
          <p>Rs.{details.kid6.Price}/</p>
          <p>{details.kid6.Rating}<StarFill /></p>
          <div>
            <button value={itemKey} className="btn btn-outline-danger" onClick={() => Remove(itemKey,details.kid6.Price)}>remove</button>
          </div>
        </div>
      ]);
    } else if (e.target.value === "k7") {
      setTotalPrice((prevTotal) => prevTotal + details.kid7.Price);
      setData(data + 1);
      const itemKey = `Men${data + 1}`;
      setA((oldA) => [
        ...oldA,
        <div key={itemKey} id="cart" className="d-flex justify-content-between m-1">
          <img style={{ width: '75px', height: '65px' }} className="card-image-top" src={K7} alt="kids" />
          <p>{details.kid7.Name}</p>
          <p>Rs.{details.kid7.Price}/</p>
          <p>{details.kid7.Rating}<StarFill /></p>
          <div>
            <button value={itemKey} className="btn btn-outline-danger" onClick={() => Remove(itemKey,details.kid7.Price)}>remove</button>
          </div>
        </div>
      ]);
    } else if (e.target.value === "k8") {
      setTotalPrice((prevTotal) => prevTotal + details.kid8.Price);
      setData(data + 1);
      const itemKey = `Men${data + 1}`;
      setA((oldA) => [
        ...oldA,
        <div key={itemKey} id="cart" className="d-flex justify-content-between m-1">
          <img style={{ width: '75px', height: '65px' }} className="card-image-top" src={K8} alt="kids" />
          <p>{details.kid8.Name}</p>
          <p>Rs.{details.kid8.Price}/</p>
          <p>{details.kid8.Rating}<StarFill /></p>
          <div>
            <button value={itemKey} className="btn btn-outline-danger" onClick={() => Remove(itemKey,details.kid8.Price)}>remove</button>
          </div>
        </div>
      ]);
    } else if (e.target.value === "k9") {
      setTotalPrice((prevTotal) => prevTotal + details.kid9.Price);
      setData(data + 1);
      const itemKey = `Men${data + 1}`;
      setA((oldA) => [
        ...oldA,
        <div key={itemKey} id="cart" className="d-flex justify-content-between m-1">
          <img style={{ width: '75px', height: '65px' }} className="card-image-top" src={K20} alt="kids" />
          <p>{details.kid9.Name}</p>
          <p>Rs.{details.kid9.Price}/</p>
          <p>{details.kid9.Rating}<StarFill /></p>
          <div>
            <button value={itemKey} className="btn btn-outline-danger" onClick={() => Remove(itemKey,details.kid9.Price)}>remove</button>
          </div>
        </div>
      ]);
    } else if (e.target.value === "k10") {
      setTotalPrice((prevTotal) => prevTotal + details.kid10.Price);
      setData(data + 1);
      const itemKey = `Men${data + 1}`;
      setA((oldA) => [
        ...oldA,
        <div key={itemKey} id="cart" className="d-flex justify-content-between m-1">
          <img style={{ width: '75px', height: '65px' }} className="card-image-top" src={K10} alt="kids" />
          <p>{details.kid10.Name}</p>
          <p>Rs.{details.kid10.Price}/</p>
          <p>{details.kid10.Rating}<StarFill /></p>
          <div>
            <button value={itemKey} className="btn btn-outline-danger" onClick={() => Remove(itemKey,details.kid10.Price)}>remove</button>
          </div>
        </div>
      ]);
    }
  };

  const Remove = (key,price) => {
    setA((oldA) => oldA.filter((item) => item.key !== key))
    setData(prev => prev - 1)
    setTotalPrice(preTotal=> preTotal - price)
  };

  const Delete = (e) => {
    if (e.target.value === "cart") {
      document.getElementById('cart2').style.display = "none";
    } else {
      document.getElementById('cart2').style.display = "block";
    }
    setData(0)
    setA([])
    setTotalPrice(0)
  }

  return (
    <div>
      <BrowserRouter>
        <Nav data={data} />
        <Routes>
          <Route path="/" element={<Ecommerce />} />
          <Route path="/mens" element={<Mens onClick={handleClick} />} />
          <Route path="/womens" element={<Womenreal onClick={handleClick2} />} />
          <Route path="/kids" element={<Kids onClick={handleClick3} />} />
          <Route path="/cart" element={<Cart totalPrice={totalPrice} onClick={Delete} a={a} />} />
          <Route path="/login" element={<Login />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}
