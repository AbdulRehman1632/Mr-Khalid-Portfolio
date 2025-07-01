import React from 'react';
import { Box, Container, Typography } from '@mui/material';
import BlogCardComponent from '../../BlogCardComponent/BlogCardComponent';

const Blog = () => {
  return (
    <>
    <Container maxWidth="lg" sx={{ mt: 6, mb: 6 }}>
      {/* Heading */}
      <Typography
        variant="h3"
        fontWeight="bold"
        align="center"
        sx={{ mt:10, fontFamily: 'GV', fontSize: { xs: '2rem', md: '2.8rem' } }}
      >
        My Blogs
      </Typography>

      {/* Subheading / Intro */}
      <Typography
        variant="body1"
        align="center"
        sx={{
          maxWidth: '800px',
          mx: 'auto',
          mb: 5,
          color: 'text.secondary',
          lineHeight: 1.8,
          fontSize: { xs: '1rem', md: '1.1rem' }
        }}
      >
        Muhammad Khalid Ali is a distinguished figure in Pakistan's film industry, 
        serving as the Group CEO of The Crew Films, Crew Motion Pictures, and Crew Entertainment. 
        With a career spanning over three decades, he has been instrumental in producing award-winning 
        content that resonates both locally and internationally.
      </Typography>
      </Container>

      <Box sx={{mt:-10}}>
      <BlogCardComponent />
      </Box>
      </>
    
  );
};

export default Blog;
