import { Box, Typography } from '@mui/material';

export const Header = () => {
  return (
    <Box
      display='flex'
      justifyContent='center'
      alignItems='center'
      sx={{
        height: 150,
        width: '100vw',
        backgroundColor: '#0B174E'
      }}
    >
      <Typography 
        variant='h2'
        color='#FFFFFF'
        
      >
        TRIP PASS
      </Typography>
    </Box>
  );
};

