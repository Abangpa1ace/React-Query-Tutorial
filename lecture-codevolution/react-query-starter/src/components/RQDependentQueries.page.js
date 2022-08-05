import React from "react";
import { useQuery } from "react-query";
import axios from "axios";

const fetchUser = (email) => axios.get(`http://localhost:4000/users/${email}`);

const fetchCourse = (channelId) =>
  axios.get(`http://localhost:4000/channels/${channelId}`);

const RQDependentQueriesPage = ({ email }) => {
  const { data: user } = useQuery(["user", email], () => fetchUser(email));
  const channelId = user?.data.channelId;
  const { data: courses } = useQuery(
    ["courses", channelId],
    () => fetchCourse(channelId),
    {
      enabled: !!channelId,
    }
  );

  console.log(courses);
  return <div>RQDependentQueries.page</div>;
};

export default RQDependentQueriesPage;
