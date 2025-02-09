import React from 'react';
import '../styles/components/Welcome.scss';
import { useInView } from 'react-intersection-observer';

export const Welcome = () => {
	const { ref, inView } = useInView({
    threshold: 0.5,
    triggerOnce: true
	});
	return (
		<div className='Welcome'>
			<div className='Welcome-Img' />
			<div ref={ref} className={`Welcome-Info `}>
				<h2 className={`Welcome-Title ${inView && 'isVisible'}`}>
					Welcome to
					<span className={`Welcome-Logo `}> #Pipzum</span> A Restaurant
				</h2>
				<p className={`Welcome-Lore ${inView && 'isVisible'}`}>
					Once upon a time, in a land far, far away, there was a pizza-loving developer. They had a dream to create the
					most innovative and mouthwatering pizzas using the power of code. With every slice, they crafted a masterpiece
					of flavors and algorithms. Join us on this coding adventure and let your taste buds be amazed!
				</p>
			</div>
		</div>
	);
};
