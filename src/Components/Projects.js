import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import ExpansionPanel from '@material-ui/core/ExpansionPanel';
import ExpansionPanelDetails from '@material-ui/core/ExpansionPanelDetails';
import ExpansionPanelSummary from '@material-ui/core/ExpansionPanelSummary';
import Typography from '@material-ui/core/Typography';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import styled from 'styled-components';
import Footer from './Shared/Footer';
import MunchTime from '../Images/MunchTime.png';
import uToob1 from '../Images/uToob-Home.png';
import uToob2 from '../Images/uToob-Detail.png';
import {Link} from 'react-router-dom';

const styles = theme => ({
  root: {
    width: '100%',
  },
  heading: {
    fontSize: theme.typography.pxToRem(15),
    flexBasis: '33.33%',
    flexShrink: 0,
  },
  secondaryHeading: {
    fontSize: theme.typography.pxToRem(15),
    color: theme.palette.text.secondary,
  },
});

class ControlledExpansionPanels extends React.Component {
  state = {
    expanded: null,
  };

  handleChange = panel => (event, expanded) => {
    this.setState({
      expanded: expanded ? panel : false,
    });
  };



  render() {
    const { classes } = this.props;
    const { expanded } = this.state;

    const HomeContainer = styled.div`
      background-color: #AEB1BF;
      height: ;
      width: ;
      padding-right: 10%;
      padding-left: 10%;
      position: absolute;
      padding-bottom: 100px;
      border-style: solid;
      border-left-width: ;
      border-left-color: #656773;
      border-right-width: ;
      border-right-color: #656773;
      position: relative;
      `

    return (
      <div className={classes.root}>
      <HomeContainer>
        <Typography variant='h2' align='center' style={{marginTop: '100px'}}>My List of Projects</Typography>
        <ExpansionPanel expanded={expanded === 'panel1'} onChange={this.handleChange('panel1')} style={{marginTop: '100px'}}>
          <ExpansionPanelSummary expandIcon={<ExpandMoreIcon />}>
            <Typography className={classes.heading}>React w/ Ruby on Rails</Typography>
          </ExpansionPanelSummary>
          <ExpansionPanelDetails>
            <img src={MunchTime} height='40%' width='40%' />
            <div style={{marginLeft: '5%'}}>
            <Typography variant='h6'>
              MunchTime
            </Typography>
            <br></br>
            <br></br>
            <Typography variant='body1'>
            A group order application I worked on with a team of 5 people for our final project at DevPoint Labs
            </Typography>
            <br></br>
            <br></br>
            <Link to='///itsmunchtime.herokuapp.com/login' target='_blank'>
            Live Demo
            </Link>
            &nbsp;
            &nbsp;
            <Typography variant='body1'>UN: admin@itsmunchtime.com, PW: password</Typography>
            <br></br>
            <Link to='///github.com/ejohns11-2019/ItsMunchTime' target='_blank'>
            Github Code Base
            </Link>
            </div>
          </ExpansionPanelDetails>
        </ExpansionPanel>
        <ExpansionPanel expanded={expanded === 'panel2'} onChange={this.handleChange('panel2')}>
          <ExpansionPanelSummary expandIcon={<ExpandMoreIcon />}>
            <Typography className={classes.heading}>Ruby on Rails</Typography>
          </ExpansionPanelSummary>
          <ExpansionPanelDetails>
            <div style={{width: '50%'}}>
            <Typography variant='h6'>
              uToob
            </Typography>
            <br></br>
            <br></br>
            <Typography variant='body1'>
            A YouTube clone built during the Ruby on Rails Hack-a-Thon at DevPoint Labs. Our team of 4 took First Place in the competition!
            </Typography>
            <br></br>
            <br></br>
            <Link to='///github.com/jonnyfluckey/utoob' target='_blank'>
            Github Code Base
            </Link>
            </div>
            <img src={uToob1} height='40%' width='40%' style={{marginLeft: '5%'}} />
          </ExpansionPanelDetails>
        </ExpansionPanel>
        <ExpansionPanel expanded={expanded === 'panel3'} onChange={this.handleChange('panel3')}>
          <ExpansionPanelSummary expandIcon={<ExpandMoreIcon />}>
            <Typography className={classes.heading}>Node</Typography>
          </ExpansionPanelSummary>
          <ExpansionPanelDetails>
            <Typography>
              Coming Soon....
            </Typography>
          </ExpansionPanelDetails>
        </ExpansionPanel>
        <ExpansionPanel expanded={expanded === 'panel4'} onChange={this.handleChange('panel4')}>
          <ExpansionPanelSummary expandIcon={<ExpandMoreIcon />}>
            <Typography className={classes.heading}>Angular</Typography>
          </ExpansionPanelSummary>
          <ExpansionPanelDetails>
            <Typography>
              Coming Soon....
            </Typography>
          </ExpansionPanelDetails>
        </ExpansionPanel>
      </HomeContainer>
      <Footer />
      </div>
    );
  }
}

ControlledExpansionPanels.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(ControlledExpansionPanels);