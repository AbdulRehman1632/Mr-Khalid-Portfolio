import React, { useState } from 'react';
import { Box, Tabs, Tab, Typography, Container } from '@mui/material';
import { tabContent } from '../../utils/constant/aboutcontent/abountContent';

const CustomTabs = () => {
  const [value, setValue] = useState(0);

  const handleChange = (_, newValue) => {
    setValue(newValue);
  };

  return (
    <Container sx={{ py: { xs: 4, md: 6 } }}>
      {/* Tabs */}
      <Box
        sx={{
          display: 'flex',
          justifyContent: 'center',
          mb: 4,
          overflowX: 'auto',
        }}
      >
        <Tabs
          value={value}
          onChange={handleChange}
          variant="scrollable"
          scrollButtons="auto"
          textColor="primary"
          indicatorColor="primary"
          aria-label="responsive tabs"
          sx={{
            mb: 4,
            marginTop:"40px",
            "& .MuiTabs-indicator": {
              height: "3px",
              background: 'linear-gradient(90deg, #00f2fe, #4facfe, #00c9a7, #43e97b)',
    // WebkitBackgroundClip: 'text',
    // WebkitTextFillColor: 'transparent',
            },
            "& .MuiTab-root": {
              fontSize: { xs: "0.8rem", sm: "1rem" },
              fontWeight: 400,
              letterSpacing: "0.5px",
              textTransform: "none",
              minWidth: { xs: 100, sm: 120 },
              px: { xs: 1.5, sm: 2 },
              
            },
          }}
        >
          {tabContent.map((tab, index) => (
            <Tab key={index} label={tab.label} />
          ))}
        </Tabs>
      </Box>

      {/* Tab Content */}
      <Box
        sx={{
          marginTop:"-50px",
          textAlign: 'center',
          p: { xs: 2, sm: 3 },
          borderRadius: 2,
        }}
      >
        <Typography
          variant="h5"
          gutterBottom
          sx={{ fontWeight: 'bold',fontFamily:"GV", background: 'linear-gradient(90deg, #00f2fe, #4facfe, #00c9a7, #43e97b)',
    WebkitBackgroundClip: 'text',
    WebkitTextFillColor: 'transparent', fontSize: { xs: '1.8rem', md: '3rem' } }}
        >
          {tabContent[value].heading}
        </Typography>

        <Box
          sx={{
            maxWidth: '800px',
            mx: 'auto',
            textAlign: 'justify',
            lineHeight: 1.8,
            fontSize: { xs: '0.9rem', sm: '1rem' },
            color: '#ccc',
            // mt: 2,
          }}
        >
          {tabContent[value].content
  .split('\n')
  .filter((line) => line.trim() !== '')
  .map((line, idx) => (
    <Box
      key={idx}
      sx={{
        display: 'flex',
        alignItems: 'flex-start',
        // mb: 1.5,
        gap: 1,
        flexWrap: 'wrap', // ensures text wraps properly on mobile
      }}
    >
      <Box component="span" sx={{ mt: '2px' }}>🎬</Box>
      <Typography
        component="span"
        sx={{
          fontSize: { xs: '0.9rem', sm: '1rem' },
          color: '#ccc',
          lineHeight: 1.7,
          flex: '1 1 0',
        }}
        dangerouslySetInnerHTML={{ __html: line.trim() }}
      />
    </Box>
  ))}

        </Box>
      </Box>
    </Container>
  );
};

export default CustomTabs;
