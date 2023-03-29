import { Button, Box} from '@mui/material';
import { Form } from '@unform/web';

import { LayoutForms, LayoutPage } from '../shared/layouts';
import { Header, PersonalData, PersonalDocuments } from '../shared/components';

export const Main= () => {
  return (
    <LayoutPage>
      <Header />
      <Box>
        <Form onSubmit={(dados) => console.log(dados)}>

          <PersonalData />
          <PersonalDocuments />
          
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