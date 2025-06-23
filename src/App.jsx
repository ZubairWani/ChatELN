// import { Routes, Route } from 'react-router-dom';

// // Page Imports
// import HomePage from './pages/HomePage';
// import SessionPage from './pages/SessionPage';
// import LoginPage from './pages/LoginPage';
// import RegisterPage from './pages/RegisterPage';
// // A 404 page is good practice, but for now, we'll redirect to home.

// // Layout Imports
// import MainLayout from './components/layout/MainLayout';
// import DashboardLayout from './components/layout/DashboardLayout'; // The layout with the sidebar logic
// import ProtectedRoute from './components/layout/ProtectedRoute';

// function App() {
//   return (
//     <Routes>
//       {/* === 1. PUBLIC ROUTES === */}
//       {/* These routes use a simple layout, often with a marketing header/footer. */}
//       <Route element={<MainLayout />}>
//         <Route path="/" element={<HomePage />} />
//         <Route path="/login" element={<LoginPage />} />
//         <Route path="/register" element={<RegisterPage />} />
//       </Route>

//       {/* === 2. CORE APPLICATION ROUTES (PROTECTED) === */}
//       {/* These are protected and render inside the DashboardLayout. */}
//       <Route element={<ProtectedRoute />}>
//         <Route element={<DashboardLayout />}>
//           {/* 
//             The <Outlet> inside DashboardLayout will render SessionPage for these paths.
//             This setup correctly handles both a new chat and an existing chat.
//           */}
//           <Route path="/dashboard" element={<SessionPage />} />
//           <Route path="/session/:sessionId" element={<SessionPage />} />
          
//         </Route>
//       </Route>
      
//       {/* === 3. ADMIN ROUTES (Optional) === */}
//       {/* Example of a separate protected route that might not use the chat layout. */}
//       {/* <Route path="/admin" element={
//         <ProtectedRoute>
//           <AdminDashboardPage />
//         </ProtectedRoute>
//       } /> */}

//       {/* === 4. FALLBACK ROUTE === */}
//       {/* Catches any route that doesn't match and redirects to the home page. */}
//       <Route path="*" element={<HomePage />} /> 
//     </Routes>
//   );
// }

// export default App;












import { Routes, Route } from 'react-router-dom';

// Page Imports
import HomePage from './pages/HomePage';
import SessionPage from './pages/SessionPage';
import LoginPage from './pages/LoginPage';
import RegisterPage from './pages/RegisterPage';
// --- NEW PAGE IMPORTS ---
import SettingsPage from './dashboard/pages/SettingsPage';
import UpgradePlanPage from './dashboard/pages/UpgradePlanPage';
import SearchChatsPage from './dashboard/pages/SearchChatPage';
// --- END NEW PAGE IMPORTS ---

// Layout Imports
import MainLayout from './components/layout/MainLayout';
import DashboardLayout from './components/layout/DashboardLayout';
import ProtectedRoute from './components/layout/ProtectedRoute';



function App() {
  return (
    <Routes>
      {/* === 1. PUBLIC ROUTES === */}
      {/* These routes use a simple layout, often with a marketing header/footer. */}
      <Route element={<MainLayout />}>
        <Route path="/" element={<HomePage />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/register" element={<RegisterPage />} />
      </Route>

      {/* === 2. CORE APPLICATION ROUTES (PROTECTED) === */}
      {/* These are protected and render inside the DashboardLayout. */}
      <Route element={<ProtectedRoute />}>
        <Route element={<DashboardLayout />}>
          {/* 
            The <Outlet> inside DashboardLayout will render the correct page based on the path.
          */}
          
          {/* Main Chat/Welcome Pages */}
          <Route path="/dashboard" element={<SessionPage />} />
          <Route path="/session/:sessionId" element={<SessionPage />} />
          
          {/* --- NEWLY ADDED ROUTES --- */}
          {/* These will also render inside the DashboardLayout, next to the sidebar */}
          <Route path="dashboard/settings" element={<SettingsPage />} />
          <Route path="dashboard/upgrade" element={<UpgradePlanPage />} />
          <Route path="dashboard/search" element={<SearchChatsPage />} />
          {/* --- END NEWLY ADDED ROUTES --- */}

        </Route>
      </Route>
      
      {/* === 3. ADMIN ROUTES (Optional) === */}
      {/* Example of a separate protected route that might not use the chat layout. */}
      {/* <Route path="/admin" element={
        <ProtectedRoute>
          <AdminDashboardPage />
        </ProtectedRoute>
      } /> */}

      {/* === 4. FALLBACK ROUTE === */}
      {/* Catches any route that doesn't match and redirects to the home page. */}
      <Route path="*" element={<HomePage />} /> 
    </Routes>
  );
}

export default App;