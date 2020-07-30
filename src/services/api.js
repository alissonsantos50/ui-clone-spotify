import axios from "axios";

const api = axios.create({
  baseURL: "https://api.spotify.com/v1/",
  headers: {
    Authorization:
      "Bearer BQADzNv9OtJBKSsRN6n9Jjvabg9mXv20QA5PgbBgtTsRqmbfeFJqpb8SQghstDPBPRLhhvZsWFWQUqASQIClXAnlPS3uKdJ8eJQ6zBI3vHTtPS44HuMvVGs482nrScCt79WdE2nAZoUkTJvNYVIChFMfShzGTpPZ",
  },
});

export default api;
