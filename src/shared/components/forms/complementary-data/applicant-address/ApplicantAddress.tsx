import { Typography, Grid, Box, MenuItem } from '@mui/material';
import { VTextField } from '../../../../forms';
import { EnvironmentPlaces } from '../../../../environment/places';


export const ApplicantAddress = () => {

  return (
    <>
      <Typography variant='h5' paddingBottom={3}>Endereço do Requerente</Typography>

      <Box paddingBottom={2}>
        <VTextField
          select
          fullWidth
          label='País'
          name='Pais'
        >
          {EnvironmentPlaces.CHOOSE_CONTRIES.map(country => (
            <MenuItem key={country.value} value={country.label}>
              {country.label}
            </MenuItem>
          ))}
        </VTextField>
      </Box>

      <Box paddingBottom={2}>
        <Grid container spacing={2}>

          <Grid item xs={3}>
            <VTextField
              fullWidth
              label='CEP'
              name='Cep' 
            />
          </Grid>

          <Grid item xs={3}>
            <VTextField
              fullWidth
              label='UF'
              name='Uf' 
            />
          </Grid>

        </Grid>
      </Box>

      <Box paddingBottom={2}>
        <VTextField 
          fullWidth
          label='Nome da Cidade'
          name='NomeDaCidade'
        />
      </Box>

      <Box paddingBottom={2}>
        <VTextField 
          fullWidth
          label='Logradouro'
          name='Logradouro'
        />
      </Box>

      <Box paddingBottom={2}>
        <VTextField 
          fullWidth
          label='Distrito/Bairro'
          name='Distrito/Bairro'
        />
      </Box>

      <Box>
        <Grid container spacing={2}>

          <Grid item xs={1}>
            <VTextField
              fullWidth
              label='DDD'
              name='Ddd' 
            />
          </Grid>

          <Grid item xs={3}>
            <VTextField
              fullWidth
              label='Telefone'
              name='Telefone' 
            />
          </Grid>

        </Grid>
      </Box>
    </>
  );
};