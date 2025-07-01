import BlogDetail from "../Components/BlogDetail/BlogDetail";
import About from "../Components/Pages/About/About";
import Blog from "../Components/Pages/Blogs/Blog";
import Contact from "../Components/Pages/Contact/Contact";
import Home from "../Components/Pages/Home/Home";
import Portfolio from "../Components/Pages/Portfolio/Portfolio";

export const routes = [
    {
        path: "/",
        element: <Home />
    },
    {
        path: "/Contact",
        element: <Contact/>
    },
    {
        path: "/Portfolio",
        element: <Portfolio />
    },
    {
        path: "/About",
        element: <About />
    },
    {
        path: "/Blog",
        element: <Blog />
    },
    {
        path:"/blog/:id",
         element:<BlogDetail />
    }
    ]