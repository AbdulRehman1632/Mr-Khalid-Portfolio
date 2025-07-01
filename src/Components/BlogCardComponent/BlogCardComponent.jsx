import React from 'react';
import { Grid, Card, CardMedia, CardContent, Typography, Box } from '@mui/material';
import { useNavigate } from 'react-router-dom';
import { blogs } from '../../utils/constant/blogs/blogs';

const BlogCardComponent = () => {
  const navigate = useNavigate();

  return (
    <Box sx={{ py: { xs: 4, md: 6 }, px: { xs: 2, sm: 4 }, mt: 5 }}>
      {/* <Typography sx={{ textAlign: 'center' }} variant='h3'>My Blogs</Typography> */}

      <Grid container spacing={4} sx={{ mt: 3 }}>
        {blogs.map((blog) => (
          <Grid item xs={12} sm={6} md={4} key={blog.id}>
            <Card
              onClick={() => navigate(`/blog/${blog.id}`)}
              sx={{
                height: '100%',
                cursor: 'pointer',
                display: 'flex',
                flexDirection: 'column',
                transition: '0.3s',
                '&:hover': {
                  boxShadow: 6,
                },
                width: '100%', // Ensures card doesn’t stretch
                maxWidth: 360, // Fix card width even if content is long
                margin: '0 auto',
              }}
            >
              <CardMedia
                component="img"
                height="200"
                image={blog.image}
                alt={blog.title}
              />
              <CardContent>
                <Typography
                  variant="h4"
                  fontWeight="bold"
                  sx={{
                    fontFamily: 'GV',
                    fontSize: '1.6rem',
                    textAlign: 'center',
                  }}
                >
                  {blog.title}
                </Typography>
                <Typography
                  variant="body2"
                  color="text.secondary"
                  sx={{
                    mt: 1,
                    overflow: 'hidden',
                    textOverflow: 'ellipsis',
                    display: '-webkit-box',
                    WebkitLineClamp: 3, // max 3 lines
                    WebkitBoxOrient: 'vertical',
                  }}
                >
                  {blog.summary}
                </Typography>
              </CardContent>
            </Card>
          </Grid>
        ))}
      </Grid>
    </Box>
  );
};

export default BlogCardComponent;
