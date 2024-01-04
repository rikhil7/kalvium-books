import React, { useState } from "react";
import { ToastContainer, toast } from "react-toastify";
import { useForm } from "react-hook-form";
import "react-toastify/dist/ReactToastify.css";
import {useSelector,useDispatch} from 'react-redux'
import { storeFormData } from "../utils/Redux/action";
import {Link} from 'react-router-dom'
export default function Register() {
  const {
    register,
    handleSubmit,
    watch,
    reset,
    formState: { errors, isSubmitSuccessful, isSubmitted },
  } = useForm();
  const dispatch = useDispatch()
  const formData = useSelector((data)=>{
    return data.formData
  })

  //^ Function that will execute for the data which is submitted
  const FormSubmitHandler = (data) => {
    console.log("data:", data);
    localStorage.setItem("user-data", JSON.stringify(data))
    dispatch(storeFormData(data))
    toast.success("Form Submitted Successfully");
    reset();
  };
  const clearData = ()=>{
    dispatch(storeFormData({}))
    localStorage.clear()
  }
  const confirmPass = watch("password");
  console.log(formData)
  return (
    <div id="home">
          <ToastContainer />
      {Object.keys(formData).length !=0 ? (
        <div id="successful">
          <div className="msg">Thanks for Registering, your data has been stored!</div>
          <div id="buttons">
            <Link><button onClick={clearData}>Clear Data</button></Link>
            <Link to={"/"}><button>Go Back to Home</button></Link>
          </div>
        </div>
      ) : (
        <div id="form">
          <fieldset>
            <legend>Fill This Form</legend>

            <form onSubmit={handleSubmit(FormSubmitHandler)}>
              <div>
                <label> Name : </label>
                <input
                  type="text"
                  name="firstName"
                  {...register("firstName", {
                    required: "Fill First Name",
                    minLength: {
                      value: 3,
                      message: "Minimum 3 characters required",
                    },
                    maxLength: {
                      value: 30,
                      message: "Maximun 30 characters only",
                    },
                  })}
                />
                {errors.firstName && <p className="err">{errors.firstName.message}</p>}
                {/* <p className="err">{errors.firstName?.message}</p> */}
              </div>

              <div>
                <label> Email : </label>
                <input
                  type="email"
                  name="email"
                  {...register("email", {
                    required: "Email Required",
                    pattern: {
                      value: /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/,
                      message: "Invalid Email",
                    },
                  })}
                />
                <p className="err">{errors.email?.message}</p>
              </div>

              <div>
                <label> Password : </label>
                <input
                  type="password"
                  name="password"
                  {...register("password", {
                    required: "Password Required",
                    minLength: {
                      value: 10,
                      message: "Minimum 10 characters required",
                    },
                    pattern: {
                      value: /^(?=.*[!@#$%^&*])[A-Za-z0-9!@#$%^&*]+$/,
                      message:
                        "Password Not Valid (Use at least one Special Character)",
                    },
                  })}
                />
                <p className="err">{errors.password?.message}</p>
              </div>

              <div>
                <label> Confirm Password : </label>
                <input
                  type="password"
                  name="password"
                  {...register("confirmPassword", {
                    required: "Re-Type Password",
                    validate: (value) =>
                      value == confirmPass || "Password doesn't match",
                  })}
                />
                <p className="err">{errors.confirmPassword?.message}</p>
              </div>

              <div>
                <input type="submit" value="Register" />
              </div>
            </form>
          </fieldset>
        </div>
      )}
    </div>
  );
}
