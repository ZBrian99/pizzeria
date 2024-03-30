import { Link } from 'react-router-dom';
import '../styles/NavButton.scss';

export const NavButton = ({ url, setNavIsOpen, children }) => {
  const handleClick = () => {
    setNavIsOpen(true);

    window.scrollTo({
      top: 0,
      behavior: "auto"
    });
  };
  return (
    <Link className='NavButton' to={url} onClick={handleClick}>{children}</Link>

  );
};

