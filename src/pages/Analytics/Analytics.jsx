import { Box, Grid } from "@mui/material"
import CustomerGrowth from "../../components/CustomerGrowth/CustomerGrowth.jsx"
import Rating from "../../components/Rating/Rating.jsx"
const Analytics = () => {
    return (
        <Box component="section" className="container-fluid">
            <Grid container spacing={12}>
                <Grid item  sm={12} lg={6}>
                    <CustomerGrowth />
                </Grid>
                <Grid item  sm={12} lg={6}>
                    <Rating />
                </Grid>
            </Grid>
        </Box>
    )
}

export default Analytics
