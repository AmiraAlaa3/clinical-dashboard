import { Box, Typography } from "@mui/material"
import CustomerChart from "../CustomerChart/CustomerChart.jsx"

const CustomerSatisfaction = () => {
    return (
        <Box component="div" sx={{
            width: "20.49356rem",
            height: "20.4375rem",
            borderRadius: "0.9375rem",
            boxShadow: "0px 4px 20px 0px rgba(238, 238, 238, 0.50)",
            border: "1px solid #F8F9FA",
            p: "2rem",
            ml: { xl: "6rem" }
        }}>
            <Typography variant="h4" sx={{
                fontFamily: 'poppins',
                fontSize: "1.25rem",
                fontWeight: 600,
                lineHeight: "2rem"
            }}>
                Customer Satisfaction
            </Typography>
            <Box component="div">
                <CustomerChart />
            </Box>

        </Box >
    )
}

export default CustomerSatisfaction

