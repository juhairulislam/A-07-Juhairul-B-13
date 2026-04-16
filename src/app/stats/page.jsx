'use client'
import { HandleData } from '@/Context/Context';
import React, { useContext } from 'react';
import { Pie, PieChart } from 'recharts';

const Stats = () => {
    // const { data, setData } = useContext(HandleData);



    const data = [
  { name: 'Group A', value: 400, fill: '#0088FE' },
  { name: 'Group B', value: 300, fill: '#00C49F' },
  { name: 'Group C', value: 300, fill: '#FFBB28' },
  { name: 'Group D', value: 200, fill: '#FF8042' },
];




    return (
        <div className='w-[85%] mx-auto p-4'>

            <h1 className='text-4xl font-bold mt-10'>Friendship Analytics</h1>


            <div className='flex justify-center p-10 shadow rounded-xl border border-slate-300 my-6'>
<PieChart style={{ width: '100%', maxWidth: '500px', maxHeight: '50vh', aspectRatio: 1 }} responsive>
      <Pie
        data={data}
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
    </PieChart>
 
            </div>
        </div>
    );
};

export default Stats;