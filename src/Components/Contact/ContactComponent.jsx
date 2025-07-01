import React from 'react';
import {
  Box,
  Container,
  Grid,
  Typography,
  TextField,
  Button,
  IconButton,
  useMediaQuery,
  useTheme,
  Paper,
} from '@mui/material';
import FacebookIcon from '@mui/icons-material/Facebook';
import InstagramIcon from '@mui/icons-material/Instagram';
import TwitterIcon from '@mui/icons-material/Twitter';

const ContactComponent = () => {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('sm'));

  return (
    <>
      {/* Top Map Section - 50% viewport height */}
      <Box sx={{ height: '50vh', width: '100%' }}>
        <iframe
          title="Location Map"
          width="100%"
          height="100%"
          frameBorder="0"
          style={{ border: 0 }}
          allowFullScreen
          loading="lazy"
          src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d14480.656988887093!2d67.0552094!3d24.8582393!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3eb33e8d00000001%3A0x98fec5ec94d4b342!2sThe%20Crew%20Films!5e0!3m2!1sen!2s!4v1750160094921!5m2!1sen!2s"
        ></iframe>
      </Box>



     <Box sx={{ py: 6, px: 2 }}>
      <Paper  sx={{ p: 4, maxWidth: 1000, mx: 'auto',background:"transparent" }}>
        <Grid container spacing={4}>

          {/* Left Column - Form */}
          <Grid item xs={12} md={6}>
            <Box sx={{ textAlign: 'center', px: { xs: 2, sm: 4, md: 6 }, py: 4 }}>
  <Typography
    variant="h3"
    fontWeight="bold"
    gutterBottom
    sx={{
      fontSize: {
        xs: '1.8rem', // mobile
        sm: '2.2rem',
        md: '2.5rem', // tablet
        lg: '3rem',   // desktop
      },
    }}
  >
    CONTACT ME
  </Typography>

  <Typography
    variant="body1"
    sx={{
      marginTop: '15px',
      fontSize: {
        xs: '0.9rem',
        sm: '1rem',
        md: '1.1rem',
      },
      maxWidth: '700px',
      marginX: 'auto',
    }}
  >
    Lorem, ipsum dolor sit amet consectetur adipisicing elit. Natus vel amet
    commodi veritatis quis consectetur nihil, delectus earum voluptates numquam
    error alias mollitia, nam ex ipsa officiis? Nemo, totam sit!
  </Typography>
</Box>
            <form>
              <TextField
                fullWidth
                label="Name"
                margin="normal"
                variant="outlined"
                sx={{
    "& .MuiOutlinedInput-root": {
      "& fieldset": {
        border: "none",
        borderLeft:"1px solid gray",
        borderBottom:"1px solid gray"
      }
    }
  }}
              
              />
              <TextField
                fullWidth
                label="Email"
                margin="normal"
                variant="outlined"
                type='email'
                 sx={{
    "& .MuiOutlinedInput-root": {
      "& fieldset": {
        border: "none",
        borderLeft:"1px solid gray",
        borderBottom:"1px solid gray"
      }
    }
  }}
              />
              <TextField
                fullWidth
                label="Title"
                margin="normal"
                variant="outlined"
                 sx={{
    "& .MuiOutlinedInput-root": {
      "& fieldset": {
        border: "none",
        borderLeft:"1px solid gray",
        borderBottom:"1px solid gray"
      }
    }
  }}
              />
              <TextField
                fullWidth
                label="Message"
                multiline
                rows={4}
                margin="normal"
                variant="outlined"
                 sx={{
    "& .MuiOutlinedInput-root": {
      "& fieldset": {
        border: "none",
        borderLeft:"1px solid gray",
        borderBottom:"1px solid gray"
      }
    }
  }}
              />
              <Button variant="contained" color="primary" sx={{ mt: 2 }}>
                Submit
              </Button>
            </form>
          </Grid>

          {/* Right Column - Heading */}
          {/* <Grid item xs={12} md={6} display="flex" alignItems="center" justifyContent="center">
            <Box>
              <Typography variant="h4" fontWeight="bold" gutterBottom>
                CONTACT US
              </Typography>
              <Typography variant="body1">
                We'd love to hear from you. Whether you have a question about features, pricing, or anything else, our team is ready to help.
              </Typography>
            </Box>
          </Grid> */}

        </Grid>
      </Paper>
    </Box>

    </>
  );
};

export default ContactComponent;
