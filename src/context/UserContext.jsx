import { createContext, useState } from "react";



//* les envloppes li khassna n livriw l nass
export const UserContext = createContext()

//* mail man li ghaywsl les envloppes 3la ga3 les page and ga3 l components
export const UserProvider = ({children}) => {

    const [user, setUser] = useState({name:'avatar', email:'avatar@email.com', city: 'casa', lightMode:'light'})
    const statistics = 1000
    const all = {statistics, user, setUser}
    return (
        <UserContext.Provider value={all}>
            {children}
        </UserContext.Provider>
    )
}


