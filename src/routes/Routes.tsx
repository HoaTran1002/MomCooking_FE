import Home from '../pages/Client/Home'
import Courses from '../pages/Client/Courses'
import CoursesDetail from '../pages/Client/CoursesDetail'
import NewsDetail from '../pages/Client/NewsDetail'
import News from '../pages/Client/News'
import AboutUs from '../pages/Client/AboutUs'
import Profile from '../pages/Client/Profile'
import { IPramsRoute } from './routes.interface'
import ErrorPage from '../pages/Error'
import Order from '../pages/Client/Order'
import Login from '../pages/Auth/login'
import Register from '../pages/Auth/register'
import FAQPage from '../pages/Client/FAQPage'
import Lessons from '../pages/Client/Lessons'
import Debit from '../pages/Client/Debit'
import Schedule from '../pages/Client/Schedule'
import OrderSuccess from '../pages/Client/OrderSuccess'

export const PublicRoute: IPramsRoute[] = [
    { path: '/', element: <Home /> },
    {path:"/Order", element:<Order/>},
    { path: '/NewsDetail/:id', element: <NewsDetail /> },
    { path: '/News', element: <News /> },
    { path: '/Profile', element: <Profile /> },
    { path: '/Courses/:id', element: <CoursesDetail /> },
    { path: '/Courses', element: <Courses /> },
    { path: '/Lessons', element: <Lessons /> },
    { path: '/Debit', element: <Debit /> },
    { path: '/Schedule', element: <Schedule /> },
    { path: '/OrderSuccess', element: <OrderSuccess /> },
    { path: '/AboutUs', element: <AboutUs /> },
    { path: '/Login', element: <Login /> },
    { path: '/Register', element: <Register /> },
    { path: '/FAQ', element: <FAQPage /> },
    { path: '/*', element: <ErrorPage /> },
]
