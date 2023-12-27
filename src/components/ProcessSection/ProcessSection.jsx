import React from 'react';
import ProcessSec from "../../images/processSection.svg"
import { Box } from '@material-ui/core';

const ProcessSection = () => {
  return (
    <Box>
        <img
          src={ProcessSec}
          alt="Process Img"
          width="100%"
        />
    </Box>
  );
};

export default ProcessSection;
