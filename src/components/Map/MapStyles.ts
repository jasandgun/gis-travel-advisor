import {styled} from '@mui/material/styles';
import {Paper} from "@mui/material";

const MapContainer = styled('div')(() => ({
  height: '85vh',
  width: '100%',
}));

const MarkerContainer = styled('div')(() => ({
  position: 'absolute',
  transform: 'translate(-50%, -50%)',
  zIndex: 1,
  '&:hover': {zIndex: 2},
}));

const StyledPaper = styled(Paper)(() => ({
  padding: '10px',
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'center',
  width: '100px',
}));

const PointerImg = styled('img')(() => ({
  cursor: 'pointer',
}));

export {
  MapContainer,
  MarkerContainer,
  PointerImg,
  StyledPaper,
};
