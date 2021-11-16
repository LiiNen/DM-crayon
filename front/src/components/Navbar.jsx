import { AppBar, Toolbar, Box } from '@mui/material';
import StyledLink from './StyledLink';

export default function Navbar() {
  return (
    <AppBar elevation={0} position="fixed" style={{ backgroundColor: 'black' }}>
      <Toolbar>
        <StyledLink to="/">
          <h2 style={{ margin: 0, color: 'white' }}>DM_#19</h2>
        </StyledLink>
        <Box sx={{ flexGrow: 1 }} />
      </Toolbar>
    </AppBar>
  );
}
