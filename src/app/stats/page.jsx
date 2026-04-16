'use client'
import { HandleData } from '@/Context/Context';
import React, { useContext } from 'react';
import { Legend, Pie, PieChart, Tooltip } from 'recharts';

const Stats = () => {
    const {data} = useContext(HandleData);
    console.log(data) ;

    const FilteredCall = data.filter(CallFilter => CallFilter.type === 'Call') ;
    const FilteredText = data.filter(TextFilter => TextFilter.type === 'Text') ;
    const FilteredVideo = data.filter(VideoFilter => VideoFilter.type === 'Video') ;



    const chartData = [
        { name: 'Text', value: FilteredText.length, fill: '#7E35E1' },
        { name: 'Call', value: FilteredCall.length, fill: '#244D3F' },
  { name: 'Video', value: FilteredVideo.length, fill: '#37A163' },
];




    return (
        <div className='w-[85%] mx-auto p-4'>

            <h1 className='text-4xl font-bold mt-10'>Friendship Analytics</h1>


            <div className=' shadow rounded-xl my-6 p-6'>
                <p className='text-center md:text-left text-[#244D3F] my-4'>By Interaction Type</p>

                <div className='flex justify-center'>

<PieChart style={{ width: '100%', maxWidth: '500px', maxHeight: '50vh', aspectRatio: 1 }} responsive>
      <Pie
        data={chartData}
        innerRadius="80%"
        outerRadius="100%"
        // Corner radius is the rounded edge of each pie slice
        cornerRadius="50%"
        fill="#8884d8"
        // padding angle is the gap between each pie slice
        paddingAngle={5}
        dataKey="value"
        isAnimationActive={true}
    
      />
      <Legend
      iconType="circle"   
  align="center"     
  verticalAlign="bottom" 
  iconSize={10}       
  wrapperStyle={{ paddingTop: '20px' }}
      ></Legend>
      <Tooltip></Tooltip>
    </PieChart>
                </div>
 
            </div>
        </div>
    );
};

export default Stats;