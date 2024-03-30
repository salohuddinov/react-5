import About from "../pages/about/About"
import Blog from "../pages/blog/Blog"
import Careers from "../pages/carres/Careers"
import Contact from "../pages/contact/Contact"
import Project from "../pages/project/Project"
import Services from "../pages/servises/Services"


export const Routers = [
    {
        id: 1,
        title: "About",
        path: "/about",
        element: <About />
    },
    {
        id: 2,
        title: "Careers",
        path: "/careers",
        element: <Careers />
    },
    {
        id: 3,
        title: "Services",
        path: "/services",
        element: <Services />
    },
    {
        id: 4,
        title: "Blog",
        path: "/blog",
        element: <Blog />
    },
    {
        id: 5,
        title: "Contact ",
        path: "/contact",
        element: <Contact />
    },
    {
        id: 6,
        title: "Project",
        path: "/project",
        element: <Project />
    },

]