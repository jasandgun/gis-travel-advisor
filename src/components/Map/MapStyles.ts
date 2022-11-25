import { styled } from '@mui/material/styles';

const MapContainer = styled('div')(() => ({
  height: '85vh',
  width: '100%',
}));

const MarkerContainer = styled('div')(() => ({
  position: 'absolute', 
  transform: 'translate(-50%, -50%)', 
  zIndex: 1, 
  '&:hover': { zIndex: 2 },
}));



export{
  MapContainer,
  MarkerContainer,
};
