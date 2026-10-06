// import Navbar from "./components/Navbar";
// import Hero from "./components/Hero";
// import Footer from "./components/Footer.jsx";
// import Count from "./components/Count";
// import Password from "./components/Password";
// import Todo from "./components/Todo";
// function App() {
//   return (
//     <div className="min-h-screen flex flex-col">
//       <Navbar />
//       <Count />
//       <Todo />
//       <Password />
//       <main className="flex-1">
//         <Hero />

//         <section className="py-20 px-6 text-center">
//           <h2 className="text-3xl font-bold">
//             Welcome to My Website
//           </h2>
//         </section>
//       </main>
//       <Footer />
//     </div>
//   );
// }
// export default App;

// import { useState } from "react";
// import User from "./components/User";
// function App() {
//   const [formData, setFormData] = useState({
//     name: "",
//     email: "",
//     password: "",
//     input:"",
//   });
//   const [users, setUsers] = useState(() => {
//     const savedUsers = localStorage.getItem("users");
//     return savedUsers ? JSON.parse(savedUsers) : [];
//   });
//   const handleChange = (e) => {
//     const { name, value } = e.target;
//     setFormData({
//       ...formData,
//       [name]: value,
//     });
//   };
//   const handleSubmit = (e) => {
//     e.preventDefault();

//     if (!formData.name || !formData.email || !formData.password) {
//       alert("Please fill all fields");
//       return;
//     }
//     const newUser = {
//       id: Date.now(),
//       name: formData.name,
//       email: formData.email,
//       password: formData.password,
//     };
//     const updatedUsers = [...users, newUser];
//     setUsers(updatedUsers);
//     localStorage.setItem("users", JSON.stringify(updatedUsers));
//     setFormData({
//       name: "",
//       email: "",
//       password: "",
//     });
//     alert("User added successfully!");
//   };
//   const handleDelete = (id) => {
//     const updatedUsers = users.filter((user) => user.id !== id);
//     setUsers(updatedUsers);
//     localStorage.setItem("users", JSON.stringify(updatedUsers));
//   };
//   return (
//     <div style={{ padding: "30px" }}>
//       <h1>React Form + Local Storage</h1>
//       <form onSubmit={handleSubmit}>
//         <div>
//           <label>Name</label>
//           <br />
//           <input
//             type="text"
//             name="name"
//             value={formData.name}
//             onChange={handleChange}
//             placeholder="Enter your name"
//           />
//         </div>
//         <br />
//         <div>
//           <label>Email</label>
//           <br />
//           <input
//             type="email"
//             name="email"
//             value={formData.email}
//             onChange={handleChange}
//             placeholder="Enter your email"
//           />
//         </div>
//         <br />
//         <div>
//           <label>Password</label>
//           <br />
//           <input
//             type="password"
//             name="password"
//             value={formData.password}
//             onChange={handleChange}
//             placeholder="Enter your password"
//           />
//         </div>
//         <br />
//         <button type="submit">Submit</button>
//       </form>
//       <hr />
//       <h2>Saved Users</h2>
//       {users.length === 0 ? (
//         <p>No users found.</p>
//       ) : (
//         users.map((user) => (
//           <div
//             key={user.id}
//             style={{
//               border: "1px solid black",
//               padding: "15px",
//               marginBottom: "10px",
//             }}
//           >
//             <h3>{user.name}</h3>
//             <p>{user.email}</p>
//             <p>{user.password}</p>
//             <button onClick={() => handleDelete(user.id)}>Delete</button>
//           </div>
//         ))
//       )}

//     </div>
//   );
// }
// export default App;

import Props from "./components/Props.jsx";
const App = () => {
  return (
    <div>
      <Props />
    </div>
  )
}

export default App