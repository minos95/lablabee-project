import FacebookIcon from "@mui/icons-material/Facebook";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import TwitterIcon from "@mui/icons-material/Twitter";
import { useNavigate } from "react-router-dom";
const Footer = () => {
  const navigate = useNavigate();
  return (
    <div className="footer">
      <ul className="footer-social-media">
        <li className="social-media">
          <FacebookIcon
            fontSize="large"
            onClick={() =>
              window.open("https://web.facebook.com/amine.rahal.581", "_blank")
            }
          />
        </li>
        <li className="social-media">
          <LinkedInIcon
            fontSize="large"
            onClick={() =>
              window.open("https://www.linkedin.com/in/mino95/", "_blank")
            }
          />
        </li>
        <li className="social-media">
          <TwitterIcon
            fontSize="large"
            onClick={() =>
              window.open("https://twitter.com/aminos_rahal", "_blank")
            }
          />
        </li>
      </ul>
      <div className="text-center">Copyright Rahal Amine</div>
    </div>
  );
};

export default Footer;
