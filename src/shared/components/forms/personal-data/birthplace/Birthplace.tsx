import { Grid, Typography, Box, MenuItem } from '@mui/material';
import { VTextField } from '../../../../forms';
import { EnvironmentPlaces } from '../../../../environment/places';


export const Birthplace = () => {

  return (
    <>
      <Typography variant='h5' paddingBottom={3} paddingTop={3}>Local de Nascimento</Typography>

      <Box paddingBottom={2}>
        <Grid container spacing={2}>

          <Grid item xs={8}>
            <VTextField
              select
              fullWidth
              label='País'
              name='Pais'
            >
              {EnvironmentPlaces.CHOOSE_CONTRIES.map(option => (
                <MenuItem key={option.value} value={option.label}>
                  {option.label}
                </MenuItem>
              ))}
            </VTextField>
          </Grid>

          <Grid item xs={4}>
            <VTextField
              label='CEP'
              name='CEP'
            />
          </Grid>

        </Grid>
      </Box>

      <Box>
        <Grid container spacing={2}>

          <Grid item xs={8}>
            <VTextField
              fullWidth
              label='Cidade'
              name='Cidade'
            />
          </Grid>

          <Grid item xs={4}>
            <VTextField
              label='UF'
              name='UF'
            />
          </Grid>

        </Grid>
      </Box>
    </>
  );
};