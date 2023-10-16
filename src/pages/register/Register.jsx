import { useContext, useState } from "react";
import { Link } from "react-router-dom";
import { AuthContext } from "../../providers/AuthProvider";
import toast, { Toaster } from "react-hot-toast";

const Register = () => {
  const [registerError, setRegisterError] = useState("");
  const { createUser } = useContext(AuthContext);

  const handleRegister = (e) => {
    e.preventDefault();

    const email = e.target.email.value;
    const password = e.target.password.value;
    const name = e.target.name.value;
    // console.log(email, password, name);
    setRegisterError("");

    if (password.length < 6) {
      setRegisterError("Password must have at least 6 characters or more");
      return;
    } else if (!/[A-Z]/.test(password)) {
      setRegisterError("Password has no capital letter");
      return;
    } else if (!/[^a-zA-Z0-9]/.test(password)) {
      setRegisterError("Password has no special character.");
      return;
    }
    createUser(email, password)
      .then((result) => {
        console.log(result.user);
        toast.success("Successfully registered!");
      })
      .catch((error) => {
        console.log(error);
        setRegisterError(error.message);
      });
  };

  return (
    <div className="min-h-screen bg-gray-100 mx-auto">
      <Toaster />
      <div className="text-center">
        <h1 className="text-5xl py-10 font-bold text-black">Register now!</h1>
      </div>
      <div className="hero ">
        <div className="card mt-5 flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
          <form onSubmit={handleRegister} className="card-body">
            <div className="form-control">
              <label className="label">
                <span className="label-text">Name</span>
              </label>
              <input
                type="text"
                placeholder="name"
                name="name"
                className="input input-bordered"
                required
              />
            </div>
            <div className="form-control">
              <label className="label">
                <span className="label-text">Email</span>
              </label>
              <input
                type="email"
                placeholder="email"
                name="email"
                className="input input-bordered"
                required
              />
            </div>
            <div className="form-control">
              <label className="label">
                <span className="label-text">Password</span>
              </label>
              <input
                type="password"
                placeholder="password"
                name="password"
                className="input input-bordered"
                required
              />
            </div>
            <div className="form-control mt-6">
              <button className="btn btn-primary">Register</button>
            </div>
          </form>
          <div className="text-center font-semibold text-red-800">
            {registerError && <p>{registerError}</p>}
          </div>
          <div className="sm:mx-auto sm:w-full sm:max-w-md pb-5">
            <p className="mt-2 text-center text-base text-gray-600 max-w">
              Or
              <Link
                to="/login"
                className="ml-1  font-medium text-blue-600 hover:text-blue-500"
              >
                login here!!
              </Link>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Register;
