import { Box, Grid, Typography } from '@mui/material';
import { VTextField } from '../../../../forms';
import { InformationButton } from '../../components/InformationButton';


export const Cpf = () => {
  return (
    <>
      <Box display='flex' paddingBottom={3}>
        <Typography variant='h5' paddingRight={1}>CPF</Typography>
        <InformationButton />
      </Box>

      <Box paddingBottom={3}>
        <Grid container spacing={2}>

          <Grid item xs={6}>
            <VTextField 
              fullWidth
              label='CPF'
              name='Cpf'
            />
          </Grid>

          <Grid item xs={6}>
            <VTextField 
              fullWidth
              label='CPF do responsável'
              name='CpfResponsavel'
            />
          </Grid>

        </Grid>
      </Box>
    </>
  );
};