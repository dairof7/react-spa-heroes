import React from 'react'
import { Route, Routes } from 'react-router-dom'
import { HeroesRoutes } from '../heroes'
import { LoginPage } from '../auth'
import { Navbar } from '../ui'
import { PrivateRoute } from './PrivateRoute'
import { PublicRoutes } from './PublicRoute'

export const AppRouter = () => {
  return (
    <>
        <Routes>
            <Route path="/login" element={
              <PublicRoutes>
                <LoginPage />
              </PublicRoutes>
            }
            />
            <Route path="/*" element={
              <PrivateRoute>
                <HeroesRoutes />
              </PrivateRoute>
            }/>
        </Routes>
    </>
  )
}

// Alternative routing
// export const AppRouter = () => {
//   return (
//     <>
//         <Routes>
//             <Route path="login/*" element={
//               <PublicRoutes>
//                 <Routes>
//                   <Route path="/*" element={<LoginPage />} />
//                 </Routes>
//               </PublicRoutes>
//             }
//             />
//             <Route path="/*" element={
//               <PrivateRoute>
//                 <Routes>
//                   <Route path="/*" element={<HeroesRoutes />} />
//                 </Routes>
//               </PrivateRoute>
//             }/>
//         </Routes>
//     </>
//   )
// }

