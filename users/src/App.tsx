import React, { useState, useEffect } from "react"
import { IUser } from "./IUser"
import { getDataPromise } from "./getDataPromise"
import { Card } from "./Card"
import "./App.css"

const App: React.FC = () => {
    const limit = 2
    const [skip, setSkip] = useState(0)
    const [users, setUsers] = useState<IUser[]>([])
    const onClick = () => {
        getDataPromise((receivedUsers: IUser[]) => {
            //setSkip(skip + limit);
            setSkip((skip) => skip + limit)
            //setUsers([...users, ...receivedUsers]);
            setUsers((users) => [...users, ...receivedUsers])
        })(skip, limit)
    }
    // eslint-disable-next-line
    useEffect(onClick, [])

    return (
        <div className="App">
            {users.map((user: IUser, key: number) => (
                <Card click={onClick} user={user} key={key.toString()} />
            ))}
        </div>
    )
}

export default App



/*
const App: React.FC = () => {
    getDataPromise((users: IUser[]) => console.log('users', users))(0, 1)
    return (
        <div className = 'App'>please open console window!</div>
    )
}

export default App;
*/