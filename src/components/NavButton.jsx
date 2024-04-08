import { Link } from 'react-router-dom';
import '../styles/components/NavButton.scss';

export const NavButton = ({ url, setNavIsOpen, children }) => {
  const handleClick = () => {
    setNavIsOpen(true);

    window.scrollTo({
      top: 0,
      behavior: "instant"
    });
  };
  return (
		<Link className='NavButton' to={url} onClick={handleClick}>
			{children}
		</Link>
	);
};

