import { Box, Button, Select, InputLabel, MenuItem, FormControl, Grid, TextField } from '@mui/material';
import { useState } from 'react';

import AnimateButton from 'ui-component/extended/AnimateButton';

// project imports
import MainCard from 'ui-component/cards/MainCard';
import SecondaryAction from 'ui-component/cards/CardSecondaryAction';
import { gridSpacing } from 'store/constant';

// ==============================|| TYPOGRAPHY ||============================== //

const Typography = () => {
    const [age, setAge] = useState('');

    const handleChange = (event) => {
        setAge(event.target.value);
    };
    return (
        <MainCard title="Test Login" secondary={<SecondaryAction link="https://next.material-ui.com/system/typography/" />}>
            <Grid container spacing={gridSpacing}>
                <Grid item xs={12} sm={12}>
                    <Grid container direction="row" spacing={1}>
                        <FormControl sx={{ mb: 2 }} fullWidth>
                            <TextField fullWidth id="outlined-basic" label="Website" variant="outlined" />
                        </FormControl>
                        <FormControl sx={{ mb: 2 }} fullWidth>
                            <TextField fullWidth id="outlined-basic" label="Website" variant="outlined" />
                        </FormControl>
                        <FormControl sx={{ mb: 2 }} fullWidth>
                            <TextField fullWidth id="outlined-basic" label="Website" variant="outlined" />
                        </FormControl>
                        <FormControl sx={{ mb: 2 }} fullWidth>
                            <TextField fullWidth id="outlined-basic" label="Website" variant="outlined" />
                        </FormControl>
                        <FormControl fullWidth>
                            <InputLabel id="demo-simple-select-label">Age</InputLabel>
                            <Select
                                labelId="demo-simple-select-label"
                                id="demo-simple-select"
                                value={age}
                                label="Age"
                                onChange={handleChange}
                            >
                                <MenuItem value={10}>Ten</MenuItem>
                                <MenuItem value={20}>Twenty</MenuItem>
                                <MenuItem value={30}>Thirty</MenuItem>
                            </Select>
                        </FormControl>
                    </Grid>
                    <Box sx={{ mt: 2 }}>
                        <AnimateButton>
                            <Button disableElevation fullWidth size="large" type="submit" variant="contained" color="secondary">
                                Sign in
                            </Button>
                        </AnimateButton>
                    </Box>
                </Grid>
            </Grid>
        </MainCard>
    );
};

export default Typography;
