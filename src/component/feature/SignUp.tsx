import { ChangeEvent, useState } from 'react';
import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import Link from '@mui/material/Link';
import Box from '@mui/material/Box';
import LockOutlinedIcon from '@mui/icons-material/LockOutlined';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import Copyright from 'component/share/Copyright';
import { Link as RouterLink } from 'react-router-dom';
import useAuth from 'hook/useAuth';

const theme = createTheme();

type SignUpInfo = {
    firstName: string;
    lastName: string;
    email: string;
    password: string;
}

export default function SignUp() {

    const [signUpInfo, setSignUpInfo] = useState<SignUpInfo>({
        firstName: '',
        lastName: '',
        email: '',
        password: '',
    });

    const { signUp } = useAuth();

    const handleChange = (e: ChangeEvent<HTMLInputElement>): void => {
        const { name, value } = e.target;
        setSignUpInfo({ ...signUpInfo, [name]: value })
    }

    const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        signUp(signUpInfo.email, signUpInfo.password).then(error => {
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
                        Sign up
                    </Typography>
                    <Box component="form" noValidate onSubmit={handleSubmit} sx={{ mt: 1 }}>
                        <TextField
                            margin="normal"
                            autoComplete="given-name"
                            name="firstName"
                            required
                            fullWidth
                            id="firstName"
                            label="First Name"
                            autoFocus
                            value={signUpInfo.email}
                            onChange={handleChange}
                        />
                        <TextField
                            required
                            fullWidth
                            margin="normal"
                            id="lastName"
                            label="Last Name"
                            name="lastName"
                            autoComplete="family-name"
                            value={signUpInfo.email}
                            onChange={handleChange}
                        />
                        <TextField
                            required
                            fullWidth
                            margin="normal"
                            id="email"
                            label="Email Address"
                            name="email"
                            autoComplete="email"
                            value={signUpInfo.email}
                            onChange={handleChange}
                        />
                        <TextField
                            required
                            fullWidth
                            margin="normal"
                            name="password"
                            label="Password"
                            type="password"
                            id="password"
                            autoComplete="new-password"
                            value={signUpInfo.email}
                            onChange={handleChange}
                        />

                        <Button
                            type="submit"
                            fullWidth
                            variant="contained"
                            sx={{ mt: 3, mb: 2 }}
                        >
                            サインアップ
                        </Button>
                        <Box>
                            <Link
                                variant="body2"
                                component={RouterLink}
                                to='/sign-in'
                            >
                                すでにアカウントをお持ちの方
                            </Link>
                        </Box>
                    </Box>
                </Box>
                <Copyright sx={{ mt: 5 }} />
            </Container>
        </ThemeProvider>
    );
}