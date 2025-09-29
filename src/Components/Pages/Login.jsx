import React, { useState } from "react";
import axios from "axios";

const Login = () => {
    const [state, setState] = useState("login"); // login | register
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [message, setMessage] = useState("");
    const [messageType, setMessageType] = useState(""); // error | success | info
    const [loading, setLoading] = useState(false);

    const handleSubmit = async (e) => {
        e.preventDefault();

        // Basic validation
        if (state === "register" && !name) {
            setMessage("Name is required");
            setMessageType("error");
            return;
        }
        if (!email || !password) {
            setMessage("Email and Password are required");
            setMessageType("error");
            return;
        }

        setLoading(true);
        setMessage("Processing...");
        setMessageType("info");

        try {
            const url = state === "register"
                ? "https://jsonplaceholder.typicode.com/posts" // Registration API
                : "https://jsonplaceholder.typicode.com/posts"; // Login API (same fake endpoint for demo)

            const payload = state === "register"
                ? { name, email, password }
                : { email, password };

            const response = await axios.post(url, payload);

            console.log("API Response:", response.data);

            setMessage(state === "register" ? "Account created successfully!" : "Login successful!");
            setMessageType("success");

            // Reset form after success
            setName("");
            setEmail("");
            setPassword("");
        } catch (error) {
            console.error(error);
            setMessage("Something went wrong! Please try again.");
            setMessageType("error");
        } finally {
            setLoading(false);
        }
    };

    return (
        <div className="container-fluid d-flex justify-content-center align-items-center min-vh-100 bg-light">
            <div className="row w-100">
                <div className="col-10 col-sm-8 col-md-6 col-lg-4 mx-auto">
                    <form onSubmit={handleSubmit} className="d-flex flex-column gap-3 p-4 border rounded shadow bg-white">
                        <p className="h4 fw-semibold text-center mb-3">
                            <span className="text-primary">User</span> {state === "login" ? "Login" : "Sign Up"}
                        </p>

                        {/* Message */}
                        {message && (
                            <div
                                className={`alert ${
                                    messageType === "error"
                                        ? "alert-danger"
                                        : messageType === "success"
                                        ? "alert-success"
                                        : "alert-info"
                                }`}
                            >
                                {message}
                            </div>
                        )}

                        {state === "register" && (
                            <div className="w-100">
                                <label className="form-label">Name</label>
                                <input
                                    onChange={(e) => setName(e.target.value)}
                                    value={name}
                                    placeholder="Enter Your Name"
                                    className="form-control"
                                    type="text"
                                />
                            </div>
                        )}

                        <div className="w-100">
                            <label className="form-label">Email</label>
                            <input
                                onChange={(e) => setEmail(e.target.value)}
                                value={email}
                                placeholder="Enter Your Email"
                                className="form-control"
                                type="email"
                            />
                        </div>

                        <div className="w-100">
                            <label className="form-label">Password</label>
                            <input
                                onChange={(e) => setPassword(e.target.value)}
                                value={password}
                                placeholder="Enter Password"
                                className="form-control"
                                type="password"
                            />
                        </div>

                        {state === "register" ? (
                            <p className="small text-center">
                                Already have an account?{" "}
                                <span
                                    onClick={() => setState("login")}
                                    className="text-primary"
                                    style={{ cursor: "pointer" }}
                                >
                                    Click here
                                </span>
                            </p>
                        ) : (
                            <p className="small text-center">
                                Create an account?{" "}
                                <span
                                    onClick={() => setState("register")}
                                    className="text-primary"
                                    style={{ cursor: "pointer" }}
                                >
                                    Click here
                                </span>
                            </p>
                        )}

                        <button type="submit" className="btn btn-primary w-100" disabled={loading}>
                            {loading
                                ? "Processing..."
                                : state === "register"
                                ? "Create Account"
                                : "Login"}
                        </button>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default Login;
