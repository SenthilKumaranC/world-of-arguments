import * as React from 'react';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';

export default function RightBox() {
  return (
    <Box
      sx={{
        display: 'grid',
        flexWrap: 'wrap',
        '& > :not(style)': {
          m: 1,
          width: 400,
          height: 300,
          borderRadius : "40px"
        },
        gridTemplateColumns : "1fr 1fr"
      }}
    >
      <div></div>
      <Paper sx={{justifySelf:"flex-end"}} elevation={1} style={{boxShadow: "-4px 5px 37px -9px rgba(0,0,0,0.75)"}} />
    </Box>
  );
}