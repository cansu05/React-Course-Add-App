import Angular from 'C:/Users/cansu/Desktop/course-add-app/src/images/angular.jpg'
import Bootstrap from 'C:/Users/cansu/Desktop/course-add-app/src/images/bootstrap5.png'
import CompleteWeb from 'C:/Users/cansu/Desktop/course-add-app/src/images/kompleweb.jpg'
import Ccsharp from 'C:/Users/cansu/Desktop/course-add-app/src/images/ccsharp.png'
import './courseAdd.css'

const courseMap = {
    Angular: Angular,
    Bootstrap: Bootstrap,
    CompleteWeb: CompleteWeb,
    Ccsharp: Ccsharp
}

const CourseAdd = ({courseName}) => {
  return (
    <div className='course-wrap'>
        <img className='course-img' src= {courseMap[courseName]} alt='course' />
    </div>
  )
}

export default CourseAdd