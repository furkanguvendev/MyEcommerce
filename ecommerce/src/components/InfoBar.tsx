import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {faInstagram, faYoutube, faSquareFacebook, faXTwitter} from '@fortawesome/free-brands-svg-icons';
import {faPhone} from '@fortawesome/free-solid-svg-icons';
import {faEnvelope} from '@fortawesome/free-regular-svg-icons';

export const InfoBar = () => {
  return (
    <>
        <div className='max-xl:hidden w-full h-[8.05vh] bg-slate-800 flex justify-center'>
          <div className='w-11/12 h-full flex flex-row justify-between items-center font-montserrat text-lg text-white'> 
            <div className='flex flex-row justify-between gap-10'>
                <p className='flex flex-row items-center gap-1'><FontAwesomeIcon icon={faPhone}/> (225 555-0118)</p>
                <p className='flex flex-row items-center gap-1'><FontAwesomeIcon icon={faEnvelope} /> furkanguven.dev@gmail.com</p>
            </div>
            <p>Follow Us and get a chance to win 80% off</p>
            <p className='flex flex-row gap-5 items-center'>Follow Us&nbsp; : <div className='flex flex-row gap-3'><FontAwesomeIcon icon={faInstagram} /> <FontAwesomeIcon icon={faYoutube} /> <FontAwesomeIcon icon={faSquareFacebook} /> <FontAwesomeIcon icon={faXTwitter} /></div></p>
          </div>
        </div>
    </>
  )
}
