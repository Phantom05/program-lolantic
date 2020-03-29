import React, { useEffect } from 'react';
import Avatar from '@material-ui/core/Avatar';
import Button from '@material-ui/core/Button';
import CssBaseline from '@material-ui/core/CssBaseline';
import TextField from '@material-ui/core/TextField';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Checkbox from '@material-ui/core/Checkbox';
import Grid from '@material-ui/core/Grid';
import Box from '@material-ui/core/Box';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';
import { Copyright } from 'components/common/term';
import { Link } from 'react-router-dom';
import { mapper } from 'lib/mapper';
import { useImmer } from 'use-immer';
import { regPassword, regEmail } from 'lib/library';
// import FormHelperText from '@material-ui/core/FormHelperText';
import { storage } from 'lib/library';


const useStyles = makeStyles((theme) => ({
  paper: {
    // marginTop: theme.spacing(8),
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
  },
  avatar: {
    margin: theme.spacing(1),
    backgroundColor: theme.palette.secondary.main,
  },
  form: {
    width: '100%', // Fix IE 11 issue.
    marginTop: theme.spacing(1),
  },
  submit: {
    margin: theme.spacing(3, 0, 2),
  },
}));

const ENTER_KEY_CODE = 13;
const LoginState = {
  email: "",
  password: "",
  remember: false,
  error: {
    email: null,
    password: null,
  }
}

function Login(props) {
  const classes = useStyles();
  const [values, setValues] = useImmer(LoginState);
  const { onSubmit, isAutheticated } = props;


  const handleChange = config => {
    const { type, value } = config;
    setValues(draft => {
      draft[type] = value
    })
  }
  const handleBlur = config => {
    const { type, value } = config;
    setValues(draft => {
      draft[type] = value
    })
  }

  const handleSubmit = e => {
    e.preventDefault();
    if (!regEmail(values.email)) {
      setValues(draft => {
        draft.error.email = true;
      });
      alert('이메일을 확인해주세요.');
    } else if (!regPassword(values.password)) {
      setValues(draft => {
        draft.error.email = false;
        draft.error.password = true;
      });
      alert('비밀번호를 확인해주세요.');
    } else {
      if (values.remember) {
        storage.set('email', values.email)
      }
      onSubmit && onSubmit(values);
    }
  }


  const dev = () => {
    setValues(draft => {
      draft.email = 'monster2jy@gmail.com';
      draft.password = 'jun0070!';
    })
  }


  useEffect(() => {
    const rememberStorage = storage.get('email') || "";
    setValues(draft => {
      draft.email = rememberStorage;
      draft.remember = !!rememberStorage;
    })
  }, []);

  return (
    <div className={props.className}>
    <Container component="main" maxWidth="xs">
      <CssBaseline />
      <div className={classes.paper}>
        <Avatar className={classes.avatar}>
          {/* <LockOutlinedIcon /> */}
        </Avatar>
        <Typography component="h1" variant="h5">
          Sign in
        </Typography>
        <button onClick={dev}>dev</button>
        <form className={classes.form} noValidate>
          <TextField
            variant="outlined"
            margin="normal"
            required
            fullWidth
            id="email"
            label="Email Address"
            name="email"
            autoComplete="email"
            autoFocus
            autoComplete="off"
            error={values.error.email}
            aria-describedby="component-error-text"
            value={values.email}
            onChange={(e) => handleChange({ type: 'email', value: e.target.value })}
            onBlur={(e) => handleBlur({ type: 'email', value: e.target.value })}
          />

          <TextField
            variant="outlined"
            margin="normal"
            required
            fullWidth
            name="password"
            label="Password"
            type="password"
            id="password"
            autoComplete="current-password"
            error={values.error.password}
            value={values.password}
            onChange={(e) => handleChange({ type: 'password', value: e.target.value })}
            onBlur={(e) => handleBlur({ type: 'password', value: e.target.value })}
          />
          <Grid container>
            <Grid item xs={6}>
              <Checkbox
                onChange={(e) => handleChange({ type: "remember", value: e.target.checked })}
                value="remember"
                color="primary"
                checked={values.remember}
                id="remember"
              />
              <label htmlFor="remember" className="signin__info_tx">
                Remember Me
          </label>
            </Grid>
            <Grid item xs={6}>
              <span className="signin__info_box" >
                <Link to={mapper.pageUrl.resetPassword} className="signin__info_tx">
                  Forgot password?
              </Link>
              </span>
            </Grid>
          </Grid>
          <Button
            type="submit"
            fullWidth
            variant="contained"
            color="primary"
            className={classes.submit}
            onClick={handleSubmit}
          >
            Sign In
          </Button>
        </form>
      </div>
      <Box mt={8}>
        <Copyright />
      </Box>
    </Container>
    </div>
  );
}

export default Login;

