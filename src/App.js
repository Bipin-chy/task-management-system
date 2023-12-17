
import { useEffect, useState } from 'react';
import AppRouter from './utils/router';
import axios from 'axios';
import './App.css';



function App() {

  const [data, setData] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(
          "http://localhost:8888/task-management-system/server/api/connection.php"
        );
        setData(response.data);
      } catch (error) {
        console.error("Error fetching datassss:", error);
      }
    };

    fetchData();
  }, []);

  console.log({ data });

  return (
    <div className="App">
      <AppRouter />
    </div>
  );
}

export default App;
