import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Basics from './Basics';

const styles = theme => ({
  root: {
    flexGrow: 1,
  }
});

class SimpleAppBar extends React.Component {
  state = { name: '' };
  
  handleChange = name => event => {
    this.setState({
      [name]: event.target.value,
    });

    console.log(this.state)
  };

  render() {
    const { classes } = this.props;

    return (
      <div className={classes.root}>
        <AppBar position="static" color="default">
          <Toolbar>
            <Typography variant="h6" color="inherit">
              Project RESON - Build your JSON resume based on https://jsonresume.org/
            </Typography>
          </Toolbar>        
        </AppBar>
        <Basics {...this.state} handleChange={this.handleChange} />
      </div>
    );
  }
}

SimpleAppBar.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(SimpleAppBar);