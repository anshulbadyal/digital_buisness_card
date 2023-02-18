import EmailIcon from '../images/EmailIcon.png'
import VectorImg from '../images/VectorImg.png'
export default function MainBody() {
    return (
        <div className='main-div'>
            <div className='main-up'>
                <h1>Anshul Badyal</h1>
                <h3>Frontend Developer</h3>
                <a href="#">anshulbadyal.website</a>
            </div>
            <div className='btn-div'>
                <button className='btn-mail'>
                    <img src={EmailIcon}></img>
                    <span>Email</span>
                </button>
                <button className='btn-lkdin'>
                    <img src={VectorImg} alt="oops"></img>
                    <span>LinkedIn</span>
                </button>
            </div>
            
            <h2>About</h2>
            <p>I am a frontend developer with a particular interest in making things simple and automating daily tasks. I try to keep up with security and best practices, and am always looking for new things to learn.</p>
            <h2>Interests</h2>
            <p>Food expert. Music scholar. Reader. Internet fanatic. Bacon buff. Entrepreneur. Travel geek. Pop culture ninja. Coffee fanatic.</p>
        </div>

    )
}