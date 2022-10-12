import React, {useEffect,useState} from 'react'
import { createContext } from 'react'



let reactor=createContext()


const Kevin = ({children}) => {

  const [item, setitem] = useState()

  let [taken,settaken]=useState([])


    useEffect(() => {
        let api='https://fakestoreapi.com/products'
        let getapi=async(a)=>{
            let data = await fetch(a)
            let response = await data.json()
            setitem(response)
           console.log(response)
        }
        getapi(api)
    }, [])
    

  return (
    <>
    <reactor.Provider value={{item , taken, settaken}} >
        {children}
    </reactor.Provider>
    </>
  )
}

export default Kevin
export {reactor}