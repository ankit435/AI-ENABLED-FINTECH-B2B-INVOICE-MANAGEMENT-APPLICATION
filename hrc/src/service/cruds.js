import axios from "axios";

var urls = "http://localhost:8080/invoice/";

export const fetchinvoice = async (page, rowsPerPage,value) => {
 
  //console.log(page * rowsPerPage ,(page+1) * rowsPerPage)
  
  let data=value!=null?value.toString():null;
  console.log(data)

  let start = page * rowsPerPage;
  let limit = rowsPerPage;

  let res = await axios
    .get(urls + "getInvoices", {
      params: {
        start: start,
        limit: limit,
        value:data,
        
      },
    })
    .then((response) => response.data)
    .catch((e) => null);
  return res;
};

export const Deleteinvoice = async (value) => {
  const data = value.toString();

  let res = await axios
    .get(urls + "deleteInvoices", { params: { data: data } })
    .then((response) => response.data)
    .catch((e) => null);
  return res;

};

export const addinvoice = async (value) => {
  console.log(JSON.stringify(value));
  return await axios
    .post(urls + "addInvoice", JSON.stringify(value))
    .then((response) => response.data)
    .catch((e) => null);
};

export const putsinvoice = async (value) => {
  console.log(JSON.stringify(value));

  return await axios
    .post(urls + "editInvoice", JSON.stringify(value))
    .then((response) => response.data)
    .catch((e) => null);
};

export const searchinvoice = async (value) => {
  console.log(JSON.stringify(value));

  return await axios
    .post(urls + "SearchInvoice", JSON.stringify(value))
    .then((response) => response.data).then(d=>{
      console.log('d',d);
      return d;
    })
    .catch((e) => null);

    
};
