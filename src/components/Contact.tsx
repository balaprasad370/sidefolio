"use client";
import React, { useState } from "react";

const defaultFormState = {
  name: {
    value: "",
    error: "",
  },
  email: {
    value: "",
    error: "",
  },
  message: {
    value: "",
    error: "",
  },
};

export const Contact = () => {
  const [formData, setFormData] = useState(defaultFormState);
  const [isLoading, setIsLoading] = useState(false);
  const [alert, setAlert] = useState({
    show: false,
    message: "",
    type: "" // success or error
  });

  const handleSubmit = async (e: any) => {
    e.preventDefault();
    setIsLoading(true);
    
    try {
      const obj = {
        name: formData.name.value,
        email: formData.email.value,
        message: formData.message.value,
      };

      const response = await fetch("/api/contact", {
        method: "POST",
        body: JSON.stringify(obj),
      });

      const data = await response.json();
      
      setAlert({
        show: true,
        message: data.message,
        type: response.ok ? "success" : "error"
      });

      if (response.ok) {
        setFormData(defaultFormState);
      }

    } catch (error) {
      setAlert({
        show: true,
        message: "Something went wrong. Please try again.",
        type: "error"
      });
    } finally {
      setIsLoading(false);
      setTimeout(() => {
        setAlert({ show: false, message: "", type: "" });
      }, 5000);
    }
  };

  return (
    <>
      {alert.show && (
        <div className={`mb-4 p-4 rounded-md ${
          alert.type === "success" 
            ? "bg-green-100 text-green-700 border border-green-200"
            : "bg-red-100 text-red-700 border border-red-200"
        }`}>
          {alert.message}
        </div>
      )}
      
      <form className="form" onSubmit={handleSubmit}>
        <div className="flex flex-col md:flex-row justify-between gap-5">
          <input
            type="text"
            placeholder="Your Name"
            className="bg-neutral-100 focus:outline-none focus:ring-2 focus:ring-neutral-200 px-2 py-2 rounded-md text-sm text-neutral-700 w-full"
            value={formData.name.value}
            onChange={(e) => {
              setFormData({
                ...formData,
                name: {
                  value: e.target.value,
                  error: "",
                },
              });
            }}
          />
          <input
            type="email"
            placeholder="Your email address"
            className="bg-neutral-100 focus:outline-none focus:ring-2 focus:ring-neutral-200 px-2 py-2 rounded-md text-sm text-neutral-700 w-full"
            value={formData.email.value}
            onChange={(e) => {
              setFormData({
                ...formData,
                email: {
                  value: e.target.value,
                  error: "",
                },
              });
            }}
          />
        </div>
        <div>
          <textarea
            placeholder="Your Message"
            rows={10}
            className="bg-neutral-100 focus:outline-none focus:ring-2 focus:ring-neutral-200 px-2 mt-4 py-2 rounded-md text-sm text-neutral-700 w-full"
            value={formData.message.value}
            onChange={(e) => {
              setFormData({
                ...formData,
                message: {
                  value: e.target.value,
                  error: "",
                },
              });
            }}
          />
        </div>
        <button
          className="w-full px-2 py-2 mt-4 bg-neutral-100 rounded-md font-bold text-neutral-500 disabled:opacity-50 flex items-center justify-center"
          type="submit"
          disabled={isLoading}
        >
          {isLoading ? (
            <>
              <svg className="animate-spin -ml-1 mr-3 h-5 w-5 text-neutral-500" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
              </svg>
              Sending...
            </>
          ) : (
            "Submit"
          )}
        </button>
      </form>
    </>
  );
};
