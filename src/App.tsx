// App.tsx
import React from 'react';
import { useState } from 'react';
import './App.css';
import FileUpload from './components/file-upload';
import DataTable from './components/table';
import { Container, Box, Typography, CssBaseline } from '@mui/material';



function App() {
  const [isDataUploaded, setDataUploaded] = useState(false);

  const handleUploadSuccess = () => {
    setDataUploaded(true);
  }
  return (
    <Container component="main" maxWidth="lg">
      <CssBaseline />
      <Box sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', minHeight: '100vh' }}>
        <Typography variant="h4" component="div" gutterBottom>
          Excel Data Uploader
        </Typography>
        <FileUpload onUploadSuccess={handleUploadSuccess} />
        <Box sx={{ display: 'flex',flexDirection: 'column' ,marginTop: '2rem', alignItems: 'center', justifyContent: 'center' }}>
          <Typography variant="h4" component="div" gutterBottom>
            Excel Data with Filter
          </Typography>
          <DataTable />
        </Box>
      </Box>
    </Container>
  );
}

export default App;
