import React from 'react';
import { CountryDropdown, RegionDropdown } from 'react-country-region-selector';
import { Input, InputAdornment, Paper, Typography, Grid, TextField } from 'material-ui';
import FormButton from '../button/button';
import Header from '../Header/header';
import styles from './information.css';

const Information = (props) => (
  <div>
    <Header title="Fill in your details"/>
    <Paper className={styles.informationForm_container}>
      <Typography variant="title">
        General Info
      </Typography>
      <Grid container spacing={16}>
        <Grid item xs={12} md={4} lg={4} spacing={16}>
          <Grid container >
            <Input
            className={styles.m_t_b} 
            placeholder="First Name"
            fullWidth
            />
          </Grid>
        </Grid>
        <Grid item xs={12} md={4} lg={4} spacing={16}>
          <Grid container >
            <Input
            className={styles.m_t_b} 
            placeholder="Last Name"
            fullWidth
            />
          </Grid>
        </Grid>
        <Grid item xs={12} md={4} lg={4} spacing={16}>
          <Grid container>
            <p>Hello</p>
          </Grid>
        </Grid>
        </Grid>
        <Input
            className={styles.m_t_b} 
            placeholder="Headline"
            fullWidth
            />
            <Input
            className={styles.m_t_b} 
            placeholder="Current Position"
            fullWidth
            />
            <Input
            className={styles.m_t_b} 
            placeholder="Email"
            fullWidth
            />
            <Input
            className={styles.m_t_b} 
            placeholder="Mobile Number"
            fullWidth
            />
            <Input
            className={styles.m_t_b}
            multiline
            placeholder="Summary"
            rowsMax="4"
            fullWidth
            />
            <CountryDropdown
            value={props.countryValue}
            onChange={(val) => props.country(val)} />
            <RegionDropdown
            disableWhenEmpty={true}
            country={props.countryValue}
            value={props.regionValue}
            onChange={(val) => props.region(val)} />
            <FormButton btntext="Submit" icon="send" />
      </Paper>
    </div>
);

export default Information;