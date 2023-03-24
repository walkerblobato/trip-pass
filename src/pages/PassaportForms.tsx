import { Button, Box} from '@mui/material';
import { Form } from '@unform/web';

import { LayoutPage } from '../shared/layouts';
import { Header, PersonalData } from '../shared/components';

export const Main= () => {
  return (
    <LayoutPage>
      <Header />
      <Box margin={5}>
        <Form onSubmit={(dados) => console.log(dados)}>

          <PersonalData />

          <Box display='flex' justifyContent='center'>
            <Button
              variant='contained'
              color='primary'
              size='large'
              type='submit'
              sx={{
                width: 300
              }}
            >
              Baixar PDF
            </Button>
          </Box>
        </Form>
      </Box>
    </LayoutPage>
  );
};