
import { useLayoutEffect } from "react";
import { useLocation } from "react-router-dom";
  
export default function GoToTop() {
  const routePath = useLocation();
 
  useLayoutEffect(() => {
    window.scrollTo({
      top: 0,
      left: 0,
      behavior: 'instant'
    });
    
  }, [routePath]);
  
  return null;
}