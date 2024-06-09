import React from 'react';
import Container from '@mui/material/Container';
import { Typography } from '@mui/material';
import Box from '@mui/material/Box';
import QuiltedImageList from '../components/ImageCollage';
import ControlledAccordions from '../components/Accordion';

const Tour = () => (
  <Container sx={{ width: 900 }}>
    <Typography variant="h3" component="h1" marginTop={3}>
      Explore the world in Vegas
    </Typography>
    <Box marginTop={3} sx={{ display: 'flex' }}>
      <img
        src="https://assets.simpleviewcms.com/simpleview/image/upload/c_limit,h_1200,q_75,w_1200/v1/clients/lasvegas/strip_b86ddbea-3add-4995-b449-ac85d700b027.jpg"
        alt="LasVegas tour"
        height={325}
      />
      <QuiltedImageList />
    </Box>
    <Box>
      <Typography variant="h6" component="h4">
        About this ticket
      </Typography>
      <Typography variant="h6paragraph" component="p">
        Lorem Ipsum
      </Typography>
      <Typography variant="h6paragraph" component="p">
        FAQs
      </Typography>
      <ControlledAccordions />
    </Box>
  </Container>
);

export default Tour;
