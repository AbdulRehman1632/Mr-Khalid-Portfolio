import React from 'react';
import { Box, Grid, Typography, Paper } from '@mui/material';
import { smallcardlist } from '../../utils/constant/smallcard/smallcard';

const Smalllcards = () => {
  return (
    <Box sx={{ py: { xs: 4, md: 6 }, px: { xs: 2, sm: 4 } }}>
      {/* Centered Gradient Heading */}
      <Typography
        variant="h4"
        align="center"
        fontWeight="bold"
        gutterBottom
        sx={{
          mb: 4,
          fontFamily: "GV",
          fontSize: { xs: '1.8rem', md: '3rem' },
          background: 'linear-gradient(90deg, #00f2fe, #4facfe, #00c9a7, #43e97b)',
          WebkitBackgroundClip: 'text',
          WebkitTextFillColor: 'transparent',
        }}
      >
        Why people work with me
      </Typography>

      {/* Cards Grid */}
      <Grid container spacing={4} justifyContent="center">
        {smallcardlist.map((item, index) => (
          <Grid
            item
            xs={12}
            sm={6}
            md={5}
            lg={4}
            key={index}
            display="flex"
            justifyContent="center"
            // data-aos={item.aos || 'fade-up'}
          >
            <Paper
              elevation={3}
              sx={{
                display: 'flex',
                gap: 2,
                p: { xs: 2, sm: 3 },
                alignItems: 'flex-start',
                width: '100%',
                maxWidth: 400,
              }}
            >
              {/* Icon */}
              <Box>{item.icon}</Box>

              {/* Text */}
              <Box>
                <Typography
                  variant="h6"
                  fontWeight="bold"
                  gutterBottom
                  sx={{ fontSize: { xs: '1rem', md: '1.2rem' } }}
                >
                  {item.heading}
                </Typography>
                <Typography
                  variant="body2"
                  color="text.secondary"
                  sx={{ fontSize: { xs: '0.9rem', md: '1rem' } }}
                >
                  {item.para}
                </Typography>
              </Box>
            </Paper>
          </Grid>
        ))}
      </Grid>
    </Box>
  );
};

export default Smalllcards;
