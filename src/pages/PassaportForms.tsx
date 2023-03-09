import { Button, Box} from '@mui/material';

import { LayoutPage } from '../shared/layouts';
import { Header } from '../shared/components';

export const Main= () => {
  return (
    <LayoutPage>
      <Header />
      <Box margin={5}>
        <Box>
          <Button 
            variant='contained' 
            color='primary' 
            size='large'
            sx={{
              width: 300
            }}
          >
            Baixar PDF
          </Button>
        </Box>
      </Box>
    </LayoutPage>
  );
};