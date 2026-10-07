import { useNavigate } from "react-router-dom";

const Dashboard = () => {
  const navigate = useNavigate();

  const user = JSON.parse(localStorage.getItem("user"));

  const handleLogout = () => {
    localStorage.removeItem("user");
    navigate("/login");
  };

  return (
    <div className="min-h-screen bg-gray-100">

      {/* Navbar */}
      <nav className="bg-white shadow px-6 py-4 flex justify-between items-center">

        <h1 className="text-2xl font-bold">
          Dashboard
        </h1>

        <div className="flex items-center gap-4">

          <span>
            Hello, {user?.firstName}
          </span>

          <button
            onClick={handleLogout}
            className="bg-red-500 text-white px-4 py-2 rounded-lg hover:bg-red-600"
          >
            Logout
          </button>

        </div>

      </nav>

      {/* Content */}
      <main className="p-6">

        <h2 className="text-3xl font-bold mb-2">
          Welcome {user?.firstName} 👋
        </h2>

        <p className="text-gray-500 mb-8">
          You are successfully logged in.
        </p>

        {/* Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">

          <div className="bg-white p-6 rounded-xl shadow">
            <h3 className="text-gray-500">
              Users
            </h3>

            <p className="text-3xl font-bold mt-2">
              120
            </p>
          </div>

          <div className="bg-white p-6 rounded-xl shadow">
            <h3 className="text-gray-500">
              Products
            </h3>

            <p className="text-3xl font-bold mt-2">
              85
            </p>
          </div>

          <div className="bg-white p-6 rounded-xl shadow">
            <h3 className="text-gray-500">
              Orders
            </h3>

            <p className="text-3xl font-bold mt-2">
              240
            </p>
          </div>

        </div>

      </main>

    </div>
  );
};

export default Dashboard;