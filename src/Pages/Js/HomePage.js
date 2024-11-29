import Carousel from 'react-material-ui-carousel'
import useMediaQuery from "@mui/material/useMediaQuery";
import { useTheme } from "@mui/material/styles";

import { Box, Paper, Typography } from '@mui/material';

import About from '../Js/About'
import MyAction from '../Js/MyAction'
import MyServics from '../Js/MyService'

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
                style={{
                    display: "-webkit-box",
                    flexDirection: isDesktop ? "row" : "column",
                    alignItems: "center",
                    justifyContent: "center",
                    gap: "30px",
                    margin: isDesktop ? "40px 0px 20px 0px" : "40px 0px 30px 0px",
                    height: isDesktop ? "300px" : "unset",
                }}
            >

                <Box
                    style={{
                        width: isDesktop ? '30%' : '100%',
                        objectFit: "contain",

                    }}
                    sx={{
                        paddingLeft: "15%",
                        paddingRight: "auto",

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
                    style={{
                        width: isDesktop ? "50%" : "100%",
                        display: "flex",
                        flexDirection: "column",
                        alignItems: "center",
                        justifyContent: "center",
                        gap: "30px",
                        textAlign: 'center',
                    }}
                >
                    <Typography
                        style={{ fontStyle: "italic", fontFamily: "cursive", direction: "rtl" }}
                        variant="h3"
                    >
                        נתקלת בנחש או כל זוחל אחר, בבית או בחצר?
                    </Typography>

                    <Typography
                        style={{ fontFamily: "system-ui" }}
                        variant="h6"
                    >
                        <ul style={{ listStyleType: "none", direction: "rtl", textAlign: "justify" }}>
                            <h3><strong style={{color:"red"}}>בזמן הזה</strong> חשוב!</h3>
                            
                            <li style={{ direction: "rtl" }}>לא להתקרב לנחש</li>
                            <li style={{ direction: "rtl" }}>להימנע ממגע איתו</li>
                            <li style={{ direction: "rtl" }}>לשמור על קשר עין שלא יברח</li>
                            <li style={{ direction: "rtl" }}>לא לבצע פעולות שעשוישות להבריח אותו למקומות לא נגישים</li>
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