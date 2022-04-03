import React, { useContext} from 'react';
import { MainContext } from '../context';


function Error() {
	const { err } = useContext(MainContext);
	return <div data-testid="errorMsg" className="alert error mt-20 slide-up-fade-in">
	{err}
	</div>
}

export default Error;
