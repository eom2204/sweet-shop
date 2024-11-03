import {Navigate} from 'react-router-dom';
import {AccessKey} from "../utils/AccessKey"; // Use Navigate instead of Redirect in React Router v6

const ProtectedRoute = ({children}) => {
    const token = AccessKey.get();  // Get the token from cookies

    // If token exists, render the children; otherwise, redirect to login
    const isAuthenticated = token && token.length > 0;

    return isAuthenticated ? children : <Navigate to="/login" />;
};

export default ProtectedRoute;