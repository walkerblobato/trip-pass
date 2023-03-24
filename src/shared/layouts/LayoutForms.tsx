import { Box } from '@mui/material';


interface ILayoutFormsProps {
  children: React.ReactNode;
}
export const LayoutForms: React.FC<ILayoutFormsProps> = ({ children }) => {
  return (
    <Box
      width={800}
      height={500}
      padding={3}
      sx={{
        backgroundColor:'#F7F7F7'
      }}
    >
      {children}
    </Box>
  );
};