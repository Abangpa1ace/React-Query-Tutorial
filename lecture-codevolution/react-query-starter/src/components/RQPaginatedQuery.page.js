import React from "react";
import { useQuery } from "react-query";
import axios from "axios";

const fetchColors = () => {
  return axios.get("http://localhost:4000/colors");
};

const RQPaginatedQueryPage = () => {
  return <div>RQPaginatedQuery.page</div>;
};

export default RQPaginatedQueryPage;
