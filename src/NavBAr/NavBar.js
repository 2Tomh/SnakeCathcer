import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { Box } from "@mui/material";
import styles from './Navbar.module.css'

function NavBar(){

    return(
        <Box>
        <Navbar className={styles.NavBar}>
            <Nav>
            </Nav>
        </Navbar>
        </Box>
    )
}

export default NavBar;