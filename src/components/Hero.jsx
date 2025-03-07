import '../styles/components/Hero.scss';
import { Carousel } from './Carousel';

export const Hero = () => {
	return (
		<div className='Hero'>
			{/* <div className="Hero-info"> */}

			{/* <span className="Hero-frase"> hero frase
            </span> */}
			<h2 className='Hero-title'> Welcome to our restaurant</h2>
			<div className='Hero-imgContainer'>
				{/* <img className="Hero-img" src="/assets/plato.png" alt="plato.png" /> */}
				<Carousel />
			</div>
			<div className='Hero-buttonContainer'>
				<a href='#menu' className='Hero-ButtonLink'>
					<button className='Hero-Button'>View Menu</button>
				</a>
				<a href='#category' className='Hero-ButtonLink'>
					<button className='Hero-Button'>Order Now</button>
				</a>
			</div>
		</div>
		// </div>
	);
};
