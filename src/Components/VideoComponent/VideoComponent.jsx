import React, { useState } from 'react';
import { Box, Grid, Modal, Typography, IconButton } from '@mui/material';
import CloseIcon from '@mui/icons-material/Close';
import { videos } from '../../utils/constant/videodata/videodata';


const VideoComponent = () => {
  const [open, setOpen] = useState(false);
  const [activeVideo, setActiveVideo] = useState(null);

  const handleOpen = (videoUrl) => {
    setActiveVideo(videoUrl);
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
    setActiveVideo(null);
  };

  return (
    <>
      <Grid container spacing={3}>
        {videos.map((video) => (
          <Grid item xs={12} sm={6} md={4} key={video.id}>
            <Box
              onClick={() => handleOpen(video.url)}
              sx={{
                cursor: 'pointer',
                borderRadius: 2,
                overflow: 'hidden',
                boxShadow: 3,
                transition: '0.3s',
                '&:hover': { transform: 'scale(1.03)' },
              }}
            >
              <img src={video.thumbnail} alt={video.title} style={{ width: '100%' }} />
              <Box p={2}>
                <Typography fontWeight="bold">{video.title}</Typography>
              </Box>
            </Box>
          </Grid>
        ))}
      </Grid>

      <Modal
        open={open}
        onClose={handleClose}
        closeAfterTransition
        sx={{ display: 'flex', alignItems: 'center', justifyContent: 'center', p: 2 }}
      >
        <Box
          sx={{
            position: 'relative',
            width: '100%',
            maxWidth: '800px',
            bgcolor: '#000',
            borderRadius: 2,
            boxShadow: 24,
            outline: 'none',
            overflow: 'hidden',
          }}
        >
          <IconButton
            onClick={handleClose}
            sx={{
              position: 'absolute',
              top: 10,
              right: 10,
              color: '#fff',
              zIndex: 10,
            }}
          >
            <CloseIcon />
          </IconButton>

          {activeVideo && (
            <Box
              sx={{
                position: 'relative',
                paddingTop: '56.25%', // 16:9 Aspect Ratio
              }}
            >
              <iframe
                src={activeVideo}
                title="Video"
                frameBorder="0"
                allow="autoplay; encrypted-media"
                allowFullScreen
                style={{
                  position: 'absolute',
                  top: 0,
                  left: 0,
                  width: '100%',
                  height: '100%',
                }}
              ></iframe>
            </Box>
          )}
        </Box>
      </Modal>
    </>
  );
};

export default VideoComponent;





