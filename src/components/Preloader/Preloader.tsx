import './Preloader.scss';

const preloader = require('../../assets/img/preloader.svg') as string

const Preloader = () => {
    return (
        <div>
            <img src={preloader} className='preloader' alt='preloader'/> 
        </div>
    )
}

export default Preloader;