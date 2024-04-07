"use client";

import { useForm } from "react-hook-form";
import { useState } from "react";
import { motion } from "framer-motion";
import sanityClient from "@/services/sanityClient";
import { IFormFeedback } from "@/interfaces/formFeedback.interface";

type AlertState = {
  message: string;
  type: string;
  open: boolean;
};

const ContactSection = () => {
  const {
    register,
    formState: { errors },
    handleSubmit,
    setValue,
    getValues
  } = useForm<IFormFeedback>();

  const [loading, setLoading] = useState<boolean>(false);
  const [alert, setAlert] = useState<AlertState>({
    message: "",
    open: false,
    type: "",
  });

  const variant = {
    visible: {
      opacity: 1,
      transition: { duration: 2.1 },
      y: 0,
    },
    hidden: {
      opacity: 0,
      y: -120,
    },
  };


  const validateSpaceStr = (str:string,field?:string)=>{
     if(str.trim().length === 0){
        return `${field} field must be filled`;
     }

     return false;
  }

  const submitHandler = async (data: any) => {
    setLoading(true);

    const sanityDataDoc = {
      _type: "feedback",
      email: data.email,
      name: data.name,
      feedback: data.feedback,
    };

    try {
      const createData = await sanityClient.create(sanityDataDoc, {
        headers: {
          Authorization: `Bearer ${process.env.NEXT_PUBLIC_SANITY_TOKEN}`,
        },
      });

      if (createData) {
        setAlert({
          message: "feedback has been created thankyou!",
          open: true,
          type: "success",
        });

        setLoading(false);

        setValue("name", "");
        setValue("email", "");
        setValue("feedback", "");
      }
    } catch (err: any) {
      setAlert({
        open: true,
        type: "error",
        message: "Failed to send feedback",
      });

      setLoading(false);
    }

    setTimeout(() => {
      setAlert({ open: false, message: "", type: "" });
    }, 3000);
  };

  return (
    <motion.div
      variants={variant}
      initial="hidden"
      whileInView="visible"
      className="w-[600px] sm:w-full sm:px-5 mx-auto"
    >
      <div className="text-center">
        <h5 className="text-blue-500 text-sm font-semibold">Feedback</h5>
        <h2 className="text-2xl font-bold mt-1 text-gray-800 uppercase">
          Your Feedback
        </h2>
      </div>


      {alert.open && (
        <div
          className={`w-full mt-5 py-2 px-2 flex justify-between items-center rounded-md ${
            alert.type === "error"
              ? "bg-red-100 text-red-500"
              : "bg-green-100 text-green-500"
          }`}
        >
          <h5 className="font-semibold text-sm">{alert.message}</h5>
          <button
            onClick={() => setAlert({ ...alert, open: false })}
            className={`text-md font-bold ${
              alert.type === "error" ? "text-red-500" : "text-green-500"
            }`}
          >
            x
          </button>
        </div>
      )}

      <form
        onSubmit={handleSubmit(submitHandler)}
        className="mt-10 flex flex-col gap-y-2"
      >
        <div className="w-full">
          <input
            {
              ...register(
                "email", 
                { 
                  required: 'Email field is required',
                  validate:(value)=> validateSpaceStr(value,"Email"),
                  pattern: {
                    value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i,
                    message: "Invalid email address"
                  }
                }
              )
            }
            type="text"
            name="email"
            placeholder="Email Address"
            className={`w-full border outline-none border-gray-200 py-2 px-2 rounded-md text-sm ${
              errors.email && "border border-red-500"
            }`}
          />
          {
            errors.email && 
            <p className="text-[13px] text-red-500 font-medium mt-1">{errors.email.message}</p>
          }
        </div>
        <div className="w-full">
          <input
                {
                  ...register(
                    "name", 
                    { 
                      required: 'Name field is required',
                      validate:(value)=> validateSpaceStr(value,"Name"), 
                    }
                  )
                }
              type="text"
              name="name"
              placeholder="Username"
              className={`w-full border outline-none border-gray-200 py-2 px-2 rounded-md text-sm ${
                errors.name && "border border-red-500"
              }`}
            />
          {
            errors.name && 
            <p className="text-[13px] text-red-500 font-medium mt-1">{errors.name.message}</p>
          }
        </div>
        <div className="w-full">
          <textarea
             {
              ...register(
                "feedback", 
                {
                   required: 'Feedback field is required',
                   validate: (value)=> validateSpaceStr(value,'Feedback')
                }
              )
            }
            name="feedback"
            placeholder="Your Feedback"
            className={`w-full border outline-none resize-none h-[200px] border-gray-200 py-2 px-2 rounded-md text-sm ${
              errors.feedback && "border border-red-500"
            }`}
          ></textarea>
          {
            errors.feedback && 
            <p className="text-[13px] text-red-500 font-medium mt-1">{errors.feedback?.message}</p>
          }
        </div>
        <button disabled={loading} className="mt-4 text-white text-[13px] py-2 font-semibold bg-blue-500 rounded-full">
          {loading ? "Wait..." : "Submit"}
        </button>
      </form>
    </motion.div>
  );
};

export default ContactSection;
