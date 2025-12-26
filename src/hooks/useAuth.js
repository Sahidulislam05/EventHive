import { useContext } from "react";
import { useAuth as useAuthContext } from "../context/AuthContext";

// Re-exporting from context for easier access if preferred, 
// or this file can just be the hook definition if we separate context.
// Based on typical structure, usually useAuth is just:
// import { AuthContext } from "../context/AuthContext";
// const useAuth = () => useContext(AuthContext);
// But since I successfully initiated AuthContext with useAuth export, 
// I will just re-export it here to match the file structure requested.

export default useAuthContext;
