import myImage from './images/me.jpg'

const Welcome = () => {
  return (
    <div className='welcome-container'>
      <h1 className='welcome-header' data-testid='welcome-header'>
        Welcome To My Personal Portfolio!
      </h1>
      <div className='welcome-para-text'>
        <p className='welcome-text'>
          Hey there! My name is Anish, it’s nice to have you here!
          <br /> <br /> Initially, I intended to build a random frontend website
          to help build my knowledge and usage with React.
          <br /> <br /> Eventually, it evolved into a portfolio website, a
          website about myself, experience, projects, tech stacks I’ve used and
          some contact information down below.
          <br /> <br />
          Thank you for visiting, please enjoy your stay! ☺️
        </p>
      <img src={myImage} alt="myself" className="welcome-image" />
      </div>
    </div>
  );
};
export default Welcome;
