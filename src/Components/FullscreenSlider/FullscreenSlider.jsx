import React, { useRef, useEffect, useState } from 'react';
import { Box, Typography, Button } from '@mui/material';
import { styled } from '@mui/material/styles';

// Scroll Wrapper with snap scrolling
const ScrollWrapper = styled(Box)(({ theme }) => ({
  height: '100vh',
  overflowY: 'scroll',
  scrollSnapType: 'y mandatory',
  scrollBehavior: 'smooth',
  scrollPaddingTop: 0,
  scrollbarWidth: 'none',
  '&::-webkit-scrollbar': {
    display: 'none',
  },
}));

// Each full screen slide
const Slide = styled(Box)(({ image }) => ({
  height: '100dvh', // ✅ dynamic viewport height (fixes iOS issues)
  width: '100%',
  scrollSnapAlign: 'start',
  backgroundImage: `url(${image})`,
  backgroundSize: 'cover',          // ✅ Covers entire area
  backgroundPosition: 'center',
  backgroundRepeat: 'no-repeat',
  position: 'relative',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  color: 'white',
  '&::before': {
    content: '""',
    position: 'absolute',
    top: 0,
    left: 0,
    width: '100%',
    height: '100%',
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
    zIndex: 1,
  },
}));


// Text content in each slide
const SlideContent = styled(Box)(({ theme }) => ({
  position: 'absolute',
  bottom: '10%',
  left: '5%',
  zIndex: 2,
  textAlign: 'left',
  color: '#fff',
  maxWidth: '700px',
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'flex-start',

  [theme.breakpoints.down('sm')]: {
    bottom: '5%',
    left: '50%',
    transform: 'translateX(-50%)',
    textAlign: 'center',
    alignItems: 'center',
    width: '100%',
    padding: '0 1rem',
  },
}));


// Main component
const FullscreenSlider = ({ slides }) => {
  const containerRef = useRef(null);
  const [isScrolling, setIsScrolling] = useState(false);

  useEffect(() => {
    const container = containerRef.current;

    const handleWheel = (e) => {
      e.preventDefault();
      if (isScrolling) return;

      setIsScrolling(true);

      const direction = e.deltaY > 0 ? 1 : -1;
      const slideHeight = window.innerHeight;

      container.scrollBy({ top: slideHeight * direction, behavior: 'smooth' });

      // Delay to prevent rapid scroll
      setTimeout(() => setIsScrolling(false), 1000);
    };

    container.addEventListener('wheel', handleWheel, { passive: false });
    return () => container.removeEventListener('wheel', handleWheel);
  }, []);

  return (
    <ScrollWrapper ref={containerRef}>
      {slides.map((slide) => (
        <Slide key={slide.id} image={slide.image}>
          <SlideContent>
         <Typography
  variant="h2"
  gutterBottom
  sx={{
    fontWeight: 'bold',
    fontSize: { xs: '1.4rem', sm: '3rem', md: '4rem', lg: '5rem' },
    lineHeight: 1.2,
    maxWidth: { xs: '90%', sm: '85%', md: '70%', lg: '60%' },
    textAlign: { xs: 'center', sm: 'left' },
    mx: { xs: 'auto', sm: 0 }, // center align on small screens
  }}
>
  {/* Top Line - Highlighted */}
  <Box
    component="span"
    sx={{
        color:"	#bdee09",
      display: 'block',
      fontSize: { xs: '1.6em', sm: '4rem', md: '6rem', lg: '6rem' },
      fontWeight: 800,
    }}
  >
    {slide.titleTop}
  </Box>

  {/* Bottom Line - Single Line with ellipsis */}
  <Box
    component="span"
    sx={{
      display: 'block',
      whiteSpace: 'nowrap',
    //   overflow: 'hidden',
    //   textOverflow: 'ellipsis',
      fontSize: { xs: '1.3rem', sm: '2rem', md: '3rem' },
    }}
  >
    {slide.titleBottom}
  </Box>
</Typography>

{/* <Typography sx={{fontSize:"1.2em",}}>
    {slide.para}
</Typography> */}
<Typography sx={{ fontSize: "1.1em" }}>
  {slide.para.split('Muhammad Khalid Ali').map((part, index, arr) => (
    <React.Fragment key={index}>
      {part}
      {index < arr.length - 1 && (
        <Box component="span" sx={{  fontWeight: 'bold'  }}>
          Muhammad Khalid Ali
        </Box>
      )}
    </React.Fragment>
  ))}
</Typography>


         {/* <Button
  variant="outlined"
  sx={{
    borderColor: '#fff',
    color: '#fff',
    mt: 2,
    px: 4,
    py: 1.5,
    fontWeight: 500,
    alignSelf: { xs: 'center', sm: 'flex-start' }, // 👈 xs=mobile center, sm+=left
    '&:hover': {
      backgroundColor: '#fff',
      color: '#000',
    },
  }}
>
  {slide.buttonText}
</Button> */}

          </SlideContent>
        </Slide>
      ))}
    </ScrollWrapper>
  );
};

export default FullscreenSlider;
