import { useEffect, useState } from "react"
import { Link } from "react-router-dom";

const GoTop = () => {
    const [isVisible, setIsVisible] = useState(false);

    const scrollToTop = () => {
      window.scrollTo({
        top: 0,
        behavior: "smooth"
      });
    };
  
    useEffect(() => {
      const toggleVisibility = () => {
        if (window.pageYOffset > 500) {
          setIsVisible(true);
        } else {
          setIsVisible(false);
        }
      };
  
      window.addEventListener("scroll", toggleVisibility);
  
      return () => window.removeEventListener("scroll", toggleVisibility);
    }, []);

    return (
        <>
            {isVisible && (
                <Link className="scroll-top scroll-to-target open" to='#' onClick={scrollToTop}>
                    <i className="fas fa-angle-up"></i>
                </Link>
            )}
        </>
    )
}
export default GoTop