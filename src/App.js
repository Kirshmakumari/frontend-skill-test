import React, { useState } from "react";
import { BrowserRouter as Router, Route, Routes, useLocation } from "react-router-dom";
import { ThemeProvider } from "@mui/material/styles";
import theme from "./theme";
import HamburgerMenu from "./components/HamburgerMenu";
import HorizontalMenu from "./components/HorizontalMenu";
import GridView from "./components/GridView";
import TileView from "./components/TileView";
import DetailView from "./components/DetailView";
import "./App.css";

const App = () => {
  const [selectedUser, setSelectedUser] = useState(null);
  const [title, setTitle] = useState("Home");

  const handleMenuClick = (pageTitle) => {
    setTitle(pageTitle);
  };

  const renderContent = () => {
    if (selectedUser) {
      return (
        <DetailView 
          user={selectedUser} 
          onClose={() => setSelectedUser(null)} 
          onEdit={() => alert("Edit functionality")}
          onDelete={() => alert("Delete functionality")} 
        />
      );
    } else {
      return (
        <GridView onSelect={(user) => setSelectedUser(user)} />
      );
    }
  };

  const LocationTitle = () => {
    const location = useLocation();
    const path = location.pathname.substring(1); // Remove leading slash

    const titles = {
      '': 'Home',
      'home': 'Home',
      'services': 'Services',
      'portfolio': 'Portfolio',
      'contact': 'Contact'
    };

    return <h1 className="page-title">{titles[path] || 'Page Not Found'}</h1>;
  };

  return (
    <ThemeProvider theme={theme}>
      <Router>
        <div>
          <HamburgerMenu />
          <HorizontalMenu onMenuClick={handleMenuClick} />
          <LocationTitle />
          <Routes>
            <Route path="/" element={renderContent()} />
            <Route path="/home" element={renderContent()} />
            <Route path="/services" element={renderContent()} />
            <Route path="/portfolio" element={renderContent()} />
            <Route path="/contact" element={renderContent()} />
          </Routes>
        </div>
      </Router>
    </ThemeProvider>
  );
};

export default App;
