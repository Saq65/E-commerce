import { React, useState } from "react";
import { auth } from "./firebase";
import { createUserWithEmailAndPassword, signOut } from "firebase/auth";
import { useNavigate } from "react-router-dom";

export function Login() {
    const [name, setname] = useState("");
    const [email, setemail] = useState("");
    const [password, setpassword] = useState("");
    const SIgnIn = async () => {
        try {
            await createUserWithEmailAndPassword(auth, email, password);
        } catch (err) {
            console.error(err)
        }
    };
    const Logout = async () => {
        try {
            await signOut(auth);
        } catch (err) {
            console.error(err)
        }
    };
    const Navigate = useNavigate();
    function Submit() {
        alert(`Welcome ${name} to our website`)
        Navigate('/')
    }

    return (
        <div className="contianer-fluid d-flex justify-content-center">
            <div className="mt-5">
                <form onSubmit={Submit} action="#">
                    <h4 className="text-primary text-center">Login</h4>
                    <input className="form-control" type="text" onChange={(e) => setname(e.target.value)} placeholder="enter your name" /><br />
                    <input className="form-control"  required type="email" onChange={(e) => setemail(e.target.value)} placeholder="enter your email" /><br />
                    <input className="form-control"  onChange={(e) => setpassword(e.target.value)} type="password" placeholder="enter your password" /><br />
                    <br />
                    <button onClick={SIgnIn} className="btn btn-primary">submit</button>
                    <button onClick={Logout} className="btn btn-outline-primary mx-3">logout</button>
                </form>
            </div>
        </div>
    )
}