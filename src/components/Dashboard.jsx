import React from 'react';

const Dashboard = ({ history }) => {
  const handleCalculateArea = () => {
    history.push('/calculate-area');
  };

  return (
    <div>
      <h2>Dashboard</h2>
      <button onClick={handleCalculateArea}>Calculate Area</button>
    </div>
  );
};

export default Dashboard;