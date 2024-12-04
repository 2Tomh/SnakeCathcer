import { Box, Typography } from "@mui/material"
import { useTheme } from "@mui/material/styles";
import useMediaQuery from "@mui/material/useMediaQuery";
import bubbles from "../../image/MyAction/bubbles.svg";
import snake from '../../image/snake1.jpg'
import TrappingLicense from '../../image/TrappingLicense.jpeg'
import styles from '../Css//MyAction.module.css'
import { useState } from "react";
import Modal from '@mui/material/Modal';



function MyAction() {
    const theme = useTheme();
    const isDesktop = useMediaQuery(theme.breakpoints.up("sm"));

    const [open, setOpen] = useState(false);
    const handleOpen = () => {
        setOpen(true);
    };
    const handleClose = () => {
        setOpen(false);
    };

    const [equipment, setEquipment] = useState(false)
    const handleOpenEquipment = () => {
        setEquipment(true);
    };
    const handleCloseEquipment = () => {
        setEquipment(false);
    };



    return (
        <Box
            className={styles.boxDes}
            style={{
                flexDirection: isDesktop ? "row" : "column",
                margin: isDesktop ? "40px 0px 20px 0px" : "40px 0px 30px 0px"
            }}
        >
            {/* Pyramid Structure */}
            <Box
                className={styles.boxPyramid}
                style={{
                    gridTemplateColumns: isDesktop ? "1fr 1fr " : "1fr",
                    display: "grid"
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
                    <button
                        className={styles.buttonBox}
                        onClick={handleOpen}
                    >
                        להצגת הרישיון
                    </button>

                    {/* Modal */}
                    <Modal
                        open={open}
                        onClose={handleClose}


                    >
                        <Box className={styles.ModalBox}
                            style={{
                                transform: "translate(-50%, -50%)",
                                width: "70%",
                                maxWidth: "70%",
                                maxHeight: "90vh",
                                overflow: "hidden",
                                width: isDesktop ? "50%" : "70%",
                                boxShadow: "0px 4px 10px rgba(0, 0, 0, 0.25)"
                            }}
                        >
                            <img
                                src={TrappingLicense}
                                alt="Trapping License"
                                style={{
                                    width: "100%",
                                    height: "auto",
                                    maxHeight: "max-content",
                                }}
                            />
                            <button
                                className={styles.buttonClose}
                                onClick={handleClose}>
                                X
                            </button>
                        </Box>
                    </Modal>

                </Box>
                <Box
                    className={`${styles.blueBox} ${styles.box}`}
                    style={{ textAlign: "center" }}>
                    <img src={bubbles} />
                    <Typography variant="h5" >פגיעה מינימלית ברכוש (במידה ויעלה צורך) רק באישור הלקוח!</Typography>
                    <Typography variant="h5" >יושר- מקצועיות- אמינות</Typography>
                </Box>

                <Box
                    className={`${styles.blueBox} ${styles.box}`}
                    style={{
                        textAlign: "center",

                    }}
                >
                    <img src={bubbles} />

                    <Typography variant="h5"  > עובד רק עם ציוד ברמה הגבוהה ביותר</Typography>
                    <Typography variant="h5" >לא תפגע כלל בנחש ותבטיח לכידה אפקטיבית</Typography>
                    <button
                        onClick={handleOpenEquipment}
                        className={styles.buttonBox}>
                        להצגת הציוד
                    </button>


                    {/* Modal */}
                    <Modal
                        open={equipment}
                        onClose={handleCloseEquipment}

                    >
                        <Box
                            className={styles.ModalBox}
                            style={{
                                transform: "translate(-50%, -50%)",
                                width: "70%",
                                maxWidth: "70%",
                                maxHeight: "90vh",
                                overflow: "hidden",
                                width: isDesktop ? "52%" : "70%",
                                boxShadow: "0px 4px 10px rgba(0, 0, 0, 0.25)"
                            }}
                        >
                            <ul>
                                <li className={styles.liStyles}>
                                    <Typography className={styles.Typo}>
                                        ידיי זהב – נחש לא ארסי יילכד בידים חשופות בלבד
                                    </Typography>
                                </li>

                                <li className={styles.liStyles} >
                                    <Typography className={styles.Typo}>
                                        פינצטה מצופה סיליקון – ללכידה של אבקועים (נחשים צעירים שזה עתה בקעו מהביצה)
                                    </Typography>
                                </li>

                                <li className={styles.liStyles} >
                                    <Typography className={styles.Typo}>
                                        מצלמה אנדוסקופית -  לסריקה ואיתור בחללים צרים, צינורות, בתוך קירות.
                                        לכל מקום אליו יכול לזחול הנחש – המצלמה מגיעה !
                                    </Typography>
                                </li>

                                <li className={styles.liStyles} >
                                    <Typography className={styles.Typo}>
                                        פנס יד וראש עוצמתי לסריקות גם בחשיכה מוחלטת
                                    </Typography>
                                </li>

                                <li className={styles.liStyles} >
                                    <Typography className={styles.Typo}>
                                        מוט לכידה הומני – שאינו פוגע בנחש
                                    </Typography>
                                </li>

                                <li className={styles.liStyles} >
                                    <Typography className={styles.Typo}>
                                        שמן לשחרור זוחלים ממלכודות דבק
                                    </Typography>
                                </li>
                            </ul>
                            <button
                                onClick={handleCloseEquipment}
                                className={styles.buttonClose}>
                                X
                            </button>
                        </Box>
                    </Modal>


                </Box>
            </Box >


            <Box
                style={{
                    width: isDesktop ? "36.8%" : "75%",
                    objectFit: "contain",
                    marginBottom: "15%",
                    display: isDesktop ? "" : "flex",
                    flexDirection:isDesktop ? "" : "column",
                    alignItems:isDesktop ? "" : "end",
                    justifycontent:isDesktop ? "" : "center",
                    textalign:isDesktop ? "" : "center",
                }}
                sx={{
                    paddingLeft: "15%",
                    paddingRight: "auto",
                }}
            >
                <h1 style={{ direction: "rtl" }}>
                    <strong>אז למה לקרוא לי ולא להתמודד עם הנחש בעצמכם?</strong>
                </h1>

                <ul style={{ fontSize: "1.5rem", direction: "rtl" }}>

                    <li className={styles.liStyles} >
                        <img src={snake} className={styles.imgStyle} />
                        <Typography className={styles.Typo}  >
                            כל הנחשים בישראל הינם חיה מוגנת על פי חוק אשר לכידתה,
                            פגיעה בה (לרבות הריגתה) מהווים עבירה פלילית
                            שדינה שנתיים מאסר או קנס כספי של אלפיי ש''ח
                        </Typography>
                    </li>

                    <li className={styles.liStyles} >
                        <img src={snake} className={styles.imgStyle} />
                        <Typography className={styles.Typo}>
                            רק לוכד נחשים מוסמך, שעבר קורס מורשה מטעם הרט''ג(רשות הטבע והגנים) רשאי ללכוד ולשחרר נחשים
                        </Typography>
                    </li>

                    <li className={styles.liStyles} >
                        <img src={snake} className={styles.imgStyle} />
                        <Typography className={styles.Typo}  >
                            אני חד חושים, עירני, ובעל נסיון רב. אצליח בסבירות גבוהה יותר למצוא את הנחש מבלי להסתכן.
                        </Typography>
                    </li>

                    <li className={styles.liStyles} >
                        <img src={snake} className={styles.imgStyle} />
                        <Typography className={styles.Typo} style={{ marginBottom: "15px" }}  >
                            אני חי נחשים מילדות, מכיר בעל פה כל נחש שחי בארצינו
                        </Typography>
                    </li>

                    <li className={styles.liStyles} >
                        <img src={snake} className={styles.imgStyle} />
                        <Typography className={styles.Typo}  >
                            מסביר פנים, מכבד את הבית ויושביו
                        </Typography>
                    </li>

                    <li className={styles.liStyles} >
                        <img src={snake} className={styles.imgStyle} />
                        <Typography className={styles.Typo} >
                            לעולם לא אנצל מצוקת אדם בשעתו הקשה (יודע כמה מלחיץ יכול להיות נחש בבית) כדי לגבות מחיר מוגזם.
                        </Typography>
                    </li>

                    <li className={styles.liStyles} >
                        <img src={snake} className={styles.imgStyle} />
                        <Typography className={styles.Typo}  >
                            רוכש כבוד לבעלי החיים הללו וידע מה חשיבותם לטבע שלנו
                        </Typography>
                    </li>
                </ul>
            </Box>

        </Box >

    )
}


export default MyAction