import React from 'react';

const Banner = () => {
    return (
        <div className=''>
            <div className='px-10 py-8  md:px-20 md:py-10 text-center space-y-4 w-[80%] mx-auto'>
                <h1 className='text-2xl md:text-4xl font-bold'>Friends to keep close in your life</h1>
                <p className='text-[12px] md:text-[14px] text-[#64748B]'>Your personal shelf of meaningful connections. Browse, tend, and nurture the <br /> 
relationships that matter most.</p>
<button className='btn bg-[#244D3F] text-white p-2 font-normal'>+ Add a Friend</button>
            </div>


            {/* banner card section */}
            <div className='grid grid-cols-2  md:grid-cols-4 gap-2 md:gap-10  w-[80%] mx-auto border-b border-gray-300 pb-6'>
                <div className='p-8 shadow rounded-xl text-center'>
                    <p className='font-semibold text-[#244D3F] text-2xl'>10</p>
                    <p className='text-[#64748B] text-[13px]'>Total Friends</p>
                </div>
                <div className='p-8 shadow rounded-xl text-center'>
                    <p className='font-semibold text-[#244D3F] text-2xl'>3</p>
                    <p className='text-[#64748B] text-[13px]'>On Track</p>
                </div>
                <div className='p-8 shadow rounded-xl text-center'>
                    <p className='font-semibold text-[#244D3F] text-2xl'>6</p>
                    <p className='text-[#64748B] text-[13px]'>Need Attention</p>
                </div>
                <div className='p-8 shadow rounded-xl text-center text-2xl'>
                    <p className='font-semibold text-[#244D3F]'>12</p>
                    <p className='text-[#64748B] text-[13px]'>Interactions This Month</p>
                </div>
            </div>
        </div>
    );
};

export default Banner;