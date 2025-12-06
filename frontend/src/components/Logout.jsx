import axios from "axios";

axios.defaults.withCredentials = true;

export default function LogoutButton() {
  const handleLogout = async () => {
    try {
      await axios.post(
        "http://localhost:5000/api/user/logout",
        {},
        { withCredentials: true }
      );
      window.location.href = "/"; // redirect to login page
      
    } catch (error) {
      console.log("Logout error:", error.response?.data);
    }
  };

  return (
    <button onClick={handleLogout} className="logout-button text-white bg-red-600 px-4 py-2 rounded">
      Logout
    </button>
  );
}
