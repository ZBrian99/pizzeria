import '../styles/components/NewHero.scss';

export const NewHero = () => {
	return (
		<div className='NewHero'>
			<span className='NewHero-welcome'>Welcome</span>
			<h2 className='NewHero-title'>WE COOKED YOUR DESIRED PIZZA RECIPE</h2>
			<p className='NewHero-phrase'>
				A small river named Duden flows by their place and supplies it with the necessary regelialia.
			</p>
			<div className='NewHero-buttonContainer'>
				<a href='#category' className='NewHero-ButtonLink'>
					<button className='NewHero-Button--inverted'>Order Now</button>
				</a>
				<a href='#menu' className='NewHero-ButtonLink'>
					<button className='NewHero-Button'>View Menu</button>
				</a>
			</div>
		</div>
	);
}; 