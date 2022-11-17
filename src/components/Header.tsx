import React, { useState } from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import Avatar from '@mui/material/Avatar';
import Drawer from '@mui/material/Drawer';
import List from '@mui/material/List';
import Divider from '@mui/material/Divider';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from 'react-redux';
import { bindActionCreators } from 'redux';
import { actionCreators } from '../redux/';
import EditIcon from '@mui/icons-material/Edit';
import DeleteIcon from '@mui/icons-material/Delete';
import VisibilityIcon from '@mui/icons-material/Visibility';

function Header() {

    const state = useSelector((state: any) => state.schemaState);
    const [toggle, setToggle] = React.useState({
        left: false,
    });

    const dispatch = useDispatch();
    const { withdrawMoney } = bindActionCreators(actionCreators, dispatch);
    const { isloggedin } = bindActionCreators(actionCreators, dispatch);
    const { deleteschema } = bindActionCreators(actionCreators, dispatch);
    const { clearcreaterecipedata } = bindActionCreators(actionCreators, dispatch);

    const handleLogin = () => {
        isloggedin(false)
    }

    const handleClear = () => {
        clearcreaterecipedata([])
    }

    const toggleDrawer = (anchor: any, open: boolean) => (event: any) => {
        if (event.type === 'keydown' && (event.key === 'Tab' || event.key === 'Shift')) {
            return;
        }

        setToggle({ ...toggle, [anchor]: open });
    };

    const list = (anchor: any) => (
        <Box
            sx={{ width: 250 }}

            role="presentation"
            onClick={toggleDrawer('left', false)}
            onKeyDown={toggleDrawer('left', false)}
        >
            <List>
                <ListItem>
                    <ListItemButton style={{ width: "100%" }}>
                        <Link to="/testing" className="sidebaritem">
                            <ListItemText primary="Create Schema" />
                        </Link>
                    </ListItemButton>

                </ListItem>
                {
                    state.cart.map((i: any) => {
                        return (
                            <ListItem>
                                <ListItemButton style={{ width: "100%" }} onClick={() => withdrawMoney(i)}>
                                    <Link to="/schemasui" className="sidebaritem">
                                        <ListItemText primary={i.id} style={{ textDecoration: "none" }} />
                                    </Link>
                                    <ListItemIcon>
                                        <Link to="/schemasui">
                                            <VisibilityIcon onClick={() => withdrawMoney(i)} style={{ marginLeft: "20px" }} />
                                        </Link>
                                        <Link to="/editschema">
                                            <EditIcon style={{ marginLeft: "20px" }} />
                                        </Link>
                                        <Link to="/">
                                            <DeleteIcon onClick={() => deleteschema(i)} style={{ marginLeft: "20px" }} />
                                        </Link>
                                    </ListItemIcon>
                                </ListItemButton>
                            </ListItem>
                        )
                    })
                }
                <ListItem>
                    <ListItemButton style={{ width: "100%" }}>
                        <Link to="/settings" className="sidebaritem">
                            <ListItemText primary="Settings" />
                        </Link>
                    </ListItemButton>
                </ListItem>
                <ListItem>
                    <ListItemButton style={{ width: "100%" }} onClick={handleClear}>
                            <ListItemText primary="Clear Recipe Data" />
                    </ListItemButton>
                </ListItem>
            </List>
        </Box>
    );

    return (
        <div>
            <Box sx={{ flexGrow: 1, }}>
                <AppBar position="static">
                    <Toolbar>
                        <IconButton
                            size="large"
                            edge="start"
                            color="inherit"
                            aria-label="menu"
                            sx={{ mr: 2 }}
                            onClick={toggleDrawer('left', true)}
                        >
                            <MenuIcon />
                        </IconButton>
                        <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
                            <Link to="/" className="navigationhome">Home</Link>
                        </Typography>
                        <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
                            <Link to="/editexperimentplan" className="navigationhome">Edit Experiment Plan</Link>
                        </Typography>
                        <Typography variant="h6" component="div" sx={{ p: 0 }}>
                            <Link to="/login" className="navigationhome" style={{ cursor: "pointer" }} onClick={handleLogin}>Logout</Link>
                        </Typography>
                    </Toolbar>
                </AppBar>
            </Box>
            <div>
                <React.Fragment>
                    <Drawer
                        anchor='left'
                        open={toggle['left']}
                        onClose={toggleDrawer('left', false)}
                    >
                        {list('left')}
                    </Drawer>
                </React.Fragment>

            </div>
        </div>
    )
}

export default Header