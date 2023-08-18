// a basic jsx page that says finance at the top

// Path: client/src/pages/Finance/FinanceHost.jsx
import React from 'react';
import FixedBottomNavigationHost from '../../components/FixBottomNavigationHost';
import AppHeader from '../../components/common/AppHeader';

const FinanceHost = () => {
	return (
		<div>
			<AppHeader title={'finance'} />
			<FixedBottomNavigationHost />
		</div>
	);
};

export default FinanceHost;
