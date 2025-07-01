import React, { useEffect } from 'react';
import { Box, Typography } from '@mui/material';
import CustomTabs from '../../CustomTabs/CustomTabs';
import AOS from 'aos';
import 'aos/dist/aos.css';
import Smalllcards from '../../Smallcards/Smalllcards';
import ShinyText from '../../../utils/constant/ShinyText/ShinyText';

const About = () => {
  useEffect(() => {
    AOS.init({ duration: 1000 });
  }, []);

  return (
    <>
      <Box
        sx={{
          display: 'flex',
          flexDirection: { xs: 'column', md: 'row' },
          overflow: 'hidden',
        }}
      >
        {/* Left Content */}
        <Box
          data-aos="fade-up"
          sx={{
            width: { md: '40%', xs: '100%' },
            p: { xs: 3, md: 6 },
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'center',
            mt: { xs: 3, md: 0 },
          }}
        >
          <Typography
            variant="h3"
            sx={{
              fontWeight: 'bold',
              fontFamily:"GV",
              background: 'linear-gradient(90deg, #00f2fe, #4facfe, #00c9a7, #43e97b)',
    WebkitBackgroundClip: 'text',
    WebkitTextFillColor: 'transparent',
    marginTop:"17px",
              fontSize: { xs: '2rem', md: '3rem' },
            }}
          >
            Muhammad Khalid Ali
          </Typography>

          <Typography
            sx={{
              fontSize: { xs: '1.1rem', md: '1.4rem' },
              fontWeight: 'bold',
              color: 'gray',
              mt: 1,
            }}
          >
            Group CEO/Producer
          </Typography>

          


          <Typography sx={{ fontSize: '1rem', lineHeight: 1.8, mt: 2 }}>
           <ShinyText text="Having reached this milestone of 25 incredible years with the slogan
            Everything is possible, we express our heartfelt gratitude to all
            our clients, directors, creative directors, cinematographers,
            post-production team, music composers, production designers, makeup
            artists, wardrobe stylists, and everyone who has supported us
            throughout these years. Essentially, our crew who has remained
            steadfast throughout this epic journey." disabled={false} speed={3} className='custom-class' />
          </Typography>

           

          

          <Typography sx={{ fontSize: '1rem', lineHeight: 1.8, mt: 2 }}>
              <ShinyText text="Thank you for being a constant source of inspiration. Without you,
            this journey would not have been so memorable." disabled={false} speed={3} className='custom-class' />
          </Typography>
        </Box>

        {/* Right Image */}
        <Box
          data-aos="zoom-in-left"
          sx={{
            width: { md: '60%', xs: '100%' },
            height: { md: '100%', xs: '300px' },
          }}
        >
          <Box
            component="img"
            // src="../assets/images/image3.jpg"
            src="https://res.cloudinary.com/dpm8fa6gn/image/upload/v1751379459/image_mexkqs.png"
            alt="About"
            sx={{
              width: '100%',
              height: '100%',
              objectFit: 'cover',
            }}
          />
        </Box>
      </Box>

      {/* Tabs Section */}
      <Box
        data-aos="fade-up"
        sx={{
          mt: { xs: 5, md: -10 }, // Adjust top margin responsive
          px: { xs: 2, md: 8 },
        }}
      >
        <CustomTabs />
      </Box>

      <Smalllcards/>
    </>
  );
};

export default About;
