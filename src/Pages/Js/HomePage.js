import Carousel from 'react-material-ui-carousel'
import useMediaQuery from "@mui/material/useMediaQuery";
import { useTheme } from "@mui/material/styles";

import { Box, Paper, Typography } from '@mui/material';

import About from '../Js/About'
import MyAction from '../Js/MyAction'
import MyServics from '../Js/MyService'
import styles from '../Css/HomePage.module.css'

import slide1 from '../../image/HomePage/img1.jpeg'
import slide2 from '../../image/HomePage/img2.jpeg'
import slide3 from '../../image/HomePage/img3.jpeg'
import slide4 from '../../image/HomePage/img4.jpeg'
import slide5 from '../../image/HomePage/img5.jpeg'
import slide6 from '../../image/HomePage/img6.jpeg'
import slide7 from '../../image/HomePage/img7.jpeg'
import slide8 from '../../image/HomePage/img8.jpeg'
import slide9 from '../../image/HomePage/img9.jpeg'


function HomePage() {
    const items = [
        { img: slide1, className: "fadeInUp" },
        { img: slide2, className: "fadeInUp" },
        { img: slide3, className: "fadeInUp" },
        { img: slide4, className: "fadeInUp" },
        { img: slide5, className: "fadeInUp" },
        { img: slide6, className: "fadeInUp" },
        { img: slide7, className: "fadeInUp" },
        { img: slide8, className: "fadeInUp" },
        { img: slide9, className: "fadeInUp" },
    ]

    const theme = useTheme();
    const isDesktop = useMediaQuery(theme.breakpoints.up("sm"));

    return (
        <Box>
            <About
                containerStyles={slideShowContainerStyles}
                imageStyles={slideShowImageStyles}
                backgroundImageStyles={slideShowBackgroundStyles}
            />
            <Box
                className={styles.boxContainer}
                style={{
                    flexDirection: isDesktop ? "row" : "column",
                    display: isDesktop ? "flex" : "flex",
                    margin: isDesktop ? "40px 0px 20px 0px" : "40px 0px 30px 0px",
                    height: isDesktop ? "300px" : "unset",
                }}
            >

                <Box
                    className={styles.boxCarosuel}
                    style={{
                        width: isDesktop ? '30%' : '78%',

                    }}

                >
                    <Carousel
                        autoPlay={true}
                        interval={2500}
                        indicatorIconButtonProps={{ style: { display: "none" } }}
                    >
                        {items.map((item, i) => <Item key={i} item={item} />)}
                    </Carousel>
                </Box>

                <Box
                    className={styles.boxTypo}
                    style={{ width: isDesktop ? "42%" : "100%" }}
                >
                    <Typography
                        variant="h3"
                        style={{
                            fontStyle: "italic",
                            fontFamily: "cursive",
                            direction: "rtl",
                            display: isDesktop ? "" : "grid",
                            placeItems: isDesktop ? "" : "center",
                            gridTemplateColumns: isDesktop ? "" : "1fr",
                            paddingRight: isDesktop ? "" : "20px",
                            placeItems: isDesktop ? "" : "center"
                        }}
                    >
                        נתקלת בנחש או כל זוחל אחר, בבית או בחצר?
                    </Typography>

                    <Typography
                        style={{ fontFamily: "system-ui", direction: "rtl" }}
                        variant="h6"
                    >
                        <ul className={styles.ulStyle}
                        style={{
                           
                            display: isDesktop ? "" : "grid",
                            placeItems: isDesktop ? "" : "center",
                            gridTemplateColumns: isDesktop ? "" : "1fr",
                            paddingRight: isDesktop ? "" : "10px",
                            placeItems: isDesktop ? "" : "center",
                            width: isDesktop ? "" : "max-content"
                        }}
                    >
                            <h3>בזמן הזה<strong style={{ color: "red" }}> חשוב!</strong> </h3>

                            <li >
                                <Typography className={styles.Typo}>לא להתקרב לנחש</Typography>
                            </li>
                            <li >
                                <Typography className={styles.Typo}>לא לבצע פעולות שעשויות להבריח אותו למקומות לא נגישים</Typography>
                            </li>
                            <li >
                                <Typography className={styles.Typo}>לנסות לשמור על קשר עין (ממרחק)</Typography>

                            </li>
                            <li >
                                <Typography className={styles.Typo}>אם אפשר לצלמו– מה טוב (לא חובה בכלל)</Typography>
                            </li>
                        </ul>
                    </Typography>
                </Box>
            </Box>
            <MyAction />
            <MyServics />
        </Box>

    );


}

function Item(props) {
    return (
        <Paper>
            <img style={{ height: '300px', width: "100%", objectFit: "contain" }} src={props.item.img} />
        </Paper>
    )
}

const slideShowImageStyles = {
    maxWidth: "400px",
    maxHeight: "700px",
    position: "absolute",
    right: "20%",
    top: "15%",
    height: "85%",
    zIndex: "999",
};
const slideShowContainerStyles = { position: "relative" };

const slideShowBackgroundStyles = {
    position: "absolute",
    top: 0,
    zIndex: "998",
    height: "100%",
};

export default HomePage;