"use client";
import helpers from "@/helpers/help";
import Link from "next/link";
import React, { useEffect, useState } from "react";

const Edit = ({ params }: any) => {
  const { id } = params;
  const [formData, setFormData] = useState({
    name: "",
    gender: "",
    email: "",
    age: "",
    dob: "",
    phone: "",
    street: "",
    city: "",
    state: "",
    country: "",
    postcode: "",
  });

  const handleChange = (e: any) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = async (e: any) => {
    e.preventDefault();

    if (!formData.name) return;
    if (!formData.gender) return;
    if (!formData.email) return;
    if (!formData.age) return;
    if (!formData.dob) return;
    if (!formData.phone) return;
    if (!formData.street) return;
    if (!formData.city) return;
    if (!formData.state) return;
    if (!formData.country) return;
    if (!formData.postcode) return;

    // Handle form submission logic here
    const response = await fetch("/api/edit", {
      method: "POST",
      body: JSON.stringify({ id: id, data: formData }),
    });
    console.log(formData);
  };

  useEffect(() => {
    const fetchEditData = async () => {
      try {
        const response = await fetch("/api/read", {
          method: "POST",
          body: JSON.stringify({ id: id }),
        });

        const { data } = await response.json();
        const {
          name,
          gender,
          email,
          age,
          dob,
          phone,
          street,
          city,
          state,
          country,
          postcode,
        } = data;
        setFormData({
          name: name,
          gender: gender,
          email: email,
          age: age,
          dob: helpers.extractDateFromTimestamp(dob),
          phone: phone,
          street: street,
          city: city,
          state: state,
          country: country,
          postcode: postcode,
        });
      } catch (error) {
        console.log(error);
      }
    };
    fetchEditData();
  }, []);
  return (
    <form
      onSubmit={handleSubmit}
      className="max-w-lg mx-auto p-4 bg-white shadow-md rounded"
    >
      <div>
        <Link
          href={"/"}
          className="px-5 py-1 border mb-2 rounded-lg bg-emerald-500 text-white "
        >
          {" "}
          <span>{"<"}</span> Back{" "}
        </Link>
      </div>
      <div className="mb-4">
        <label
          htmlFor="name"
          className="block text-sm font-medium text-gray-700"
        >
          Name
        </label>
        <input
          type="text"
          name="name"
          id="name"
          value={formData.name}
          onChange={handleChange}
          required
          className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-emerald-500 focus:border-emerald-500 sm:text-sm"
        />
      </div>

      <div className="mb-4">
        <label
          htmlFor="gender"
          className="block text-sm font-medium text-gray-700"
        >
          Gender
        </label>
        <input
          type="text"
          name="gender"
          id="gender"
          value={formData.gender}
          onChange={handleChange}
          required
          className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-emerald-500 focus:border-emerald-500 sm:text-sm"
        />
      </div>

      <div className="mb-4">
        <label
          htmlFor="email"
          className="block text-sm font-medium text-gray-700"
        >
          Email
        </label>
        <input
          type="email"
          name="email"
          id="email"
          value={formData.email}
          onChange={handleChange}
          required
          className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-emerald-500 focus:border-emerald-500 sm:text-sm"
        />
      </div>

      <div className="mb-4">
        <label
          htmlFor="age"
          className="block text-sm font-medium text-gray-700"
        >
          Age
        </label>
        <input
          type="number"
          name="age"
          id="age"
          value={formData.age}
          onChange={handleChange}
          required
          className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-emerald-500 focus:border-emerald-500 sm:text-sm"
        />
      </div>

      <div className="mb-4">
        <label
          htmlFor="dob"
          className="block text-sm font-medium text-gray-700"
        >
          Date of Birth
        </label>
        <input
          type="date"
          name="dob"
          id="dob"
          value={formData.dob}
          onChange={handleChange}
          required
          className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-emerald-500 focus:border-emerald-500 sm:text-sm"
        />
      </div>

      <div className="mb-4">
        <label
          htmlFor="phone"
          className="block text-sm font-medium text-gray-700"
        >
          Phone
        </label>
        <input
          type="text"
          name="phone"
          id="phone"
          value={formData.phone}
          onChange={handleChange}
          required
          className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-emerald-500 focus:border-emerald-500 sm:text-sm"
        />
      </div>

      <div className="mb-4">
        <label
          htmlFor="street"
          className="block text-sm font-medium text-gray-700"
        >
          Street
        </label>
        <input
          type="text"
          name="street"
          id="street"
          value={formData.street}
          onChange={handleChange}
          required
          className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-emerald-500 focus:border-emerald-500 sm:text-sm"
        />
      </div>

      <div className="mb-4">
        <label
          htmlFor="city"
          className="block text-sm font-medium text-gray-700"
        >
          City
        </label>
        <input
          type="text"
          name="city"
          id="city"
          value={formData.city}
          onChange={handleChange}
          required
          className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-emerald-500 focus:border-emerald-500 sm:text-sm"
        />
      </div>

      <div className="mb-4">
        <label
          htmlFor="state"
          className="block text-sm font-medium text-gray-700"
        >
          State
        </label>
        <input
          type="text"
          name="state"
          id="state"
          value={formData.state}
          onChange={handleChange}
          required
          className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-emerald-500 focus:border-emerald-500 sm:text-sm"
        />
      </div>

      <div className="mb-4">
        <label
          htmlFor="country"
          className="block text-sm font-medium text-gray-700"
        >
          Country
        </label>
        <input
          type="text"
          name="country"
          id="country"
          value={formData.country}
          onChange={handleChange}
          required
          className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-emerald-500 focus:border-emerald-500 sm:text-sm"
        />
      </div>

      <div className="mb-4">
        <label
          htmlFor="postcode"
          className="block text-sm font-medium text-gray-700"
        >
          Postcode
        </label>
        <input
          type="number"
          name="postcode"
          id="postcode"
          value={formData.postcode}
          onChange={handleChange}
          required
          className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-emerald-500 focus:border-emerald-500 sm:text-sm"
        />
      </div>

      <div className="text-right">
        <button
          type="submit"
          className="px-4 py-2 bg-emerald-500 text-white text-sm font-medium rounded-md shadow-sm hover:bg-emerald-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-emerald-500"
        >
          Submit
        </button>
      </div>
    </form>
  );
};

export default Edit;
