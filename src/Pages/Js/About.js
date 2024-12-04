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
            className={styles.boxContainer}
            style={{
                ...containerStyles,
                padding: isDesktop ? '40px' : '20px'
            }}>

            <Box
                component="img"
                src={Logo}
                alt="Logo"
                sx={{
                    width: isDesktop ? "70%" : "100%",
                    position: "absolute",
                    transform: isDesktop ? 'translate(41%, -11%)' : 'translate(-4.8%, -13%);',
                    maxHeight: "100%",
                }}
            />

            <div style={{ marginLeft: "10%" }}>
                <h1 

                    style={{
                        display: isDesktop ? "" : "grid",
                        marginTop: isDesktop ? "" : "45%",
                        placeContent: isDesktop ? "" : " center",
                    }}>


                    ?נתקלת בנחש</h1>

                <Box className={styles.boxTypo}>
                    <ul className={styles.ulStyle}

                        style={{

                            display: isDesktop ? "" : "grid",
                            placeItems: isDesktop ? "" : "center",
                            gridTemplateColumns: isDesktop ? "" : "1fr",
                            paddingRight: isDesktop ? "" : "12%",
                            placeItems: isDesktop ? "" :"center"


                        }}>
                        <li className={styles.liStyle}>
                            <button
                                className={styles.buttonStyles}
                                onClick={() => window.location.href = `tel:${phone}`}
                            >
                                <Typography className={styles.Typo}>
                                    call me now
                                    <LocalPhoneRoundedIcon style={{ left: "auto" }} />
                                </Typography>
                            </button>
                        </li>

                        <li className={styles.liStyle}>
                            <button
                                className={styles.buttonStyles}
                                onClick={() => window.location.href = "https://www.facebook.com/share/18yKCrJwd3/"}
                            >
                                <Typography className={styles.Typo} >
                                    Facebook
                                    <FacebookIcon />
                                </Typography>
                            </button>
                        </li>

                        <li className={styles.liStyle}>
                            <button
                                className={styles.buttonStyles}
                                onClick={() => window.location.href = "https://wa.me/+972525682488?text=Hi!%20I%20would%20like%20to%20use your service."}
                            >
                                <Typography className={styles.Typo}>
                                    whatsapp
                                    <WhatsAppIcon />
                                </Typography>
                            </button>
                        </li>
                    </ul>
                </Box>


            </div >
        </Box >


    );
}

export default About;
