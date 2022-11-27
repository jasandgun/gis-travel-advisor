import {FormControl, Grid} from '@mui/material';
import {styled} from '@mui/material/styles';

const StyledFormControl = styled(FormControl)(({theme}) => ({
  margin: theme.spacing(1),
  minWidth: 120,
  marginBottom: '30px',
  marginTop: '10px',
}));

const ProgressWrapper = styled('div')(() => ({
  height: '600px',
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
}));

const Container = styled('div')(() => ({
  padding: '15px',
}));

const StyledGrid = styled(Grid)(() => ({
  height: '75vh',
  overflow: 'auto',
}));


export {
  Container,
  StyledFormControl,
  StyledGrid,
  ProgressWrapper,
};
