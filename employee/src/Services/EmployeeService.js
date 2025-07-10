import axios from "axios";


const REST_API_BASE_URL=`http://localhost:8080/api/employees`;

export const listEmployees=()=> axios.get(REST_API_BASE_URL);

export const createEmployee=(emp)=>axios.post(REST_API_BASE_URL,emp);

export const getEmployee=(empid)=>axios.get(REST_API_BASE_URL+'/'+empid);

export const updateEmployee=(empid,employee)=>axios.put(REST_API_BASE_URL+'/'+empid,employee);

export const deleteEmployee=(empid)=>axios.delete(REST_API_BASE_URL+'/'+empid);