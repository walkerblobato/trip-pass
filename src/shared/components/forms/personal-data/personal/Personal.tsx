import { Box, Grid, MenuItem, Typography } from '@mui/material';
import { VTextField, VDateField, VCheckbox } from '../../../../forms';
import { EnvironmentForms } from '../../../../environment/forms';
import { EnvironmentPlaces } from '../../../../environment/countries';


export const Personal = () => {

  return (
    <>
      <Typography variant='h5' paddingBottom={3}>Dados Pessoais</Typography>

      <Box paddingBottom={2}>
        <Grid container spacing={1}>

          <Grid item xs={9}>
            <VTextField
              fullWidth
              label='Nome Completo'
              name='NomeCompleto'
            />
          </Grid>

          <Grid item xs={3}>
            <VTextField
              select
              fullWidth
              label='Sexo'
              name='Sexo'
            >
              {EnvironmentForms.CHOOSE_GENDER.map((option) => (
                <MenuItem key={option.value} value={option.label}>
                  {option.label}
                </MenuItem>
              ))}
            </VTextField>
          </Grid>

        </Grid>
      </Box>

      <Box paddingBottom={2}>
        <Grid container spacing={2}>
          
          <Grid item xs={9}>
            <VTextField
              fullWidth
              label='Filiação 1'
              name='Filiação1'
            />
          </Grid>

          <Grid item xs={3}>
            <VTextField
              select
              fullWidth
              label='Sexo'
              name='SexoF1'
            >
              {EnvironmentForms.CHOOSE_GENDER.map((option) => (
                <MenuItem key={option.value} value={option.value}>
                  {option.label}
                </MenuItem>
              ))}
            </VTextField>
          </Grid>

        </Grid>
      </Box>

      <Box paddingBottom={2}>
        <Grid container spacing={2}>

          <Grid item xs={9}>
            <VTextField
              fullWidth
              label='Filiação 2'
              name='Filiação2'
            />
          </Grid>

          <Grid item xs={3}>
            <VTextField
              select
              fullWidth
              label='Sexo'
              name='SexoF2'
            >
              {EnvironmentForms.CHOOSE_GENDER.map((option) => (
                <MenuItem key={option.value} value={option.value}>
                  {option.label}
                </MenuItem>
              ))}
            </VTextField>
          </Grid>

        </Grid>
      </Box>

      <Box paddingBottom={2}>
        <Grid container spacing={2}>

          <Grid item xs={5}>
            <VDateField
              label="Data de nascimento"
              format="DD-MM-YYYY"
            />
          </Grid>

          <Grid item xs={3}>
            <VCheckbox label="Emancipado" />
          </Grid>

          <Grid item xs={4}>
            <VCheckbox label="Adoção Internacional" />
          </Grid>

        </Grid>
      </Box>

      <Box paddingBottom={2}>
        <Grid container spacing={8}>

          <Grid item xs={6}>
            <VTextField 
              select
              fullWidth
              label='Raça ou cor'
              name='RaçaOuCor'
            >
              {EnvironmentForms.CHOOSE_RACE_OR_COLOR.map(option => (
                <MenuItem key={option.value} value={option.value}>
                  {option.label}
                </MenuItem>
              ))}
            </VTextField>
          </Grid>

          <Grid item xs={6}>
            <VTextField 
              select
              fullWidth
              label='Estado Civil'
              name='EstadoCivil'
            >
              {EnvironmentForms.MARITAL_STATUS.map(option => (
                <MenuItem key={option.value} value={option.value}>
                  {option.label}
                </MenuItem>
              ))}
            </VTextField>
          </Grid>

        </Grid>       
      </Box>
      <Box paddingBottom={1}>
        <Grid container spacing={8}>

          <Grid item xs={6}>
            <VTextField 
              select
              fullWidth
              label='Nacionalidade'
              name='Nacionalidade'
            >
              {EnvironmentPlaces.CHOOSE_CONTRIES.map(option => (
                <MenuItem key={option.value} value={option.value}>
                  {option.label}
                </MenuItem>
              ))}
            </VTextField>
          </Grid>

          <Grid item xs={6}>
            <Typography variant='body2'>(Para brasileiros com múltipla nacionalidade, selecionar Brasil)</Typography>
          </Grid>

        </Grid>       
      </Box>
    </>
  );
};