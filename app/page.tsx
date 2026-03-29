import Image from 'next/image';
import bus from '../public/unnamed.png';
import Link from 'next/link';
import bus2 from '../public/bus-2.png';

const page = () => {
  return (
    <>
      <main>
        <section className='relative'>
          <Image
            src={bus}
            width={512}
            height={512}
            alt='bus'
            className='w-full aspect-[16/9] object-cover'
          />
          <div className='absolute top-2/3 w-full left-1/2 -translate-1/2 flex flex-col items-center gap-5'>
            <p className='text-[16px] sm:text-2xl font-semibold text-white backdrop-blur-3xl rounded-full px-2'>
              Travel anywhere anytime in Bangladesh
            </p>
            <Link
              href='/bookticket'
              className='text-center p-3 bg-blue-600 hover:bg-blue-700 rounded font-medium transition text-white'
            >
              Book Now
            </Link>
          </div>
        </section>
        <div className='flex py-10 px-3 sm:px-10 sm:py-20 bg-primary gap-5'>
          <div className='w-1/2'>
            <h1 className='font-semibold text-xl'>Why We Are</h1>
            <p className='mt-2'>
              We have route for bus everywhere in bangladesh and all those route
              are fully intregrated online with our service provider that mean
              there is no third party.
            </p>
          </div>
          <Image
            src={bus2}
            width={512}
            height={512}
            alt='bus-2'
            className='w-1/2 object-cover'
          />
        </div>
        <div className='flex flex-row-reverse py-10 px-3 sm:px-10 sm:py-20 bg-primary gap-5'>
          <div className='w-1/2'>
            <h1 className='font-semibold text-xl'>Why We Are</h1>
            <p className='mt-2'>
              We have route for bus everywhere in bangladesh and all those route
              are fully intregrated online with our service provider that mean
              there is no third party.
            </p>
          </div>
          <Image
            src={bus2}
            width={512}
            height={512}
            alt='bus-2'
            className='w-1/2 object-cover'
          />
        </div>
      </main>
      <footer className='flex flex-col  py-10 px-3 sm:px-10 sm:py-20 bg-gray-600 gap-5'>
        <span className='text-3xl font-semibold text-white'>Book Ticket</span>
        <div></div>
        <span>All Right Resurved</span>
      </footer>
    </>
  );
};

export default page;
