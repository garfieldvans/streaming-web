// AppRouter.js
import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import HomeSection from '../pages/Home';
import { Box, Text } from '@chakra-ui/react';
import Navbar from '../components/navmenu/Navbar';
import Profile from '../pages/Profile';
import HotSection from '../pages/Hot';
import Genre from '../pages/Genre';
import Detail from '../pages/Detail';


const AppRouter = () => {
  return (
    <Box>
        <Navbar/>
    <Router>
      <Routes>
        <Route path="/" element={<HomeSection />} />
        <Route path="/Hot" element={<HotSection />} />
        <Route path="/Genre" element={<Genre/>} />
        <Route path="/Profile" element={<Profile />} />
        <Route path="/Detail" element={<Detail />} />
      </Routes>
    </Router>
    
    </Box>
  );
};

export default AppRouter;
