import { useInView } from 'react-intersection-observer';
import './Test.scss';

export const Test = () => {
	const thresholds = [0.5]; // Define los umbrales de visibilidad

	const {
		ref: ref1,
		inView: inView1,
		entry: entry1,
	} = useInView({
		threshold: thresholds,
	});

	const {
		ref: ref2,
		inView: inView2,
		entry: entry2,
	} = useInView({
		threshold: thresholds,
	});

	const {
		ref: ref3,
		inView: inView3,
		entry: entry3,
	} = useInView({
		threshold: thresholds,
	});

	return (
		<div className='container2'>
			<div ref={ref1} className='item-container'>
				<div className={`item ${inView1 && 'isVisible'}`}></div>
			</div>
			{/* <div ref={ref2} className='item-container'>
				<div className={`item ${getAnimationClass(entry2?.intersectionRatio)}`}></div>
			</div>
			<div ref={ref3} className='item-container'>
				<div className={`item ${getAnimationClass(entry3?.intersectionRatio)}`}></div>
			</div> */}
		</div>
	);
};

const getAnimationClass = (intersectionRatio) => {
	if (intersectionRatio > 0.7) {
		console.log(0.8);
		return 'isVisible';
	} else if (intersectionRatio > 0.2) {
		console.log(0.3);
		return '';
	}
};
