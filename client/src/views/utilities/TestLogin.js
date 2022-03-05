import { Box, Button, Select, InputLabel, MenuItem, Stack, TextField, Grid, CardContent, Typography, Divider } from '@mui/material';
import { useState } from 'react';
import { useFormik, Form, FormikProvider } from 'formik';

import AnimateButton from 'ui-component/extended/AnimateButton';

import { gridSpacing } from 'store/constant';

// project imports
import MainCard from 'ui-component/cards/MainCard';
import SecondaryAction from 'ui-component/cards/CardSecondaryAction';

// ==============================|| TYPOGRAPHY ||============================== //
const INITIAL_VALUE = {
    website: 'https://maiamtruyentin.com/he-thong/dang-nhap',
    userId: '#UserName',
    passId: '#Password',
    buttonId: 'btn btn-primary',
    kindOfTest: 2
};
const TestLogin = () => {
    const [kindOfTest, setKindOfTest] = useState('');

    const formik = useFormik({
        initialValues: {
            website: '',
            userId: '',
            passId: '',
            buttonId: '',
            kindOfTest
        },
        onSubmit: async () => {
            fetch(`http://localhost:5000/login`, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(INITIAL_VALUE)
            })
                .then((res) => res.json())
                .then((data) => {
                    console.log(data);
                })
                .catch((err) => {
                    console.log(err);
                });
        }
    });
    const { handleSubmit, getFieldProps } = formik;
    const handleChange = (event) => {
        setKindOfTest(event.target.value);
        formik.setFieldValue('kindOfTest', event.target.value);
    };
    return (
        <MainCard title="Test Login" secondary={<SecondaryAction link="https://next.material-ui.com/system/typography/" />}>
            <Grid container spacing={gridSpacing}>
                <Grid item xs={12}>
                    <Grid container spacing={gridSpacing}>
                        <Grid item xs={12} md={8}>
                            <FormikProvider value={formik}>
                                <Form autoComplete="off" noValidate onSubmit={handleSubmit}>
                                    <Stack spacing={2}>
                                        <TextField id="outlined-basic" label="Website" {...getFieldProps('website')} variant="outlined" />
                                        <TextField id="outlined-basic" label="User ID" {...getFieldProps('userId')} variant="outlined" />
                                        <TextField id="outlined-basic" label="Pass ID" {...getFieldProps('passId')} variant="outlined" />
                                        <TextField
                                            id="outlined-basic"
                                            label="Button ID"
                                            {...getFieldProps('buttonId')}
                                            variant="outlined"
                                        />

                                        <InputLabel id="demo-simple-select-label">Kind of test</InputLabel>
                                        <Select
                                            labelId="demo-simple-select-label"
                                            id="kindOfTest"
                                            value={kindOfTest}
                                            label="Kind of test"
                                            name="kindOfTest"
                                            onChange={handleChange}
                                        >
                                            <MenuItem value={2}>Default</MenuItem>
                                            <MenuItem value={1}>SQL Injection</MenuItem>
                                        </Select>
                                    </Stack>
                                    <Box sx={{ mt: 2 }}>
                                        <AnimateButton>
                                            <Button
                                                fullWidth
                                                disableElevation
                                                size="large"
                                                type="submit"
                                                variant="contained"
                                                color="secondary"
                                            >
                                                Test
                                            </Button>
                                        </AnimateButton>
                                    </Box>
                                </Form>
                            </FormikProvider>
                        </Grid>
                        <Grid item xs={12} md={4}>
                            <MainCard content={false}>
                                <CardContent>
                                    <Grid container spacing={gridSpacing}>
                                        <Grid item xs={12}>
                                            <Grid container alignContent="center" justifyContent="space-between">
                                                <Grid item>
                                                    <Typography variant="h4">Result </Typography>
                                                </Grid>
                                            </Grid>
                                        </Grid>
                                        <Grid item xs={12}>
                                            <Grid container direction="column">
                                                <Grid item>
                                                    <Grid container alignItems="center" justifyContent="space-between">
                                                        <Grid item>
                                                            <Typography variant="subtitle1" color="inherit">
                                                                Website: Mái ấm truyền tin
                                                            </Typography>
                                                        </Grid>
                                                        <Grid item>
                                                            <Grid container alignItems="center" justifyContent="space-between">
                                                                <Grid item>
                                                                    <Typography
                                                                        sx={{ color: 'success.dark' }}
                                                                        variant="subtitle1"
                                                                        color="inherit"
                                                                    >
                                                                        Passed
                                                                    </Typography>
                                                                </Grid>
                                                            </Grid>
                                                        </Grid>
                                                    </Grid>
                                                </Grid>
                                                <Grid item>
                                                    <Typography variant="subtitle2" sx={{ color: 'success.dark' }}>
                                                        05/03/2022 11:10 PM
                                                    </Typography>
                                                </Grid>
                                            </Grid>
                                            <Divider sx={{ my: 1.5 }} />
                                            <Grid container direction="column">
                                                <Grid item>
                                                    <Grid container alignItems="center" justifyContent="space-between">
                                                        <Grid item>
                                                            <Typography variant="subtitle1" color="inherit">
                                                                Website: Mái ấm truyền tin
                                                            </Typography>
                                                        </Grid>
                                                        <Grid item>
                                                            <Grid container alignItems="center" justifyContent="space-between">
                                                                <Grid item>
                                                                    <Typography
                                                                        sx={{ color: 'error.dark' }}
                                                                        variant="subtitle1"
                                                                        color="inherit"
                                                                    >
                                                                        Failed
                                                                    </Typography>
                                                                </Grid>
                                                            </Grid>
                                                        </Grid>
                                                    </Grid>
                                                </Grid>
                                                <Grid item>
                                                    <Typography variant="subtitle2" sx={{ color: 'error.dark' }}>
                                                        05/03/2022 11:10 PM
                                                    </Typography>
                                                </Grid>
                                            </Grid>
                                        </Grid>
                                    </Grid>
                                </CardContent>
                            </MainCard>
                        </Grid>
                    </Grid>
                </Grid>
            </Grid>
        </MainCard>
    );
};

export default TestLogin;
