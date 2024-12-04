import { Box, Typography } from '@mui/material';
import snake from '../../image/snake1.jpg'
import styles from '../Css/MyServices.module.css'
import { useTheme } from "@mui/material/styles";
import useMediaQuery from "@mui/material/useMediaQuery";

function MyService() {
    const theme = useTheme();
    const isDesktop = useMediaQuery(theme.breakpoints.up("sm"));
    return (
        <Box className={styles.boxStyle}
        style={{
            // text-align: center;
            // text-align: right;
            // width: 88%;
            // margin-top:-15%


            width: isDesktop ? "" : "93%",
            objectFit: "contain",
            marginBottom: "15%",
            display: isDesktop ? "" : "flex",
            flexDirection:isDesktop ? "" : "column",
            alignItems:isDesktop ? "center" : "end",
            justifycontent:isDesktop ? "" : "center",
            textalign:isDesktop ? "right" : "center",
        }}>
            <h1>שירותים</h1>
            <Typography>
                <ul style={{ direction: "rtl" }}>
                <li className={styles.liStyles} >
                        <img src={snake} className={styles.imgStyle} />
                        <Typography className={styles.Typo}>
                            לכידה של כל זוחל באשר הוא ושחרור רחוק בטבע (בתיאום צמוד עם פקח רשות הטבע והגנים)
                        </Typography>
                    </li>

                  <li className={styles.liStyles} >
                        <img src={snake} className={styles.imgStyle} />
                        <Typography className={styles.Typo}>
                            סריקה לאיתור ושלילת הימצאות הנחש באזור המבוקש
                        </Typography>
                    </li>

                  <li className={styles.liStyles} >
                        <img src={snake} className={styles.imgStyle} />
                        <Typography className={styles.Typo}>
                            מתן הסבר אודות הנחש, האם חברים/אחים שלו בסביבה, והאם בכלל הוא מסוכן או שמע מועיל
                        </Typography>
                    </li>

                  <li className={styles.liStyles} >
                        <img src={snake} className={styles.imgStyle} />
                        <Typography className={styles.Typo}>
                            מתן פתרונות ודרכים למזעור הגעת נחשים לשטח המגורים
                        </Typography>
                    </li>

                  <li className={styles.liStyles} >
                        <img src={snake} className={styles.imgStyle} />
                        <Typography className={styles.Typo}>
                            <strong style={{ color: "red" }}>לא מדביר!</strong>
                            מחלץ נחשים מאזור המגורים ומשיב לסביבתם הטבעית הרחק מאזורים מיושבים
                        </Typography>
                    </li>

                </ul>
            </Typography >

        </Box >
    )
}

export default MyService