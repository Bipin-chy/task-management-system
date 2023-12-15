import React from "react";
import { useAuth } from "../../utils/AuthContext";

const Dashboard = () => {
  const { authenticated } = useAuth();

  console.log("This is dashboard!");
  return <div>Dashboard</div>;
};

export default Dashboard;
