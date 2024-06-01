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
						<p className='Info-DisplayerTitle'>Lorem, ipsum dolor.</p>
						<p className='Info-DisplayerSubtitle'>Lorem ipsum dolor sit amet consectetur.</p>
					</div>
				</div>
				<div className='Info-Displayer'>
					<img src='/assets/icons/location.svg' alt='location' className='Info-Logo' />
					<div className='Info-DisplayerDescription'>
						<p className='Info-DisplayerTitle'>Lorem, ipsum dolor.</p>
						<p className='Info-DisplayerSubtitle'>Lorem ipsum dolor sit amet consectetur.</p>
					</div>
				</div>
				<div className='Info-Displayer'>
					<img src='/assets/icons/mail.svg' alt='mail' className='Info-Logo' />
					<div className='Info-DisplayerDescription'>
						<p className='Info-DisplayerTitle'>Lorem, ipsum dolor.</p>
						<p className='Info-DisplayerSubtitle'>Lorem ipsum dolor sit amet consectetur.</p>
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
