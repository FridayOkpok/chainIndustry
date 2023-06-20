import image from '../../assets/image.svg';
const Card = () => { 
  return (
     <div className='slide'>
        <img src={image} alt="" />
        <div className='text'>
                <p>A-Z of web animation using figma. And bec...</p>
            <div>
                <p>4.95 / 5</p>
                <div className='btn-like'>
                    Design - Intermediate
                </div>
            </div>
            <div>
                <p>by Victor Adebisi</p>
                <p className='price'>₦20,000</p>
            </div>
        </div>
    </div>
  )
}

export default Card