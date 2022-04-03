import React, { useContext } from 'react';
import { MainContext } from '../context';

function ResidentsList() {
	const { stdnt}  = useContext(MainContext)
console.log(stdnt)
	return (
		<div className="pa-10 mt-10 w-75">
			<div className="font-weight-bold text-center">Residents List</div>
			<ul className="mt-10 styled w-50 mx-auto" data-testid="residentsNameList">
				{stdnt.map((item, index) => {
					return <div key={index}>
						<li className="slide-up-fade-in">
							{item}
						</li>
					</div>
				})}
			</ul>
		</div>
	);
}

export default ResidentsList;


