import '../styles/components/Info.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faInstagram, faXTwitter, faFacebookF } from '@fortawesome/free-brands-svg-icons';

export const Info = () => {
	return (
		<div className='Info'>
			<div className='Info-TextDisplayer'>
				<div className='Info-Displayer'>
					<img src='/assets/icons/phone.svg' alt='phone' className='Info-Logo' />
					<div className='Info-DisplayerDescription'>
						<p className='Info-DisplayerTitle'>+54 223 669 8045</p>
						<p className='Info-DisplayerSubtitle'>A small river named Duden flows</p>
					</div>
				</div>
				<div className='Info-Displayer'>
					<img src='/assets/icons/mail.svg' alt='mail' className='Info-Logo' />
					<div className='Info-DisplayerDescription'>
						<p className='Info-DisplayerTitle'>contacto@interup.dev</p>
						<p className='Info-DisplayerSubtitle'>12:00am - 12:00am</p>
					</div>
				</div>
				<div className='Info-Displayer'>
					<img src='/assets/icons/location.svg' alt='location' className='Info-Logo' />
					<div className='Info-DisplayerDescription'>
						<p className='Info-DisplayerTitle'>Buenos Aires, Argentina</p>
						<p className='Info-DisplayerSubtitle'>Suite 721 New York NY 10016</p>
					</div>
				</div>
			</div>
			<div className='Info-SocialButtonContainer'>
				<a href='#' className='Info-SocialLink'>
					<FontAwesomeIcon icon={faInstagram} className='Info-Social' />
				</a>
				<a href='#' className='Info-SocialLink'>
					<FontAwesomeIcon icon={faXTwitter} className='Info-Social' />
				</a>
				<a href='#' className='Info-SocialLink'>
					<FontAwesomeIcon icon={faFacebookF} className='Info-Social' />
				</a>
			</div>
		</div>
	);
};
