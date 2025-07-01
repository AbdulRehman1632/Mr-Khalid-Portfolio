import React, { useState, useEffect } from 'react';
import {
  AppBar,
  Toolbar,
  IconButton,
  Typography,
  Drawer,
  Box,
  ListItem,
  ListItemText,
  useMediaQuery,
  useTheme,
} from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';
import CloseIcon from '@mui/icons-material/Close';
import FacebookIcon from '@mui/icons-material/Facebook';
import InstagramIcon from '@mui/icons-material/Instagram';
import TwitterIcon from '@mui/icons-material/Twitter';
import { Link } from 'react-router-dom'; // ✅ Fix import

const CustomNav = () => {
  const [open, setOpen] = useState(false);
  const [scroll, setScroll] = useState(false); // ✅ New scroll state

  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('sm'));

  const menuLinks = ['Home', 'Portfolio', 'About', 'Blog', 'Contact'];

  // ✅ Scroll event for background
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 30) {
        setScroll(true);
      } else {
        setScroll(false);
      }
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const contactInfo = (
    <Box sx={{ textAlign: isMobile ? 'center' : 'left' }}>
      <Typography variant="h5" gutterBottom fontWeight="bold">
        San Jose
      </Typography>
      <Typography
        sx={{ letterSpacing: '0.5px', fontSize: '1.1em', marginBottom: '5px' }}
        variant="body1"
      >
        123 Street, City
      </Typography>
      <Typography variant="body1">Email: hello@example.com</Typography>
      <Typography variant="body1">Phone: +123 456 7890</Typography>

      <Box sx={{ mt: 3, display: 'flex', gap: 2, justifyContent: isMobile ? 'center' : 'flex-start' }}>
        <FacebookIcon sx={{ fontSize: 30, cursor: 'pointer' }} />
        <InstagramIcon sx={{ fontSize: 30, cursor: 'pointer' }} />
        <TwitterIcon sx={{ fontSize: 30, cursor: 'pointer' }} />
      </Box>
    </Box>
  );

  return (
    <>
      {/* ✅ Scroll-based Background */}
      <AppBar
  position="fixed"
  sx={{
    backgroundColor: scroll ? '#000' : 'transparent',
    backgroundImage: 'none',        // remove any background gradient
    backdropFilter: 'none',         // remove blur/filter effects
    boxShadow: scroll ? 1 : 'none', // add shadow on scroll
    transition: 'background-color 0.3s ease',
  }}
>

        <Toolbar sx={{ justifyContent: 'space-between' }}>
          <Typography
            variant="h6"
            sx={{
              fontWeight: 'bold',
              fontFamily: 'dance',
              fontSize: '1.3em',
            }}
          >
            Muhammad Khalid Ali
          </Typography>

          <IconButton onClick={() => setOpen(true)} sx={{ color: '#fff' }}>
            <MenuIcon sx={{ fontSize: 30 }} />
          </IconButton>
        </Toolbar>
      </AppBar>

      {/* Drawer */}
      <Drawer
        anchor="right"
        open={open}
        onClose={() => setOpen(false)}
        PaperProps={{
          sx: {
            width: '100vw',
            height: '100vh',
            backgroundColor: '#111',
            color: '#fff',
            p: 4,
            overflowY: 'auto',
          },
        }}
      >
        <Box sx={{ position: 'absolute', top: 20, right: 20 }}>
          <IconButton onClick={() => setOpen(false)} sx={{ color: '#fff' }}>
            <CloseIcon />
          </IconButton>
        </Box>

        <Box
          sx={{
            display: 'flex',
            flexDirection: { xs: 'column', md: 'row' },
            alignItems: { xs: 'center', md: 'flex-start' },
            justifyContent: 'center',
            gap: { xs: 6, md: 12 },
            mt: 10,
          }}
        >
          <Box sx={{ textAlign: { xs: 'center', md: 'left' } }}>
            {menuLinks.map((text) => (
              <ListItem key={text} disablePadding sx={{ mb: 2 }}>
                <Link
                  to={text === 'Home' ? '/' : `/${text}`}
                  style={{ textDecoration: 'none', color: '#fff' }}
                  onClick={() => setOpen(false)}
                >
                  <ListItemText
                    primary={text}
                    primaryTypographyProps={{
                      variant: 'h2',
                      sx: {
                        fontWeight: 'bold',
                        fontSize: { xs: '2rem', sm: '2.5rem', md: '3rem' },
                        '&:hover': { color: '#ccc' },
                        textAlign: { xs: 'center', md: 'left' },
                      },
                    }}
                  />
                </Link>
              </ListItem>
            ))}
          </Box>

          <Box sx={{ textAlign: { xs: 'center', md: 'left' } }}>{contactInfo}</Box>
        </Box>
      </Drawer>
    </>
  );
};

export default CustomNav;
