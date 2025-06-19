import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {faInstagram, faYoutube, faSquareFacebook, faXTwitter} from '@fortawesome/free-brands-svg-icons';
import {faPhone} from '@fortawesome/free-solid-svg-icons';
import {faEnvelope} from '@fortawesome/free-regular-svg-icons';

export const InfoBar = () => {
  return (
    <>
        <div className='hidden xl:flex flex-row w-full h-[8.05vh] justify-between items-center font-montserrat text-lg bg-slate-800 text-white text-lg px-12'>
            <div className='flex flex-row justify-between gap-10'>
                <p><FontAwesomeIcon icon={faPhone}/> (225 555-0118)</p>
                <p><FontAwesomeIcon icon={faEnvelope} /> michelle.rivera@example.com</p>
            </div>
            <p>Follow Us and get a chance to win 80% off</p>
            <p className='flex flex-row gap-5 items-center'>Follow Us&nbsp; : <div className='flex flex-row gap-3'><FontAwesomeIcon icon={faInstagram} /> <FontAwesomeIcon icon={faYoutube} /> <FontAwesomeIcon icon={faSquareFacebook} /> <FontAwesomeIcon icon={faXTwitter} /></div></p>
        </div>
    </>
  )
}
