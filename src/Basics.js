import React from 'react';
import Typography from '@material-ui/core/Typography';
import TextField from '@material-ui/core/TextField';
import { withStyles } from '@material-ui/core/styles';

const styles = theme => ({
  textField: {
    marginLeft: theme.spacing.unit,
    marginRight: theme.spacing.unit,
    width: 200,
  }
})

const Basics = ({classes, handleChange, name, email}) => {
  return (
    <div>
      <Typography variant="h6" color="inherit">
        Basic Information
      </Typography>
      <TextField
        id="standard-name"
        label="Name"
        className={classes.textField}
        value={name}
        onChange={handleChange('name')}
        margin="normal"
      />
      <TextField
        id="standard-name"
        label="Email"
        className={classes.textField}
        value={email}
        onChange={handleChange('email')}
        margin="normal"
      />
      <TextField
        id="standard-full-width"
        label="Professional Summary"
        style={{ margin: 8 }}
        placeholder="Enter Professional Summary"
        fullWidth
        margin="normal"
        InputLabelProps={{
          shrink: true,
        }}
        onChange={handleChange('summary')}
        />
    </div>
  )
}

export default withStyles(styles)(Basics);