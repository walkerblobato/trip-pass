import { Box } from '@mui/material';


interface ILayoutPageProps {
  children: React.ReactNode;
}

export const LayoutPage: React.FC<ILayoutPageProps> = ({ children }) => {
  return (
    <Box 
      display='flex'
      flexDirection='column'
      alignItems='center'
      justifyContent='center'
      height='100%'
      overflow-x='hidden'
    >
      {children}
    </Box>
  );
};