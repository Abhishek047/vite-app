import { Box, CircularProgress } from '@mui/material';
import './loader.css';
import { LoadingComponent } from './LoadingComponent';

interface Props {
  width?: number | string;
  height?: number | string;
  sx?: { [key: string]: string | number };
  type?: 'circular' | 'custom';
}

export const Loader = ({ type = 'custom', ...rest }: Props) => {
  return (
    <Box className="loader-container" {...rest}>
      {type === 'custom' ? <LoadingComponent /> : <CircularProgress />}
    </Box>
  );
};

Loader.defaultProps = {
  width: '100vw',
  height: '100vh',
  sx: {},
  type: 'custom',
};
