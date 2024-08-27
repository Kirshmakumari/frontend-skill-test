import React from "react";
import { Card, CardContent, Typography, IconButton } from "@mui/material";
import CloseIcon from "@mui/icons-material/Close";
import "../styles/DetailView.css";

const DetailView = ({ user, onClose }) => (
  <div className="detail-view">
    <IconButton className="close-btn" onClick={onClose}>
      <CloseIcon />
    </IconButton>
    <Card>
      <CardContent>
        <Typography variant="h4">{user.name}</Typography>
        <Typography variant="body1">Email: {user.email}</Typography>
        <Typography variant="body1">Phone: {user.phone}</Typography>
        <Typography variant="body1">Website: {user.website}</Typography>
        <Typography variant="body1">Company: {user.company.name}</Typography>
        <Typography variant="body1">
          Address: {user.address.street}, {user.address.city}
        </Typography>
      </CardContent>
    </Card>
  </div>
);

export default DetailView;
