import React,{useContext} from 'react'
import {Authcontext} from "./Context";

const AllData = () => {
    return (
        useContext(Authcontext)
      )
}

export default AllData;