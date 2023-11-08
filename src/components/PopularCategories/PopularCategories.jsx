import styles from '../../pages/Dashboard/Dashboard.module.css'
import PieChartComponent from '../Charts/PieChartComponent.jsx'
import './PopularCategories.css'
const PopularCategories = () => {
    return (
        <div className="row ">
            <div className="col-lg-6 p-3 chart">
                <div className={`p-3 pie ${styles.chartBackground}`}>
                    <div className="chart-header mb-4">
                        <h3 className={`${styles.chartTitle}`}>Popular Categories</h3>
                    </div>
                    <div className="d-flex align-items-center">
                        <PieChartComponent />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default PopularCategories
