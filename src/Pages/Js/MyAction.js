import { Box, Typography } from "@mui/material"
import { useTheme } from "@mui/material/styles";
import useMediaQuery from "@mui/material/useMediaQuery";
import bubbles from "../../image/MyAction/bubbles.svg";

import styles from '../Css//MyAction.module.css'

function MyAction() {
    const theme = useTheme();
    const isDesktop = useMediaQuery(theme.breakpoints.up("sm"));



    return (
        <Box
            style={{
                display: "flex",
                flexDirection: isDesktop ? "row" : "column",
                alignItems: "center",
                justifyContent: "center",
                gap: "30px",
                margin: isDesktop ? "40px 0px 20px 0px" : "40px 0px 30px 0px",
            }}
        >
            {/* Pyramid Structure */}
            <Box
                sx={{
                    display: "grid",
                    gridTemplateColumns: isDesktop ? "1fr 1fr " : "1fr",
                    justifyContent: "center",
                    gap: "20px",
                    padding: "20px",
                }}
            >


                {/* Second Row (2 Boxes) */}

                <Box
                    className={`${styles.blueBox} ${styles.box}`}
                    style={{ textAlign: "center" }}
                >
                    <img src={bubbles} />
                    <Typography variant="h4">מחירים הוגנים</Typography>
                    <Typography variant="h5">250 - 500 ש"ח</Typography>
                </Box>

                {/* Third Row (3 Boxes) */}
                <Box
                    className={`${styles.blueBox} ${styles.box}`}
                    style={{ textAlign: "center" }}>
                    <img src={bubbles} />
                    <Typography variant="h4" style={{ fontSize: "2rem" }}>לוכד מוסמך מטעם רשות הטבע והגנים</Typography>
                    <Typography variant="h5" style={{ fontSize: "1.45rem" }}>בעל היתר לכידה ושחרור בתוקף</Typography>
                </Box>

                <Box
                    className={`${styles.blueBox} ${styles.box}`}
                    style={{ textAlign: "center" }}>
                    <img src={bubbles} />
                    <Typography variant="h5" style={{ fontSize: "1.45rem" }}>פגיעה מינימלית ברכוש (במידה ויעלה צורך) רק באישור הלקוח!</Typography>
                    <Typography variant="h5" style={{ fontSize: "1.45rem" }}>יושר- מקצועיות- אמינות</Typography>
                </Box>

                <Box
                    className={`${styles.blueBox} ${styles.box}`}
                    style={{ textAlign: "center" }}
                >
                    <img src={bubbles} />

                    <Typography variant="h5" style={{ fontSize: "1.45rem" }} > עובד רק עם ציוד ברמה הגבוהה ביותר</Typography>
                    <Typography variant="h5" style={{ fontSize: "1.45rem" }}>לא תפגע כלל בנחש ותבטיח לכידה אפקטיבית</Typography>
                </Box>
            </Box>

            {/* Text Carousel */}
            <Box
                style={{
                    width: isDesktop ? "35%" : "100%",
                    objectFit: "contain",
                    marginBottom: "15%"
                }}
                sx={{
                    paddingLeft: "15%",
                    paddingRight: "auto",
                }}
            >
                <h1 style={{direction:"rtl"}}><strong>אז למה לקרוא לי ולא להתמודד עם הנחש בעצמכם?</strong></h1>
                <ul style={{ fontSize: "1.45rem", direction: "rtl" }}>
                    <li><Typography variant="h5" style={{ fontSize: "1.45rem" }} > כל הנחשים בישראל הינם חיה מוגנת על פי חוק אשר לכידה/פגיעה בה (לרבות הרגיתה) מהווים עבירה פלילית</Typography></li>
                    <li><Typography variant="h5" style={{ fontSize: "1.45rem" }} > רק לוכד נחשים מוסמך, שעבר קורס מורשה מטעם רשות הטבע והגנים, רשאי ללכוד ולשחרר נחשים </Typography></li>
                    <li><Typography variant="h5" style={{ fontSize: "1.45rem" }} > מסביר פנים, מכבד את הבית ויושביו</Typography></li>
                    <li><Typography variant="h5" style={{ fontSize: "1.45rem" }} > אני חי נחשים מילדות, מכיר בעל פה כל נחש שחי בארנו</Typography></li>
                    <li><Typography variant="h5" style={{ fontSize: "1.45rem" }} > רוכש כבוד לבעלי החים הללו ויודע מה חשיבותם לטבע שלנו</Typography></li>
                </ul>
            </Box>
            
        </Box>

    )
}

export default MyAction