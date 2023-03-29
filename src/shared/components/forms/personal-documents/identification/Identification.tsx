import { Box, Grid, MenuItem, Typography } from '@mui/material';
import { VDateField, VTextField } from '../../../../forms';
import { EnvironmentPlaces } from '../../../../environment/places';


export const Identification = () => {
  return (
    <>
      <Typography variant='h5' paddingBottom={3}>Documento de Identificação</Typography>

      <Box paddingBottom={2}>
        <Grid container spacing={2}>

          <Grid item xs={8}>
            <VTextField 
              fullWidth
              label='Número'
              name='Numero'
            />
          </Grid>

          <Grid item xs={4}>
            <VDateField 
              label='Data de emissão'
              format='DD-MM-YYYY'
            />
          </Grid>

        </Grid>
      </Box>

      <Box paddingBottom={2}>
        <Grid container spacing={2}>

          <Grid item xs={8}>
            <VTextField 
              fullWidth
              label='Órgão emissor'
              name='OrgaoEmissor'
            />
          </Grid>

          <Grid item xs={4}>
            <VTextField
              select
              fullWidth
              label='UF de expedição'
              name='UfExpedicao'
            >
              {EnvironmentPlaces.CHOOSE_UF.map(option => (
                <MenuItem key={option.value} value={option.value}>
                  {option.value}
                </MenuItem>
              ))}
            </VTextField>
          </Grid>

        </Grid>
      </Box>
    </>
  );
};