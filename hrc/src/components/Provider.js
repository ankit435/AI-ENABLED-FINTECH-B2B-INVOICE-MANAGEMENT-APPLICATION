import { createContext, useContext, useState } from "react";

const PaginationContext = createContext({});


export function PaginationProvider({ children }) {
  const [page, setPage] = useState(0);
  const [rowCount, setRowCount] = useState(10);
  const [todeleteInv, settodeleteInv] = useState([]);
  const [responseData, setResponseData] =useState([]);
  const [search, setsearch]=useState("")

  return (
    <PaginationContext.Provider
      value={{ page, setPage, rowCount, setRowCount,todeleteInv,settodeleteInv,responseData ,setResponseData,search,setsearch}}
    >
      {children}
    </PaginationContext.Provider>
  );
}

export function usePagination() {
  return useContext(PaginationContext);
}


