import '../css/CourseWidget.css';

const CourseWidget = (props) => {
    return (
        <div className="course-widget">
            <div className="course-widget-status" />
            <h1 className="course-widget-title"> {props.courseId} </h1>
            <p className="course-widget-role">You are a student</p>
        </div>   
    )
}

export default CourseWidget;