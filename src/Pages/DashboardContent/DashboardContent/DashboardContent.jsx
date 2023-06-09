import React from 'react';
import DashNav from '../DashNav/DashNav';
import NetIncome from '../NetIncome/NetIncome';
import SelesSupport from '../SalesSupport/SelesSupport';
import OverallSeles from '../OverallSeles/OverallSeles';
import TotalOrder from '../TotalOrder/TotalOrder';
import AverageSelling from '../AverageSelling/AverageSelling';
import Impressinons from '../Impressions/Impressions';
import Impressions from '../Impressions/Impressions';
import SalesHistory from '../SalesHistory/SalesHistory';

const DashboardContent = () => {
    return (
        <div className='my-4  mx-6'>
            <div className='top-nav-border-custom'>
                <DashNav></DashNav>
            </div>
            <div className='lg:grid lg:grid-cols-3 gap-4'>
                <div className='grid lg:grid-cols-2 col-span-2 gap-4'>
                    <NetIncome ></NetIncome>
                    <TotalOrder></TotalOrder>
                    <AverageSelling></AverageSelling>
                    <Impressions></Impressions>
                </div>
                <div>
                    <SelesSupport></SelesSupport>
                </div>
            </div>
            <div className='lg:grid lg:grid-cols-3 gap-4'>
                <div className='col-span-2 gap-4'>
                    <OverallSeles></OverallSeles>
                </div>
                <div>
                    <SalesHistory></SalesHistory>
                </div>
            </div>
        </div>
    );
};

export default DashboardContent;