import React from "react";
import { Grid, Card, CardContent, Typography, IconButton } from "@mui/material";
import EditIcon from "@mui/icons-material/Edit";
import FlagIcon from "@mui/icons-material/Flag";
import DeleteIcon from "@mui/icons-material/Delete";
import "../styles/TileView.css";

const TileView = ({ data, onClose }) => (
  <div className="tile-view">
    <IconButton className="close-btn" onClick={onClose}>
      <DeleteIcon />
    </IconButton>
    <Grid container spacing={2}>
      {data.map((user) => (
        <Grid item xs={12} sm={6} md={4} lg={3} key={user.id}>
          <Card className="tile-card">
            <CardContent>
              <Typography variant="h6">{user.name}</Typography>
              <Typography variant="body2">{user.email}</Typography>
              <div className="actions">
                <IconButton color="primary">
                  <EditIcon />
                </IconButton>
                <IconButton color="warning">
                  <FlagIcon />
                </IconButton>
                <IconButton color="error">
                  <DeleteIcon />
                </IconButton>
              </div>
            </CardContent>
          </Card>
        </Grid>
      ))}
    </Grid>
  </div>
);

export default TileView;
