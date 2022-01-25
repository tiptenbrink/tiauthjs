import {BrowserRouter, Route, Routes} from "react-router-dom";
import AuthRedirect from "./AuthRedirect";
import AuthCallback from "./AuthCallback";
import React, {useEffect, useState} from "react";
import {AuthProvider, AuthState, useAuth} from "./AuthContext";
import Protected from "./Protected";
import Profile from "./Profile";

function App() {
    const [authState, setAuthState] = useState(new AuthState());
    const value = { authState, setAuthState }
    const [authLoad, setAuthLoad] = useState(false)

    useEffect(() => {
        if (!authLoad) {
            const authLoader = async () => {
                let loadedState = await useAuth()
                setAuthState(loadedState)
            }

            authLoader().then(() => setAuthLoad(true))
        }
    }, [])

    return (
      <AuthProvider value={value}>
        <BrowserRouter>
          <Routes>
            <Route path="/" element={ <div className="page">
                <Profile />
            </div>} />
            <Route path="/lg" element={<AuthRedirect />} />
            <Route path="/auth/callback" element={<AuthCallback />} />
            <Route path="/profile" element={<Protected />} />
          </Routes>
        </BrowserRouter>
      </AuthProvider>
  )
}

export default App
