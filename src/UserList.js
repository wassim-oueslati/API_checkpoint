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
            <ul>
                {listOfUSer.map((list)=>(
                    <li key={list.id} >{list.name}</li>
                ))}
            </ul>
             
            
        </div>
    )
}

export default UserList
