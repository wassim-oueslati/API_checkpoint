import React, {useState,useEffect} from 'react';
import axios from 'axios';

function UserList() {
    let [listOfUSer, setlistOfUSer] = useState([]);
    useEffect(() => {
        axios
          .get("https://jsonplaceholder.typicode.com/users")
          .then(response => setlistOfUSer(response.data));
      }, []);
    return (
        <div>
            <table>
                <tr>
                    <th className="name">Name</th>
                    <th className="name">User Name</th>
                </tr>
                {listOfUSer.map((list)=>(
                    <tr key={list.id}>
                       <th>{list.name}</th>
                       <th>{list.username}</th>
                    </tr>
                    
                ))}

            </table>
             
            
        </div>
    )
}

export default UserList
