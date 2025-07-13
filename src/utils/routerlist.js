import Dashboard from "../screens/dashboard/Dashboard";
import Login from "../screens/login/Login";
import Signup from "../screens/signup/Signup";

export const ROUTER_APP = [
    {
        screenName: "Login",
        path: "/login",
        component: <Login />,
        auth_required: false
    },
    {
        screenName: "SignUp",
        path: "/signup",
        component: <Signup />,
        auth_required: false
    },
    {
        screenName: "Dashboard",
        path: "/",
        component: <Dashboard />,
        auth_required: true
    },
] 