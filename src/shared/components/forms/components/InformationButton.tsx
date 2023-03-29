import { IconButton } from '@mui/material';
import QuestionMarkIcon from '@mui/icons-material/QuestionMark';


export const InformationButton = () => {
  return (
    <IconButton 
      arial-label='questionmarkicon' 
      size='small' 
      sx={{ 
        backgroundColor: '#78909C', 
        color: 'white', 
        borderRadius: '3px',
        transition: '1s ease-in-out',
        '&:hover': {
          backgroundColor: '#2a3940',
          transition: '1s ease-in-out'
        } 
      }}>
      <QuestionMarkIcon fontSize='small'/>
    </IconButton>
  );
};