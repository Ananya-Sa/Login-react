import { createFileRoute } from "@tanstack/react-router";
import { useState } from "react";
import React from "react";
import { FaInstagram } from "react-icons/fa";
import { FaGoogle } from "react-icons/fa6";
import { FaFacebookF } from "react-icons/fa";

export const Route = createFileRoute("/sign-up")({
  component: () => {
    const [FullName, setFullName] = useState("");
    const [Email, setEmail] = useState("");
    const [Newapassword, setNewpassword] = useState("");

    return (
      <form className="flex h-full justify-center items-center">
        <div className="border-s-8 border-e-8 border-gray-200 p-4 shadow-xl bg-opacity-10">
          <h1 className="font-extrabold font-normal text-slate-700 text-4xl">
            Create An Account
          </h1>
          <br />
          <p className="text-sm text-slate-600">
            Create an account to enjoy all the services
          </p>
          <p className="text-sm text-slate-600 font-serif">
            without any ads for free!
          </p>
          <br />
          <input
            className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
            type="text"
            placeholder="Full Name"
            onChange={(e) => setFullName(e.target.value)}
          />
          <br />
          <input
            className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
            type="email"
            placeholder="Email"
            onChange={(e) => setEmail(e.target.value)}
          />
          <br />
          <input
            className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
            type="password"
            placeholder="Create a Password"
            onChange={(e) => setNewpassword(e.target.value)}
          />
          <br />
          <button
            type="button"
            className="text-white bg-blue-700 rounded-full text-sm px-5 py-2.5 text-center"
          >
            Sign Up
          </button>
          <br /> <br />
          <div className="flex items-center my-4">
            <div className="flex-grow border-t border-gray-300"></div>
            <span className="flex-shrink mx-2 text-sm text-slate-600">
              or use one of these options
            </span>
            <div className="flex-grow border-t border-gray-300"></div>
          </div>
          <div className="flex justify-center items-center space-x-4">
            <FaInstagram className="text-2xl" />
            <FaGoogle className="text-2xl" />
            <FaFacebookF className="text-2xl" />
          </div>
        </div>
      </form>
    );
  },
});
