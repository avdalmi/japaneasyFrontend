import { useState, useEffect, SyntheticEvent } from 'react';
import { signUp } from '../../src/store/user/thunks';
import { selectToken } from '../../src/store/user/selectors';
import { useAppDispatch, useAppSelector } from '../hooks';
import { useNavigate, Link } from 'react-router-dom';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import Container from '@mui/material/Container';


export default function SignUp() {
    const [firstName, setFirstName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [lastName, setLastName] = useState("")
    
    const dispatch = useAppDispatch();
    const token = useAppSelector(selectToken);
    const navigate = useNavigate();

    useEffect(() => {
        if (token !== null) {
            navigate('/');
        }
    }, [token, navigate]);

    function submitForm(event: SyntheticEvent) {
        event.preventDefault();
    
        dispatch(signUp(firstName, lastName, email, password));

        setEmail('');
        setPassword('');
        setFirstName('');
      
    }

 

    return (
        <div>
        {!token
            ? "...loading"
            :
            < Container
            style={{
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'center',
                alignItems: 'center',
                height: '70vh'
            }}
        >
            <h1>Sign Up</h1>
            <Box
                component='form'
                style={{
                    display: 'flex',
                    flexDirection: 'column',
                    alignItems: 'center',
                    minWidth: '400px'
                }}
                sx={{
                    '& > :not(style)': { m: 1 }
                }}
                noValidate
                autoComplete='off'
            >
                <TextField
                    style={{ width: '100%' }}
                    name='firstName'
                    id='outlined-basic'
                    label='First name'
                    variant='outlined'
                    value={firstName}
                    onChange={(event) => setFirstName(event.target.value)}
                />
                 <TextField
                    style={{ width: '100%' }}
                    name='lastName'
                    id='outlined-basic'
                    label='Last name'
                    variant='outlined'
                    value={lastName}
                    onChange={(event) => setLastName(event.target.value)}
                />
                <TextField
                    style={{ width: '100%' }}
                    name='email'
                    id='outlined-basic'
                    label='Email'
                    variant='outlined'
                    value={email}
                    onChange={(event) => setEmail(event.target.value)}
                />
                <TextField
                    style={{ width: '100%' }}
                    name='password'
                    id='outlined-multiline'
                    label='Password'
                    type='password'
                    value={password}
                    onChange={(event) => setPassword(event.target.value)}
                />

                <Button
                    style={{ backgroundColor: '#343A40' }}
                    variant='contained'
                    type='submit'
                    onClick={submitForm}
                >
                    Sign up
                </Button>
                <Link style={{ color: '#343A40' }} to='/login'>
                    Click here to log in
                </Link>
            </Box>
                </Container >
                
            }
            </div>
    );
}