import Home from '../pages/Client/Home'
import Courses from '../pages/Client/Courses'
import CoursesDetail from '../pages/Client/CoursesDetail'
import NewsDetail from '../pages/Client/NewsDetail'
import News from '../pages/Client/News'
import AboutUs from '../pages/Client/AboutUs'
import Profile from '../pages/Client/Profile'
import { IPramsRoute } from './routes.interface'
import ErrorPage from '../pages/Error'

export const PublicRoute: IPramsRoute[] = [
    { path: '/', element: <Home /> },
    { path: '/NewsDetail/:id', element: <NewsDetail /> },
    { path: '/News', element: <News /> },
    { path: '/Profile', element: <Profile /> },
    { path: '/Courses/:id', element: <CoursesDetail /> },
    { path: '/Courses', element: <Courses /> },
    { path: '/AboutUs', element: <AboutUs /> },
    { path: '/*', element: <ErrorPage /> },
]
