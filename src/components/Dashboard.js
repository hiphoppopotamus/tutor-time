import Navbar from './Navbar';
import CourseWidget from './CourseWidget';
import '../css/Dashboard.css'

const Dashboard = () => {
    return (
        <div>
            <Navbar />
            <div className="dashboard-container">
                <h1 className="dashhboard-header">TODAY LEARN WHAT Do you want</h1>
                <div className="course-widget-container">
                    <CourseWidget courseId="COSC169"/>
                    <CourseWidget courseId="2"/>
                    <CourseWidget courseId="3"/>
                    <CourseWidget courseId="4"/>
                    <CourseWidget courseId="5"/>
                    <CourseWidget courseId="6"/>
                </div>
            </div>
        </div>
    )

}

export default Dashboard;