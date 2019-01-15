import routes from '../routes';

const router = routes.reduce((total, currentValue, index) => {
	if (currentValue.child && currentValue.child.length !== 0) {
		total = total.concat(currentValue).concat(currentValue.child);
	} else {
		total = total.concat(currentValue);
	}
	return total;
}, []);
export default router;

