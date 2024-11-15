import photo1 from '../public/middlesectionphoto.jpeg';
import dPDF from '../public/Ishita-Baluni-Resume.pdf';

export const About = () => {
  return (
    <div
      style={{
        height: '88vh',
        width: '100%',
        display: 'flex',
        background: '#eaeae9',
      }}
    >
      <div
        style={{
          height: '100%',
          width: '50%',
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
        }}
      >
        <div
          style={{
            height: '80%',
            width: '60%',
            backgroundImage: `url(${photo1})`,
            backgroundSize: 'cover',
            backgroundPosition: 'center',
          }}
        ></div>
      </div>
      <div
        style={{
          height: '100%',
          width: '50%',
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
        }}
      >
        <div
          style={{
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            flexDirection: 'column',
            height: '80%',
            width: '80%',
          }}
        >
          <div style={{ height: '15%', width: '100%', fontSize: '50px' }}>
            About Me
          </div>
          <div style={{ height: '5%', width: '100%' }}></div>
          <div style={{ height: '45%', width: '100%', fontSize: '26px' }}>
            I've worked in the fields of marketing, branding, and design, with
            large, established firms and studios. I learned a lot from them. I
            learned a lot from them—the power of a strong brand identity, the
            impact of storytelling, and the importance of user-centered design.
            <br />
            Now, I’m all about making designs that don’t just look good—they
            make a difference.
          </div>
          <div style={{ height: '15%', width: '100%' }}></div>
          <div
            style={{
              height: '25%',
              width: '100%',
              display: 'flex',
              justifyContent: 'flex-start',
              alignItems: 'flex-end',
            }}
          >
            <a href={dPDF}>
              <button
                style={{
                  fontSize: '16px',
                  width: '150px',
                  height: '50px',
                  boxShadow: '5px 5px 10px rgba(0, 0, 0, 1)',
                  cursor: 'pointer',
                }}
              >
                Download CV
              </button>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};
