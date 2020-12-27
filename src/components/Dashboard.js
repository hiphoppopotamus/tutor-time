import React, { Component } from 'react';
import CourseWidget from './CourseWidget';
import '../css/Dashboard.css'

class Dashboard extends Component {
    render() {
        return (
            <div className="dashboard-container">
                <h1 className="dashhboard-header">What do you want to do today?</h1>
                {/* <div className="course-widget-container"> */}
                    <CourseWidget />
                    <CourseWidget />
                    <CourseWidget />
                    <CourseWidget />
                    <CourseWidget />
                    <CourseWidget />
                    <CourseWidget />
                {/* </div> */}
            </div>
        )
    }

}

export default Dashboard;