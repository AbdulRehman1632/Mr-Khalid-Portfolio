import React, { useState } from 'react';
import {
  Box,
  Grid,
  Typography,
  Card,
  Modal,
  IconButton,
  Tabs,
  Tab,
} from '@mui/material';
import PlayCircleOutlineIcon from '@mui/icons-material/PlayCircleOutline';
import { videoList } from '../../utils/constant/videodata/videodata';
import ParticlesBackground from '../../utils/constant/ParticlesBackground/ParticlesBackground';

const categories = ['All', ...new Set(videoList.map((v) => v.category))];

const VideoComponent = () => {
  const [open, setOpen] = useState(false);
  const [selectedVideo, setSelectedVideo] = useState('');
  const [selectedTab, setSelectedTab] = useState('All');

  const getEmbedUrl = (url) => {
  if (url.includes("youtu.be/")) {
    const id = url.split("youtu.be/")[1];
    return `https://www.youtube.com/embed/${id}`;
  }
  if (url.includes("watch?v=")) {
    const id = url.split("watch?v=")[1];
    return `https://www.youtube.com/embed/${id}`;
  }
  return url;
};


  const handleOpen = (url) => {
    setSelectedVideo(url);
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
    setSelectedVideo('');
  };

  const handleTabChange = (event, newValue) => {
    setSelectedTab(newValue);
  };

  const filteredVideos =
    selectedTab === 'All'
      ? videoList
      : videoList.filter((v) => v.category === selectedTab);

  return (
    <>
      <ParticlesBackground />

      <Box sx={{ p: 4,position: 'relative', zIndex: 1 }}>
        {/* Heading */}
        <Typography
          variant="h3"
          align="center"
          gutterBottom
          sx={{ fontWeight: 'bold', mb: 4,marginTop:"30px",background: 'linear-gradient(90deg, #00f2fe, #4facfe, #00c9a7, #43e97b)',
    WebkitBackgroundClip: 'text',
    WebkitTextFillColor: 'transparent',fontFamily:"GV" }}
        >
         Mr Khalid Ali Portfolio
        </Typography>

        {/* Tabs */}
        <Tabs
          value={selectedTab}
          onChange={handleTabChange}
          centered
           sx={{
            mb: 4,
            "& .MuiTabs-indicator": {
              height: "3px",
              background: 'linear-gradient(90deg, #00f2fe, #4facfe, #00c9a7, #43e97b)',
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
          textColor="primary"
          indicatorColor="primary"
        >
          {categories.map((cat, index) => (
            <Tab key={index} label={cat} value={cat} />
          ))}
        </Tabs>

        {/* Videos Grid */}
        <Grid container spacing={4} justifyContent="center">
          {filteredVideos.map((video, index) => (
            <Grid item xs={12} sm={6} md={4} key={index}>
              <Card
                onClick={() => handleOpen(getEmbedUrl(video.videoUrl))}
                sx={{
                  cursor: 'pointer',
                  position: 'relative',
                  overflow: 'hidden',
                  borderRadius: 2,
                  '&:hover .play-icon': { opacity: 1 },
                }}
              >
                <video
                  src={video.preview}
                  muted
                  autoPlay
                  loop
                  playsInline
                  style={{
                    width: '100%',
                    height: '200px',
                    objectFit: 'cover',
                  }}
                />
                <IconButton
                  className="play-icon"
                  sx={{
                    position: 'absolute',
                    top: '50%',
                    left: '50%',
                    transform: 'translate(-50%, -50%)',
                    color: '#fff',
                    fontSize: 60,
                    backgroundColor: 'rgba(0,0,0,0.4)',
                    opacity: 0.8,
                  }}
                >
                  <PlayCircleOutlineIcon fontSize="inherit" />
                </IconButton>
              </Card>
              <Typography sx={{background: 'linear-gradient(90deg, #00f2fe, #4facfe, #00c9a7, #43e97b)',
    WebkitBackgroundClip: 'text',
    WebkitTextFillColor: 'transparent',fontSize:"1.2em"}} mt={1} align="center" fontWeight="bold">
                {video.title}
              </Typography>
            </Grid>
          ))}
        </Grid>

        {/* Modal for Full Video */}
        <Modal
          open={open}
          onClose={handleClose}
          sx={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            p: 2,
          }}
        >
          <Box
            sx={{
              width: '100%',
              maxWidth: 800,
              bgcolor: 'background.paper',
              borderRadius: 2,
              overflow: 'hidden',
            }}
          >
            <iframe
              width="100%"
              height="450"
              src={selectedVideo}
              title="Video player"
              frameBorder="0"
              allow="autoplay; encrypted-media"
              allowFullScreen
            />
          </Box>
        </Modal>
      </Box>
    </>
  );
};

export default VideoComponent;
