import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import BottomNavigation from '@material-ui/core/BottomNavigation';
import BottomNavigationAction from '@material-ui/core/BottomNavigationAction';
import PersonIcon from '@material-ui/icons/Person';
import DesktopMacIcon from '@material-ui/icons/DesktopMac';
import ContactMailIcon from '@material-ui/icons/ContactMail';
import {Link} from 'react-router-dom';

const styles = {
  root: {
    width: "100%",
    // height: "60px",
    position: "fixed",
    bottom: 0,
  },
};

class SimpleBottomNavigation extends React.Component {
  state = {
    value: 0,
  };

  handleChange = (event, value) => {
    this.setState({ value });
  };

  render() {
    const { classes } = this.props;
    const { value } = this.state;

    return (
      
      <BottomNavigation
        value={value}
        onChange={this.handleChange}
        showLabels
        className={classes.root}
      >
        <BottomNavigationAction label="About Me" icon={<PersonIcon />} />
        <BottomNavigationAction label="Projects" icon={<DesktopMacIcon />} />
        <Link to='/contact' title="Contact Info">
        <BottomNavigationAction label="Contact Info" icon={<ContactMailIcon />} />
        </Link>
      </BottomNavigation>
    );
  }
}

SimpleBottomNavigation.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(SimpleBottomNavigation);