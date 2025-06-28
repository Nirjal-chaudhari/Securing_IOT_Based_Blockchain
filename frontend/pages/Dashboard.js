import React, { useEffect, useState } from 'react';
import { database } from '../firebaseConfig';  // your firebase config file
import { ref, onValue } from 'firebase/database';
import './Dashboard.css';  // custom card styling

const Dashboard = () => {
  const [sensorData, setSensorData] = useState([]);

  // Soft pastel color palette
  const pastelColors = [
    '#FFB3BA', // light pink
    '#FFDFBA', // peach
    '#FFFFBA', // light yellow
    '#BAFFC9', // mint
    '#BAE1FF', // sky blue
    '#EAD1DC', // lavender
    '#D5AAFF', // light purple
    '#C7F0DB', // pale green
    '#FFD6A5', // light apricot
    '#FFFACD'  // lemon chiffon
  ];

  // Function to pick a random pastel color
  const getRandomColor = () => {
    return pastelColors[Math.floor(Math.random() * pastelColors.length)];
  };

  useEffect(() => {
    const dataRef = ref(database, 'sensorData/');
    onValue(dataRef, (snapshot) => {
      const data = snapshot.val();
      if (data) {
        const formattedData = Object.entries(data).map(([key, value]) => ({
          id: key,
          ...value,
          color: getRandomColor()
        }));
        setSensorData(formattedData);
      }
    });
  }, []);

  return (
    <div className="dashboard-container">
      <h1>IoT Data Dashboard 📡</h1>
      <div className="card-grid">
        {sensorData.map((item) => (
          <div key={item.id} className="data-card" style={{ backgroundColor: item.color }}>
            <h3>Entry: {item.id}</h3>
            <p>🌡️ Temperature: {item.temperature}°C</p>
            <p>💧 Humidity: {item.humidity}%</p>
            <p>🕒 Timestamp: {item.timestamp}</p>
            <p>📦 IPFS CID:</p>
            <div className="cid-container">
              <p className="cid-text">{item.cid}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Dashboard;
