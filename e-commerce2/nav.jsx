import React from "react";
import "./e-commerce.css";
import { useNavigate, NavLink } from "react-router-dom";
import { Person, ShoppingCartOutlined } from "@mui/icons-material";

export function Nav(props) {
  const Navigate = useNavigate();
  function onInputChange(e) {
    if (e.target.value === "Mens") {
      Navigate('/mens')
    }
    else if (e.target.value === "Womens") {
      Navigate('/womens')
    }
    else if (e.target.value === "Kids") {
      Navigate('/kids')
    }else if(e.target.value === "Search"){
      Navigate('/')
    } else {
      Navigate('/')
    }
  }
  function CartClick() {
    Navigate("/cart")
  }
  function Login(){
    Navigate("/login")
  }
  return (
    <div style={{ position: 'sticky', top: '0', bottom: '0', zIndex: '10', backgroundColor: 'white' }} className="p-2 rounded">
      <div className="banner">
        <div className="d-flex justify-content-between m-2">
          <h2 style={{ color: 'purple', height: '40px', alignItems: 'center', display: 'flex' }}>
            Market<span style={{ color: 'crimson' }}>Bazaar</span>
          </h2>
          <div>
            <ShoppingCartOutlined className="cart" style={{ fontSize: '2.2pc' }} onClick={CartClick} /><span>{props.data}</span>
            <Person className="person" titleAccess="login" style={{ fontSize: '2.5pc' }} onClick={Login} />
          </div>
        </div>
        <div>
          <input
            list="List"
            onChange={onInputChange}
            className="form-control"
            placeholder="search here...."
            type="search"
          />
          <datalist id="List">
            <option value="Home"></option>
            <option value="Mens"></option>
            <option value="Womens"></option>
            <option value="Kids"></option>
          </datalist>
        </div>
      </div>
      <ul >
        <NavLink className="p-1 m-2" style={{ textDecoration: 'none', fontWeight: '600', border: '1px inset black', borderRadius: "5px" }} to="/">Home</NavLink>
        <NavLink className="p-1 m-2" style={{ textDecoration: 'none', fontWeight: '600', border: '1px inset black', borderRadius: "5px" }} to="/mens">Mens</NavLink>
        <NavLink className="p-1 m-2" style={{ textDecoration: 'none', fontWeight: '600', border: '1px inset black', borderRadius: "5px" }} to="/womens">Womens</NavLink>
        <NavLink className="p-1 m-2" style={{ textDecoration: 'none', fontWeight: '600', border: '1px inset black', borderRadius: "5px" }} to="/kids">Kids</NavLink>
      </ul>
      <div id="hide">
        {/* Check if the selectedCategory is "mens" and render Mens component */}
      </div>
      <div>
      </div>
    </div>
  );
}
