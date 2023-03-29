import { Box } from '@mui/material';


interface ILayoutFormsProps {
  children: React.ReactNode;
}
export const LayoutForms: React.FC<ILayoutFormsProps> = ({ children }) => {
  return (
    <Box
      padding={3}
      margin={5}
      sx={{
        backgroundColor:'#F7F7F7'
      }}
    >
      {children}
    </Box>
  );
};