import { Box, MenuItem, Typography, Grid } from '@mui/material';
import { InformationButton } from '../../components/InformationButton';
import { VTextField } from '../../../../forms';
import { EnvironmentForms } from '../../../../environment/forms';


export const PreviousPassport = () => {
  return (
    <>
      <Box display='flex' paddingBottom={3}>
        <Typography variant='h5' paddingRight={1}>Passaporte Anterior</Typography>
        <InformationButton />
      </Box>

      <Box paddingBottom={2}>
        <VTextField
          select
          fullWidth
          label='Situação'
          name='Situacao'
        >
          {EnvironmentForms.PREVIOUS_PASSPORT_SITUATIONS.map(situation => (
            <MenuItem key={situation.value} value={situation.value}>
              {situation.label}
            </MenuItem>
          ) )}
        </VTextField>
      </Box>

      <Box>
        <Grid container spacing={2}>

          <Grid item xs={3}>
            <VTextField 
              fullWidth
              label='Série'
              name='Serie'
            />
          </Grid>

          <Grid item xs={4}>
            <VTextField
              fullWidth 
              label='Número'
              name='Numero'
            />
          </Grid>

          <Grid item xs={5} marginTop={1}>
            <Typography variant='body2'>(Exemplo: Para o passaporte CP999999 a série é CP e o número é 999999.)</Typography>
          </Grid>
          
        </Grid>
      </Box>
    </>
  );
};