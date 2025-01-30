// import React from "react";
// import { Link } from "react-router-dom";
// // import "./Navbar.css";

// function Navbar() {
//   return (
//     <nav style={styles.nav}>
//       {/* Logo Section */}
//       <div style={styles.logoContainer}>
//         <img
//           src="/logo.png" // Replace with the path to your logo
//           alt="Restaurant Logo"
//           style={styles.logo}
//         />
//         <h1 style={styles.title}>Restaurant.com</h1>
//       </div>
      
//       {/* Navigation Links */}
//       <ul style={styles.navLinks}>
//         <li style={styles.navItem}><Link to="/" style={styles.link}>Home</Link></li>
//         <li style={styles.navItem}><Link to="/dashboard" style={styles.link}>Dashboard</Link></li>
//         <li style={styles.navItem}><Link to="/login" style={styles.link}>Login</Link></li>
//         <li style={styles.navItem}><Link to="/register" style={styles.link}>Register</Link></li>
//         <li style={styles.navItem}><Link to="/cart" style={styles.link}>Cart</Link></li>
//       </ul>
//     </nav>
//   );
// }

// // Inline Styles (Replace with CSS if needed)
// const styles = {
//   nav: {
//     display: "flex",
//     justifyContent: "space-between",
//     alignItems: "center",
//     padding: "10px 20px",
//     backgroundColor: "#ff6347", // Tomato color
//     color: "#fff",
//   },
//   logoContainer: {
//     display: "flex",
//     alignItems: "center",
//   },
//   logo: {
//     width: "50px",
//     height: "50px",
//     marginRight: "10px",
//   },
//   title: {
//     fontSize: "1.5rem",
//     fontWeight: "bold",
//   },
//   navLinks: {
//     display: "flex",
//     listStyle: "none",
//     margin: 0,
//     padding: 0,
//   },
//   navItem: {
//     margin: "0 10px",
//   },
//   link: {
//     color: "#fff",
//     textDecoration: "none",
//     fontSize: "1rem",
//     fontWeight: "500",
//   },
// };

// export default Navbar;

import React from "react";
import { Link } from "react-router-dom";
import Cookies from "js-cookie";

function Navbar() {
  // Get user role from cookies
  const role = Cookies.get("role"); // "admin" or "customer"
  console.log("User Role:", role);

  // Handle logout function
  const handleLogout = () => {
    Cookies.remove("role"); // Remove role cookie
    Cookies.remove("userId"); // Remove role cookie
    window.location.href = "/login"; // Redirect to login page
  };

  return (
    <nav style={styles.nav}>
      {/* Logo Section */}
      <div style={styles.logoContainer}>
        <img
          src="/logo.png" // Replace with the path to your logo
          alt="Restaurant Logo"
          style={styles.logo}
        />
        <h1 style={styles.title}>Restaurant.com</h1>
      </div>
      
      {/* Navigation Links */}
      <ul style={styles.navLinks}>
        <li style={styles.navItem}><Link to="/" style={styles.link}>Home</Link></li>

        {/* Customer Links */}
        {role === "customer" && (
          <>
            <li style={styles.navItem}><Link to="/customer/dashboard" style={styles.link}>Dashboard</Link></li>
            <li style={styles.navItem}><Link to="/cart" style={styles.link}>Cart</Link></li>
            <li style={styles.navItem}><button onClick={handleLogout} style={styles.logoutBtn}>Logout</button></li>
          </>
        )}

        {/* Admin Links */}
        {role === "admin" && (
          <>
            <li style={styles.navItem}><Link to="/admin/dashboard" style={styles.link}>Admin Dashboard</Link></li>
            <li style={styles.navItem}><button onClick={handleLogout} style={styles.logoutBtn}>Logout</button></li>
          </>
        )}

        {/* If No User is Logged In */}
        {!role && (
          <>
            <li style={styles.navItem}><Link to="/login" style={styles.link}>Login</Link></li>
            <li style={styles.navItem}><Link to="/register" style={styles.link}>Register</Link></li>
          </>
        )}
      </ul>
    </nav>
  );
}

// Inline Styles
const styles = {
  nav: {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    padding: "10px 20px",
    backgroundColor: "#ff6347", // Tomato color
    color: "#fff",
  },
  logoContainer: {
    display: "flex",
    alignItems: "center",
  },
  logo: {
    width: "50px",
    height: "50px",
    marginRight: "10px",
  },
  title: {
    fontSize: "1.5rem",
    fontWeight: "bold",
  },
  navLinks: {
    display: "flex",
    listStyle: "none",
    margin: 0,
    padding: 0,
  },
  navItem: {
    margin: "0 10px",
  },
  link: {
    color: "#fff",
    textDecoration: "none",
    fontSize: "1rem",
    fontWeight: "500",
  },
  logoutBtn: {
    backgroundColor: "red",
    color: "white",
    border: "none",
    padding: "5px 10px",
    cursor: "pointer",
    fontSize: "1rem",
    fontWeight: "500",
  },
};

export default Navbar;
