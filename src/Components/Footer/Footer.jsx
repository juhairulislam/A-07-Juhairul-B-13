import React from 'react';
import footerImage from '../../../public/assets/logo-xl.png'
import instagram from '../../../public/assets/instagram.png'
import facebook from '../../../public/assets/facebook.png'
import twitter from '../../../public/assets/twitter.png'
import Image from 'next/image';

const Footer = () => {
    return (
        <div className='bg-[#244D3F] px-10 md:px-20 pt-10 md:pt-15 mt-4'>
            <div className='flex justify-center'>
                <Image
                    src={footerImage}
                    alt='Footer Image'
                    width={250}
                    style={{ height: 'auto' }}
                >

                </Image>






            </div>

            <p className='text-[11px] md:text-[13px] text-gray-300 text-center  mt-5'>Your personal shelf of meaningful connections. Browse, tend, and nurture the relationships that matter most.</p>

            <div>
                <p className='text-white text-center mt-4 md:mt-8'>Social Links</p>


                <div className='flex justify-center gap-2 mt-3'>

                    <Image
                    src={instagram}
                    alt='Footer Image'
                    width={30}
                    style={{ height: 'auto' }}
                >

                </Image>


                <Image
                    src={facebook}
                    alt='Footer Image'
                    width={30}
                    height={30}
                >

                </Image>


                <Image
                    src={twitter}
                    alt='Footer Image'
                    width={30}
                    height={30}
                >

                </Image>

                </div>
            </div>

            
                    <div className='mt-4 md:mt-10 flex flex-col md:flex-row text-center justify-between gap-1 border-t border-green-800 py-4 text-[11px] md:text-[14px]'>
                        <p className='text-gray-500'>© 2026 KeenKeeper. All rights reserved.</p>

                        <div className='text-gray-500 flex justify-between gap-2 md:gap-8'>
                            <p>Privacy Policy</p>
                            <p>Terms of Service </p>
                            <p>Cookies</p>
                        </div>
                    </div>
        </div>
    );
};

export default Footer;