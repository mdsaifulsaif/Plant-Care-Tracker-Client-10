import React, { use, useContext, useRef, useState } from "react";
import { Helmet } from "react-helmet-async";
import { Link } from "react-router";
import { useNavigate } from "react-router";
import { AuthContext } from "../authProvider/authProvider";
import Swal from "sweetalert2";
import { updateProfile } from "firebase/auth";

function Register() {
  const { createUser, googleLogin, setUser } = useContext(AuthContext);
  const [errorMassage, setErrorMassage] = useState();

  const navigate = useNavigate();

  const handleRegister = (e) => {
    e.preventDefault();
    const name = e.target.name.value;
    const email = e.target.email.value;
    const photourl = e.target.photourl.value;
    const password = e.target.password.value;
    const regex = /^(?=.*[a-z])(?=.*[A-Z]).{6,}$/;
    if (regex.test(password) == false) {
      setErrorMassage(
        "Password must be 6+ chars with uppercase & lowercase letters."
      );
      return;
    }

    createUser(email, password)
      .then((res) => {
        const user = res.user;
        //  Update Firebase user profile with name and photo
        const userupdate = updateProfile(user, {
          displayName: name,
          photoURL: photourl,
        });

        setUser({ ...user, displayName: name, photoURL: photourl });
        Swal.fire({
          title: "User Create successfully!",
          icon: "success",
          iconColor: "#008000",
          confirmButtonColor: "#008000",
          draggable: true,
        });
        navigate("/");
      })
      .catch((error) => {
        const errom = error.message;
        setErrorMassage(errom);
      });
  };

  //google login
  const handleGoogleLogin = () => {
    googleLogin()
      .then((res) => {
        const user = res.user;
      })
      .catch((error) => {
        const errom = error.message;
        setErrorMassage(errom);
        Swal.fire({
          icon: "error",
          title: `${errom}`,
          text: "Something went wrong!",
          confirmButtonColor: "#008000",
        });
      });
  };

  return (
    <div className="">
      <div className="flex  mt-15  items-center justify-center h-screen">
        <div className="card bg-base-100 w-full max-w-sm shrink-0 shadow-2xl">
          <Helmet>
            <title>Ninja | Register</title>
          </Helmet>
          <div className="card-body">
            <h1 className="text-3xl dark:text-gray-200 text-gray-800 font-bold">
              Register Now!
            </h1>
            <form onSubmit={handleRegister} className="fieldset">
              {/* name  */}
              <label className="label">Name</label>
              <input
                required
                name="name"
                type="text"
                className="input"
                placeholder="Name"
              />
              {/* name  */}
              <label className="label">Photo URL</label>
              <input
                required
                name="photourl"
                type="text"
                className="input"
                placeholder="Photo URl"
              />
              {/* email  */}
              <label className="label">Email</label>
              <input
                required
                name="email"
                type="email"
                className="input"
                placeholder="Email"
              />
              {/* password  */}
              <label className="label">Password</label>
              <input
                name="password"
                type="password"
                className="input"
                placeholder="Password"
              />

              <button
                type="submit"
                className="btn text-white bg-green-600 mt-4"
              >
                Register
              </button>

              <p className="text-sm mt-2">
                You Have An Account ?{" "}
                <Link className="text-blue-700" to="/Login">
                  Login
                </Link>
              </p>
              <p className="text-red-700">{errorMassage}</p>
            </form>
            {/* google login  */}
            <div className="mx-auto">
              <button
                onClick={handleGoogleLogin}
                className="btn bg-white text-black border-[#e5e5e5]"
              >
                <svg
                  aria-label="Google logo"
                  width="16"
                  height="16"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 512 512"
                >
                  <g>
                    <path d="m0 0H512V512H0" fill="#fff"></path>
                    <path
                      fill="#34a853"
                      d="M153 292c30 82 118 95 171 60h62v48A192 192 0 0190 341"
                    ></path>
                    <path
                      fill="#4285f4"
                      d="m386 400a140 175 0 0053-179H260v74h102q-7 37-38 57"
                    ></path>
                    <path
                      fill="#fbbc02"
                      d="m90 341a208 200 0 010-171l63 49q-12 37 0 73"
                    ></path>
                    <path
                      fill="#ea4335"
                      d="m153 219c22-69 116-109 179-50l55-54c-78-75-230-72-297 55"
                    ></path>
                  </g>
                </svg>
                Sing Up with Google
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Register;
