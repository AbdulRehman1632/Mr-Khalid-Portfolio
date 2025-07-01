import React from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import {
  Container,
  Typography,
  Chip,
  Box,
  Divider,
  Card,
  CardMedia,
  CardContent,
} from '@mui/material';
import { blogs } from '../../utils/constant/blogs/blogs';

const BlogDetail = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const blog = blogs.find((b) => b.id === id);
  const otherBlogs = blogs.filter((b) => b.id !== id);

  if (!blog) return <Typography textAlign="center" mt={5}>Blog not found.</Typography>;

  return (
    <Container maxWidth="lg" sx={{ py: 6 }}>
      <Box
        sx={{
          display: 'flex',
          flexDirection: { xs: 'column', md: 'row' },
          gap: 4,
        }}
      >
        {/* LEFT SIDE – Blog Detail */}
        <Box
          sx={{
            flexBasis: { md: '75%' },
            flexShrink: 0,
            width: { xs: '100%', md: '75%' },
          }}
        >
          {/* VIP Badge */}
          {blog.vip && (
            <Chip
              label="🌟 VIP Blog"
              color="secondary"
              sx={{
                fontWeight: 'bold',
                mb: 2,
                fontSize: '0.9rem',
                px: 2,
                py: 0.5,
              }}
            />
          )}

          {/* Title */}
          <Typography
            variant="h3"
            fontWeight="bold"
            gutterBottom
            sx={{mt:10, fontFamily: 'GV',textAlign:"center", fontSize: { xs: '2rem', md: '3rem' } }}
          >
            {blog.title}
          </Typography>

          <Divider sx={{ mb: 3 }} />

          {/* Blog Image */}
          <Box
            component="img"
            src={blog.image}
            alt={blog.title}
            sx={{
              width: '100%',
              height: { xs: '220px', sm: '300px', md: '400px' },
              objectFit: 'cover',
              borderRadius: 3,
              mb: 4,
            }}
          />

          {/* Blog Content */}
          <Box
            sx={{
              typography: 'body1',
              lineHeight: 1.9,
              fontSize: '1.1rem',
              '& h2': {
                mt: 4,
                mb: 2,
                fontSize: '2rem',
                fontWeight: 'bold',
              },
              '& h3': {
                mt: 3,
                mb: 1,
                fontSize: '1.4rem',
                fontWeight: 'bold',
              },
              '& ul': {
                pl: 3,
                mb: 2,
              },
              '& a': {
                color: 'primary.main',
                textDecoration: 'underline',
              },
            }}
            dangerouslySetInnerHTML={{ __html: blog.content }}
          />
        </Box>

        {/* RIGHT SIDE – More Blogs Sidebar */}
        <Box
  sx={{
    flexBasis: { md: '25%' },
    flexShrink: 0,
    width: { xs: '100%', md: '25%' },
    mt: { xs: 4, md: 15 }, // <- more neeche ho gaya
    overflowY: { md: 'auto' },
    maxHeight: { md: 'calc(100vh - 120px)' },
    pl: { md: 1 },

    // Scrollbar hide
    '&::-webkit-scrollbar': {
      display: 'none',
    },
    scrollbarWidth: 'none',
    msOverflowStyle: 'none',
  }}
>
  <Typography variant="h5" fontWeight="bold" gutterBottom>
    More Blogs
  </Typography>

  {otherBlogs.map((item) => (
    <Card
      key={item.id}
      sx={{
        mb: 2,
        cursor: 'pointer',
        maxHeight: 240,
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'space-between',
        transition: '0.3s',
        '&:hover': { boxShadow: 4 },
      }}
      onClick={() => navigate(`/blog/${item.id}`)}
    >
      <CardMedia
        component="img"
        height="120"
        image={item.image}
        alt={item.title}
      />
      <CardContent sx={{ p: 1.5 }}>
        <Typography
          variant="subtitle2"
          fontWeight="bold"
          noWrap
          sx={{ fontSize: '0.95rem' }}
        >
          {item.title}
        </Typography>
        <Typography
          variant="body2"
          color="text.secondary"
          noWrap
          sx={{ fontSize: '0.85rem' }}
        >
          {item.summary}
        </Typography>
      </CardContent>
    </Card>
  ))}
</Box>

      </Box>
    </Container>
  );
};

export default BlogDetail;
