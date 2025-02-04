import React, { createContext, useState } from "react";
export const searchContex = createContext();
const SearchcontextProviderfunction = ({ children }) => {
  const [searchvalue, setsearch] = useState(null);
 
  const searchfun = (val) => {
    setsearch(val);
  };

  return (
    <div>
      <searchContex.Provider
        value={{
          searchfun,
          searchvalue,
        }}
      >
        {children}
      </searchContex.Provider>
    </div>
  );
};

export default SearchcontextProviderfunction;
