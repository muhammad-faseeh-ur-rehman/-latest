import { useState } from "react";
const FormHandling = () => {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    username: "",
    email: "",
    password: "",
    confirmPassword: "",
    phone: "",
    age: "",
    gender: "",
    city: "",
    country: "",
    address: "",
  });

  const [message, setMessage] = useState("");
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    if (formData.password !== formData.confirmPassword) {
      setMessage("Passwords do not match!");
      return;
    }
    const existingUsers = JSON.parse(localStorage.getItem("users")) || [];
    const newUser = {
      id: Date.now(),
      ...formData,
    };
    existingUsers.push(newUser);
    localStorage.setItem("users", JSON.stringify(existingUsers));
    setMessage("Data saved successfully!");
    setFormData({
      firstName: "",
      lastName: "",
      username: "",
      email: "",
      password: "",
      confirmPassword: "",
      phone: "",
      age: "",
      gender: "",
      city: "",
      country: "",
      address: "",
    });
  };
  return (
    <div className="min-h-screen bg-gray-100 flex justify-center p-6">
      <div className="bg-white w-full max-w-2xl p-8 rounded-xl shadow">
        <h1 className="text-3xl font-bold text-center mb-2">
          Registration Form
        </h1>
        <p className="text-gray-500 text-center mb-6">Fill all the fields</p>
        {message && (
          <div className="bg-green-100 text-green-700 p-3 rounded mb-5">
            {message}
          </div>
        )}
        <form onSubmit={handleSubmit}>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
            <input
              type="text"
              name="firstName"
              placeholder="First Name"
              value={formData.firstName}
              onChange={handleChange}
              className="border p-3 rounded-lg"
              required
            />
            <input
              type="text"
              name="lastName"
              placeholder="Last Name"
              value={formData.lastName}
              onChange={handleChange}
              className="border p-3 rounded-lg"
              required
            />
          </div>
          <input
            type="text"
            name="username"
            placeholder="Username"
            value={formData.username}
            onChange={handleChange}
            className="w-full border p-3 rounded-lg mb-4"
            required
          />
          <input
            type="email"
            name="email"
            placeholder="Email"
            value={formData.email}
            onChange={handleChange}
            className="w-full border p-3 rounded-lg mb-4"
            required
          />
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
            <input
              type="password"
              name="password"
              placeholder="Password"
              value={formData.password}
              onChange={handleChange}
              className="border p-3 rounded-lg"
              required
            />
            <input
              type="password"
              name="confirmPassword"
              placeholder="Confirm Password"
              value={formData.confirmPassword}
              onChange={handleChange}
              className="border p-3 rounded-lg"
              required
            />
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
            <input
              type="tel"
              name="phone"
              placeholder="Phone"
              value={formData.phone}
              onChange={handleChange}
              className="border p-3 rounded-lg"
              required
            />
            <input
              type="number"
              name="age"
              placeholder="Age"
              value={formData.age}
              onChange={handleChange}
              className="border p-3 rounded-lg"
              required
            />
          </div>
          <select
            name="gender"
            value={formData.gender}
            onChange={handleChange}
            className="w-full border p-3 rounded-lg mb-4"
            required
          >
            <option value="">Select Gender</option>
            <option value="Male">Male</option>
            <option value="Female">Female</option>
            <option value="Other">Other</option>
          </select>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
            <input
              type="text"
              name="city"
              placeholder="City"
              value={formData.city}
              onChange={handleChange}
              className="border p-3 rounded-lg"
              required
            />
            <input
              type="text"
              name="country"
              placeholder="Country"
              value={formData.country}
              onChange={handleChange}
              className="border p-3 rounded-lg"
              required
            />
          </div>
          <textarea
            name="address"
            placeholder="Address"
            value={formData.address}
            onChange={handleChange}
            rows="4"
            className="w-full border p-3 rounded-lg mb-6"
            required
          />
          <button
            type="submit"
            className="w-full bg-blue-600 text-white p-3 rounded-lg hover:bg-blue-700"
          >
            Save Data
          </button>
        </form>
      </div>
    </div>
  );
};

export default FormHandling;
