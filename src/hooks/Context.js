import React from 'react'
import Allstateandfun from './Allstateandfun';
export const Authcontext = React.createContext();
const Authprovider = ({children}) => {
    let alldata = Allstateandfun();
    return (
          <Authcontext.Provider value={alldata}>
             {children}
          </Authcontext.Provider>
      )

}

export default Authprovider;