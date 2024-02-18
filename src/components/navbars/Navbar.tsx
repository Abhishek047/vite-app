/* eslint-disable @typescript-eslint/no-explicit-any */
import { useNavigate, useLocation } from 'react-router-dom';
import {
  Box,
  Typography,
  Tabs,
  Tab,
  AppBar,
  Toolbar,
  Stack,
  Button,
  Container,
} from '@mui/material';
import './navbar.module.css';
import React, {
  useState,
  useEffect,
  forwardRef,
  useRef,
  SetStateAction,
} from 'react';
import { useGetScrollPosition } from '../../hooks/useGetScrollPosition';

const navItems = [
  {
    id: 1,
    button: 'Home',
    link: '/',
    index: 0,
  },
  {
    id: 2,
    button: 'About',
    link: '/about',
    index: 1,
  },
  {
    id: 3,
    button: 'Contact',
    link: '/contact',
    index: 2,
  },
];
const actionButton: {
  id: number;
  button: string;
  link: string;
  variant: 'text' | 'outlined' | 'contained';
}[] = [
  {
    id: 11,
    button: 'Log in',
    link: '/login',
    variant: 'outlined',
  },
  {
    id: 12,
    button: 'Sign up',
    link: '/sign-up',
    variant: 'contained',
  },
];

interface Props {
  setNavbarHeight: React.Dispatch<SetStateAction<number | null>>;
}

export const Navbar = ({ setNavbarHeight }: Props) => {
  const scrollPosition = useGetScrollPosition();
  const [tabValue, setTabValue] = useState<number>(0);
  const navigate = useNavigate();
  const location = useLocation();
  const ref = useRef<HTMLDivElement>(null);

  function a11yProps(index: number) {
    return {
      id: `simple-tab-${index}`,
      'aria-controls': `simple-tabpanel-${index}`,
    };
  }
  const handleChange = (link: string) => {
    navigate(link);
  };
  const handleClick = (link: string) => {
    console.log('link -> we can use above function too -> ', link);
  };

  useEffect(() => {
    const matchingNavItem = navItems.find(
      (item) => item.link === location.pathname
    );
    if (matchingNavItem) {
      setTabValue(matchingNavItem.index);
    }
  }, [location.pathname]);

  useEffect(() => {
    if (ref.current) {
      setNavbarHeight(ref.current.clientHeight);
    }
  }, [setNavbarHeight]);
  return (
    <div>
      <AppBar
        sx={{
          backgroundColor: '#ffffff',
        }}
        elevation={scrollPosition > 20 ? 3 : 0}
      >
        <Container maxWidth="xl">
          <div ref={ref as React.RefObject<HTMLDivElement>}>
            <Toolbar className="appbar-container">
              <Stack
                direction="row"
                alignItems="center"
                justifyContent="space-between"
                flexGrow={1}
              >
                <Box>
                  <Typography variant="h6" component="div">
                    Company Logo
                  </Typography>
                </Box>
                <Box>
                  <Tabs
                    color="secondary"
                    value={tabValue}
                    onChange={(__: React.SyntheticEvent, newValue) =>
                      setTabValue(newValue)
                    }
                  >
                    {navItems.map((item, index) => (
                      <Tab
                        key={item.id}
                        label={item.button}
                        onClick={() => handleChange(item.link)}
                        {...a11yProps(index)}
                      />
                    ))}
                  </Tabs>
                </Box>
                <Stack direction="row" gap={1}>
                  {actionButton.map((item) => (
                    <Button
                      onClick={() => handleClick(item.link)}
                      key={item.id}
                      variant={item.variant}
                    >
                      {item.button}
                    </Button>
                  ))}
                </Stack>
              </Stack>
            </Toolbar>
          </div>
        </Container>
      </AppBar>
    </div>
  );
};
