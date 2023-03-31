import { Box, Typography, Grid, MenuItem, TextField } from '@mui/material';
import { InformationButton } from '../../components/InformationButton';
import { VCheckbox, VTextField } from '../../../../forms';
import { EnvironmentForms } from '../../../../environment/forms';


export const BirthCertificate = () => {
  return (
    <>
      <Box display='flex' paddingBottom={3}>
        <Typography variant='h5' paddingRight={1}>Certidão</Typography>
        <InformationButton />
      </Box>

      <Box paddingBottom={2}>
        <VCheckbox label='Certidão modelo novo?' />
      </Box>

      <Box paddingBottom={2}>
        <Grid container spacing={2}>

          <Grid item xs={5}>
            <VTextField
              fullWidth
              label='Matrícula'
              name='Matricula'
            />
          </Grid>

        </Grid>
      </Box>

      <Box paddingBottom={2}>
        <Grid container spacing={2}>

          <Grid item xs={5}>
            <VTextField
              select
              fullWidth
              label='Tipo'
              name='Tipo'
            >
              {EnvironmentForms.TYPES_CERTIFICATE.map(type => (
                <MenuItem key={type.value} value={type.value}>
                  {type.label}
                </MenuItem>
              ))}
            </VTextField>
          </Grid>

          <Grid item xs={3.5}>
            <VTextField 
              label='Número'
              name='Numero'
            />
          </Grid>

          <Grid item xs={3.5}>
            <VTextField 
              label='Livro'
              name='Livro'
            />
          </Grid>

        </Grid>
      </Box>

      <Box paddingBottom={2}>
        <Grid container spacing={2}>

          <Grid item xs={5}>
            <VTextField 
              fullWidth
              label='Folha'
              name='Folha'
            />
          </Grid>

          <Grid item xs={7}>
            <VTextField
              fullWidth 
              label='Cartório'
              name='Cartorio'
            />
          </Grid>
          
        </Grid>
      </Box>

      <Box paddingBottom={3}>
        <Grid container spacing={2}>
          
          <Grid item xs={5}>
            <VTextField 
              fullWidth
              label='CEP de Expedição'
              name='CepExpedicao'
            />
          </Grid>

          <Grid item xs={3.5}>
            <VTextField 
              fullWidth
              label='UF de expedição'
              name='UfExpedicao'
            />
          </Grid>

          <Grid item xs={3.5}>
            <VTextField
              fullWidth 
              label='Cidade expedição'
              name='CidadeExpedicao'
            />
          </Grid>
          
        </Grid>
      </Box>
    </>
  );
};