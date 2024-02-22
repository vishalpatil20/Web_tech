import { Card, Typography, List, ListItem } from "@material-tailwind/react";
import { useEffect, useState } from "react";
import axios from "axios";
import { FcDeleteRow, } from "react-icons/fc";

export default function DefaultSidebar() {
  const [data, setData] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get('http://localhost:3001/api/data'); // Update with your actual backend endpoint
        setData(response.data);
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };

    fetchData();
  }, []);

  const toggleSidebar = () => {
    const sidebar = document.querySelector(".side-bar");
    sidebar.classList.toggle("translate-x-[-100%]");
  };
  const deleteItem = async (id) => {
    const title = window.prompt('Type delete to delete the note?');
    if (title === 'delete') {
    try {
      await axios.delete(`http://localhost:3001/api/data/${id}`);
      fetchData();
    } catch (error) {
      console.error('Error deleting data:', error);
    }
  }else{
    const title = window.alert('Deletion failed');
  };
}

  return (
    <div className="fixed z-20">
      <div
        id="sidebarToggle"
        className="fixed md:hidden p-2 bg-gray-700 text-white cursor-pointer rounded-lg m-3 ml-[calc(5%+10px)] z-50"
        onClick={toggleSidebar}
      >
        <button
          id="hamburger-menu"
          className="w-10 h-10 p-2 focus:outline-none"
        >
          <div className="w-6 h-px bg-white mb-1"></div>
          <div className="w-6 h-px bg-white mb-1"></div>
          <div className="w-6 h-px bg-white"></div>
        </button>
      </div>
      <Card className="side-bar translate-x-[-100%] md:translate-x-[0%] md:block h-[calc(70vh-48px)] rounded-4px w-[20rem] p-4 shadow-xl bg-zinc-400 shadow-blue-gray-900/5">
        <div className="ml-[calc(5vw+56px)] mb-[10px] p-2 md:ml-[0]">
   <Typography variant="h5" color="blue-gray">
            List of Notes
          </Typography>

        </div>
        <List>
          {data.map(item => (
            <ListItem key={item.id}>
              <Typography variant="h6">{item.title}</Typography>
              <FcDeleteRow
                style={{ fontSize: 35 }}
                className="mx-3"
                onClick={() => deleteItem(item.id)}

              />
            </ListItem>
            
          ))}
          
        </List>
      </Card>
    </div>
  );
}
