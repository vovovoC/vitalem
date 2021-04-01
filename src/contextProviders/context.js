import React, {useContext, useState} from 'react'
import { useHistory } from 'react-router-dom'

const LinkContext = React.createContext()
const LinkUpdateContext = React.createContext()

export function useLinkContext(){
    return useContext(LinkContext);
}

export function useLinkUpdateContext(){
    return useContext(LinkUpdateContext)
} 

export function RouterProvider({children}){
    const [ count , setCount] = useState(0)

    const redirectTo = (isIncrease, history, page) => {
        setCount(count => page)
        
        if(count === 14) history.push('./profile')
        else if(count === 1) history.goBack()

        isIncrease ? setCount(prevCount=>prevCount+1) : setCount(prevCount=>prevCount-1)

        history.push(`./${count}`)
    }

    return (
        <LinkContext.Provider value={count}>
            <LinkUpdateContext.Provider value={redirectTo}>
                {children}
            </LinkUpdateContext.Provider>
        </LinkContext.Provider>
    )

}