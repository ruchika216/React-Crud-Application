import React, { Component } from 'react'
import { Drawer, IconButton, withStyles } from "@material-ui/core";
import Avatar from '@material-ui/core/Avatar';
import Box from '@material-ui/core/Box';
import Link from '@material-ui/core/Link';
import Grid from '@material-ui/core/Grid';
import Container from '@material-ui/core/Container';
import LocationOnIcon from '@material-ui/icons/LocationOn';
import PhoneIcon from '@material-ui/icons/Phone';
import MailIcon from '@material-ui/icons/Mail';
import FacebookIcon from '@material-ui/icons/Facebook';
import TwitterIcon from '@material-ui/icons/Twitter';
import InstagramIcon from '@material-ui/icons/Instagram';
import TelegramIcon from '@material-ui/icons/Telegram';

const style = {
    sideMenu: {
        color: '#fff',
        display: 'flex',
        flexDirection: 'column',
        position: 'absolute',
        left: '0px',
        width: '320px',
        height: '100%',
        backgroundColor: '#060a28'
    },
    title: {
        textAlign: 'center',
        fontSize: '10px'
    }

}

export class SideMenu extends Component {
    state = {
        mobileOpen: false
    }

    handleMobileToggle = () => {
        this.setState({ mobileOpen: !this.state.mobileOpen });
    }
}
render() {
    const { classes } = this.props;
    const { mobileOpen } = this.state;
    return (
        <Drawer
            open={mobileOpen}
            onClose={this.handleMobileToggle}
        >
            <div className={classes.sideMenu}>

                <div className={classes.root}>
                    <Avatar alt="Company Logo" src="/static/images/avatar/1.jpg" style={{ backgroundColor: "lightblue", height: "115px", width: "115px", marginLeft: "92px" }} />

                </div>
                <div className={classes.title}>
                    <h1>Ruchika Solutions</h1>
                    <h5>Your Vision Our Future</h5>
                </div>
                <Box bgcolor="text.secondary" color="white">
                    <Container maxWidth="lg">
                        <Grid container spacing={5}>
                            <Grid item xs={12} sm={4}>
                                <Box borderBottom={1}>Contact</Box>
                                <Box>
                                    <IconButton aria-label="add to favorites" style={{ color: '#5d6566', fontSize: '12px', marginBottom: '-23px' }}>
                                        <LocationOnIcon /> Chandigarh,Punjab
                                </IconButton>
                                    <IconButton aria-label="add to favorites" style={{ color: '#5d6566', fontSize: '12px', marginBottom: '-23px' }}>
                                        <PhoneIcon /> 8677899000
                                </IconButton>
                                    <IconButton aria-label="add to favorites" style={{ color: '#5d6566', fontSize: '12px' }}>
                                        <MailIcon />axyz@gmail.com
                                </IconButton>
                                </Box>

                                <Box borderBottom={1}>Follow Us</Box>
                                <Box>
                                    <Link href="/" color="inherit">
                                        <IconButton aria-label="add to favorites" style={{ color: '#4267B2', fontSize: '12px' }}>
                                            <FacebookIcon />
                                        </IconButton>
                                    </Link>
                                    <Link href="/" color="inherit">
                                        <IconButton aria-label="add to favorites" style={{ color: '#1DA1F2', fontSize: '12px' }}>
                                            <TwitterIcon />
                                        </IconButton>
                                    </Link>
                                    <Link href="/" color="inherit">
                                        <IconButton aria-label="add to favorites" style={{ color: '#C13584', fontSize: '12px' }}>
                                            <InstagramIcon />
                                        </IconButton>
                                    </Link>
                                    <Link href="/" color="inherit">
                                        <IconButton aria-label="add to favorites" style={{ color: '#0088cc', fontSize: '12px' }}>
                                            <TelegramIcon />
                                        </IconButton>
                                    </Link>
                                </Box>


                            </Grid>
                        </Grid>
                    </Container>

                </Box>




            </div>
        </Drawer>
    )
}





export default SideMenu
