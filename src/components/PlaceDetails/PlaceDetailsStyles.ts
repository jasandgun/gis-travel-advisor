import {styled} from '@mui/material/styles';
import {Chip, Typography} from "@mui/material";

const StyledChip = styled(Chip)(() => ({
  margin: '5px 5px 5px 0',
}));

const SpacingTypography = styled(Typography)(() => ({
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'space-between',
}));

const SubtitleTypography = styled(Typography)(() => ({
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'space-between',
  marginTop: '10px',
}));


export {
  StyledChip,
  SpacingTypography,
  SubtitleTypography,
};
