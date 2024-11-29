import { Box, Typography } from '@mui/material';


function MyService() {

    return (
        <Box style=
            {{
                textAlign: "center",
                textAlign: "right",
                width: "94%",
                marginTop: "-15%"
            }}>
            <h1>שירותים</h1>
            <Typography>
                <ul style={{ direction: "rtl", listStyle: "none",  fontSize: "larger" }}>
                    <li>לכידה של כל זוחל באשר הוא ושחרור רחוק בטבע (בתיאום צמוד עם פקח רשות הטבע והגנים)</li>
                    <li>סריקה לאיתור ושלילת הימצאות הנחש באזור המבוקש</li>
                    <li>מתן הסבר אודות הנחש, האם חברים/אחים שלו בסביבה, והאם מסוכן או שמע מועיל</li>
                    <li>מתן פתרונות ודרכים למזעור הגעת הנחשים לשטח המגורים</li>
                    <li><strong style={{ color: "red" }}>לא מדביר!</strong> מחלץ נחשים מאזור המגורים ומשיב לסביבתם הטcעית הרחק מאזורים מיושבים</li>

                </ul>
            </Typography>

        </Box >
    )
}

export default MyService