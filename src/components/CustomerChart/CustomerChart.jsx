import Chart from "react-apexcharts";
import { Box } from "@mui/material";
const CustomerChart = () => {
    const series = [{
        name: 'Last Month',
        data: [31, 40, 28, 51, 42, 109, 100]
    }, {
        name: 'This Month',
        data: [11, 32, 45, 32, 34, 52, 41]
    }]
    const options = {
        grid: {
            show: false
        },
        chart: {
            toolbar: {
                show: false
            },
            height: 350,
            type: 'area'
        },
        dataLabels: {
            enabled: false
        },
        stroke: {
            curve: 'smooth'
        },
        xaxis: {
            labels: {
                formatter: (val) => {
                    return ''
                }
            }
        },
        yaxis: {
            labels: {
                formatter: (val) => {
                    return ''
                }
            }
        },
        tooltip: {
            x: {
                format: 'dd/MM/yy HH:mm'
            },
        },

    };

    return (
        <>
        <Chart
            options={options}
            series={series}
            type="area"
            width={'100%'}
            height={190}
        />
        <Box component="div" sx={{
            display: 'flex',
            justifyContent: 'center',
            gap: '2rem',
            color: '#141D21',
            fontSize: '14px',
            fontWeight: 500,
        }}>
            <p>$3,004</p>
            <p>$4,504</p>
        </Box>
        </>
    )
}

export default CustomerChart

