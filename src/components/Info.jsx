import '../styles/components/Info.scss';
import { InstagramLogo } from './svgs/InstagramLogo';
export const Info = () => {
	return (
		<div className='Info'>
			<div className='Info-TextDisplayer'>
				<div className='Info-Displayer'>
					<InstagramLogo className='Info-Logo' />
					<div className='Info-DisplayerDescription'>
						<p className='Info-DisplayerTitle'>Lorem, ipsum dolor.</p>
						<p className='Info-DisplayerSubtitle'>Lorem ipsum dolor sit amet consectetur.</p>
					</div>
				</div>
				<div className='Info-Displayer'>
					<InstagramLogo className='Info-Logo' />
					<div className='Info-DisplayerDescription'>
						<p className='Info-DisplayerTitle'>Lorem, ipsum dolor.</p>
						<p className='Info-DisplayerSubtitle'>Lorem ipsum dolor sit amet consectetur.</p>
					</div>
				</div>
				<div className='Info-Displayer'>
					<InstagramLogo className='Info-Logo' />
					<div className='Info-DisplayerDescription'>
						<p className='Info-DisplayerTitle'>Lorem, ipsum dolor.</p>
						<p className='Info-DisplayerSubtitle'>Lorem ipsum dolor sit amet consectetur.</p>
					</div>
				</div>
			</div>
			<div className='Info-SocialButtonContainer'>
				<a href='#' className='Info-SocialLink'>
					<img src='/assets/Instagramicon.svg' alt='Instagramicon' className='Info-Social' />
				</a>
				<a href='#' className='Info-SocialLink'>
					<img src='/assets/Instagramicon.svg' alt='Instagramicon' className='Info-Social' />
				</a>
				<a href='#' className='Info-SocialLink'>
					<img src='/assets/Instagramicon.svg' alt='Instagramicon' className='Info-Social' />
				</a>
			</div>
		</div>
	);
};
