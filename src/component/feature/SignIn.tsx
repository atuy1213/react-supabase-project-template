import { ChangeEvent, FormEvent, useState } from 'react';
import {Link as RouterLink} from 'react-router-dom'
import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import Link from '@mui/material/Link';
import Box from '@mui/material/Box';
import LockOutlinedIcon from '@mui/icons-material/LockOutlined';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import useAuth from 'hook/useAuth';
import Copyright from 'component/share/Copyright';

const theme = createTheme();

type SignInInfo = {
  email: string;
  password: string;
}

export default function SignIn() {

  const { signIn } = useAuth();

  const [signInInfo, setSignInInfo] = useState<SignInInfo>({
    email: "",
    password: "",
  });

  const handleChange = (e: ChangeEvent<HTMLInputElement>): void =>  {
    const { name, value } = e.target;
    setSignInInfo({ ...signInInfo, [name]: value })
  }

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    signIn(signInInfo.email, signInInfo.password).then(error => {
      if (error) {
        console.log(error);
      }
    })
  };

  return (
    <ThemeProvider theme={theme}>
      <Container component="main" maxWidth="xs">
        <Box
          sx={{
            marginTop: 8,
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
          }}
        >
          <Avatar sx={{ m: 1, bgcolor: 'secondary.main' }}>
            <LockOutlinedIcon />
          </Avatar>
          <Typography component="h1" variant="h5">
            Sign in
          </Typography>
          <Box component='form' onSubmit={handleSubmit} sx={{ mt: 1 }}>
            <TextField
              required
              fullWidth
              autoFocus
              margin="normal"
              label="Email Address"
              type="name"
              name='email'
              autoComplete="email"
              value={signInInfo.email}
              onChange={handleChange}
            />
            <TextField
              required
              fullWidth
              margin="normal"
              label="Password"
              type="password"
              name="password"
              autoComplete="current-password"
              value={signInInfo.password}
              onChange={handleChange}
            />
            <Button
              type="submit"
              fullWidth
              variant="contained"
              sx={{ mt: 3, mb: 2 }}
            >
              サインイン
            </Button>
            <Box>
              <Link
                variant="body2"
                component={RouterLink}
                to='/sign-up'
              >
                パスワードを忘れた方
              </Link>
            </Box>
            <Box>
              <Link
                variant="body2"
                component={RouterLink}
                to='/sign-up'
              >
                アカウントをお持ちでない方
              </Link>
            </Box>
          </Box>
        </Box>
        <Copyright sx={{ mt: 8, mb: 4 }} />
      </Container>
    </ThemeProvider>
  );
}