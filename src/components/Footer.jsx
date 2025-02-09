import React from 'react';
import '../styles/components/Footer.scss';
import { FooterCard } from './FooterCard';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faInstagram, faXTwitter, faFacebookF } from '@fortawesome/free-brands-svg-icons';

export const Footer = () => {
	return (
		<div className='Footer'>
			<div className='Footer-Section'>
				<h3 className='Footer-SectionTitle'>ABOUT US</h3>
				<p className='Footer-SectionDescription'>
					Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind
					texts.
				</p>
				<div className='Footer-SectionSocialMediaContainer'>
					<button className='Footer-SocialMedia'>
						<FontAwesomeIcon icon={faInstagram} />
					</button>
					<button className='Footer-SocialMedia'>
						<FontAwesomeIcon icon={faXTwitter} />
					</button>
					<button className='Footer-SocialMedia'>
						<FontAwesomeIcon icon={faFacebookF} />
					</button>
				</div>
			</div>
			<div className='Footer-Section'>
				<h3 className='Footer-SectionTitle'>RECENT BLOG</h3>
				<FooterCard />
				<FooterCard />
			</div>
			<div className='Footer-Section'>
				<h3 className='Footer-SectionTitle'>SERVICES</h3>
				<a href='#' className='Footer-SectionLink'>
					Cooked
				</a>
				<a href='#' className='Footer-SectionLink'>
					Delivery
				</a>
				<a href='#' className='Footer-SectionLink'>
					Quality Foods
				</a>
				<a href='#' className='Footer-SectionLink'>
					Mixed
				</a>
			</div>
			<div className='Footer-Section'>
				<h3 className='Footer-SectionTitle'>HAVE A QUESTIONS?</h3>
				<p className='Footer-SectionDescription'>🔍 Buenos Aires, Argentina</p>
				<p className='Footer-SectionDescription'>📱 +54 223 669 8045</p>
				<p className='Footer-SectionDescription'>✉️ contacto@interup.dev</p>
			</div>
		</div>
	);
};
