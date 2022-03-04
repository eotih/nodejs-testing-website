import { Box, Button, Select, InputLabel, MenuItem, Stack, TextField } from '@mui/material';
import { useState } from 'react';
import { useFormik, Form, FormikProvider } from 'formik';

import AnimateButton from 'ui-component/extended/AnimateButton';

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
const Typography = () => {
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
            <FormikProvider value={formik}>
                <Form autoComplete="off" noValidate onSubmit={handleSubmit}>
                    <Stack spacing={2}>
                        <TextField id="outlined-basic" label="Website" {...getFieldProps('website')} variant="outlined" />
                        <TextField id="outlined-basic" label="User ID" {...getFieldProps('userId')} variant="outlined" />
                        <TextField id="outlined-basic" label="Pass ID" {...getFieldProps('passId')} variant="outlined" />
                        <TextField id="outlined-basic" label="Button ID" {...getFieldProps('buttonId')} variant="outlined" />

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
                            <Button fullWidth disableElevation size="large" type="submit" variant="contained" color="secondary">
                                Test
                            </Button>
                        </AnimateButton>
                    </Box>
                </Form>
            </FormikProvider>
        </MainCard>
    );
};

export default Typography;
