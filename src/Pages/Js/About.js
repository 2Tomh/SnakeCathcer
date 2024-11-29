import { Box, Typography } from "@mui/material";
import { useTheme } from "@mui/material/styles";
import useMediaQuery from "@mui/material/useMediaQuery";
import LocalPhoneRoundedIcon from '@mui/icons-material/LocalPhoneRounded';

import WhatsAppIcon from '@mui/icons-material/WhatsApp';
import FacebookIcon from '@mui/icons-material/Facebook';
import Logo from '../../image/HomePage/Logo1.jpeg';
import styles from '../Css/About.module.css'




function About(props) {
    const {
        containerStyles,
    } = props;

    const theme = useTheme();
    const isDesktop = useMediaQuery(theme.breakpoints.up("sm"));
    const phone = +972525682488


    return (
        <Box
            style={{
                minWidth: "300px",
                minHeight: "300px",
                position: "relative",
                ...containerStyles,
                padding: isDesktop ? '40px' : '20px'
            }}>

            <Box
                component="img"
                src={Logo}
                alt="Logo"
                sx={{
                    width: isDesktop ? "70%" : "40%",
                    position: "absolute",
                    transform: 'translate(39%, -10%)',
                    maxHeight: "100%",
                }}
            />

            <div style={{ marginLeft: "10%" }}>
                <h1>?נתקלת בנחש</h1>

                <Box sx={{ display: "flex", flexDirection: "column", gap: "45px", marginTop: "20px" }}>
                    <ul style={{ listStyleType: "none", padding: 0, margin: 0, gap: "55px", display: "flex", flexDirection: "column" }}>
                        <li style={{ display: "flex", alignItems: "center", gap: "10px" }}>
                            <button
                                style={{
                                    background: "none",
                                    border: "none",
                                    outline: "none",
                                    boxShadow: "none",
                                }}
                                onClick={() => window.location.href = `tel:${phone}`}
                            >
                                <Typography className={styles.button} sx={{ fontSize: "1.5rem", fontWeight: "Bold",gap:"38px" }}>
                                    התקשרו עכשיו!
                                    <LocalPhoneRoundedIcon />
                                </Typography>
                            </button>
                        </li>

                        <li style={{ display: "flex", alignItems: "center", gap: "10px" }}>
                            <button
                                style={{
                                    background: "none",
                                    border: "none",
                                    outline: "none",
                                    boxShadow: "none",

                                }}
                                onClick={() => window.location.href = "https://www.facebook.com/share/18yKCrJwd3/"}
                            >
                                <Typography className={styles.facebook} sx={{ fontSize: "1.5rem", fontWeight: "Bold" , gap:"80px"}}>
                                    Facebook
                                    <FacebookIcon />
                                </Typography>
                            </button>
                        </li>

                        <li style={{ display: "flex", alignItems: "center", gap: "10px" }}>
                            <button
                                style={{
                                    background: "none",
                                    border: "none",
                                    outline: "none",
                                    boxShadow: "none",

                                }}
                                onClick={() => window.location.href = "https://wa.me/+972525682488?text=Hi!%20I%20would%20like%20to%20use your service."}
                            >
                                <Typography className={styles.whatsapp} sx={{ fontSize: "1.5rem", fontWeight: "Bold" ,height:"unset", gap:"80px"}}>
                                    whatsapp
                                   <WhatsAppIcon />
                                </Typography>
                            </button>
                        </li>
                    </ul>
                </Box>


            </div>
        </Box>


    );
}

export default About;
