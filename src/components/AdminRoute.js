// import React from 'react';
// import { useSelector } from 'react-redux';
// import { Navigate } from 'react-router-dom';
//
// const AdminRoute = ({ children }) => {
//     const user = useSelector((state) => state.auth.user);
//
//     if (!user || !user.isAdmin) {
//         return <Navigate to="/login" />;
//     }
//
//     return children;
// };
//
// export default AdminRoute;