import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import styles from '../NavBAr/BottomNav.module.css'
import { Box } from "@mui/material";

function BottomNav(){

    return(
        <Box>
        <Navbar className={styles.BottomNavBar}>
            <Nav>
            </Nav>
        </Navbar>
        </Box>
    )
}

export default BottomNav