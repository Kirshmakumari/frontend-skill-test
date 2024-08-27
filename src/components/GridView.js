import React, { useEffect, useState } from "react";
import axios from "axios";
import { Grid, Card, CardContent, Typography } from "@mui/material";
import "../styles/GridView.css";

const GridView = ({ onSelect }) => {
  const [data, setData] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      const response = await axios.get(
        "https://jsonplaceholder.typicode.com/users"
      );
      setData(response.data);
    };
    fetchData();
  }, []);

  return (
    <Grid container spacing={2} className="grid-view">
      {data.map((user) => (
        <Grid item xs={12} sm={6} md={4} lg={3} key={user.id}>
          <Card onClick={() => onSelect(user)} className="grid-card">
            <CardContent>
              <Typography variant="h6">{user.name}</Typography>
              <Typography variant="body2">{user.email}</Typography>
            </CardContent>
          </Card>
        </Grid>
      ))}
    </Grid>
  );
};

export default GridView;
