import './e-commerce.css';
export function Cart(props) {

    return (
        <div id='cart2' className="container-fluid">
            <div key={props.a} className="container">
                {props.a}
            </div>
            <hr />
            <div className="container" style={{ display: 'flex', justifyContent: 'right' }}>
                <div>
                    <h3>total:Rs.{props.totalPrice}/</h3>
                </div>
            </div>
            <div className='container d-flex justify-content-around'>
                <button value="cart" onClick={props.onClick} className="btn btn-danger">delete cart</button>
                <button onClick={() => { alert("Coming soon") }} className="btn btn-success">Buy Now</button>
            </div>
        </div>
    )
}