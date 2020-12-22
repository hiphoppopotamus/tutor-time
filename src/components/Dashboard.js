import React, { Component } from 'react';
import CourseWidget from './CourseWidget';
import '../css/Dashboard.css'

class Dashboard extends Component {
    render() {
        return (
            <div className="dashboard-container">
                <h1 className="dashhboard-header">What do you want to do today?</h1>
                <CourseWidget />
                <CourseWidget />
                <CourseWidget />
                <CourseWidget />
                <CourseWidget />
                <CourseWidget />
                <CourseWidget />
            </div>
        )
    }

}

export default Dashboard;