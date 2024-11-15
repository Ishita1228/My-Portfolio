import { Link } from 'react-router-dom';

export const Navbar = () => {
  return (
    <div
      style={{
        background: '#5c908a',
        height: '12vh',
        width: '100%',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        color: 'white',
      }}
    >
      <div
        style={{
          width: '85%',
          height: '100%',
          display: 'flex',
        }}
      >
        <div
          style={{
            width: '60%',
            height: '100%',
            display: 'flex',
            alignItems: 'center',
            fontSize: '55px',
          }}
        >
          <Link
            to='/My-Portfolio'
            style={{ textDecoration: 'none', color: 'white' }}
          >
            IB
          </Link>
        </div>
        <div
          style={{
            width: '40%',
            height: '100%',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'space-between',
            fontSize: '20px',
          }}
        >
          <Link to='/about' style={{ textDecoration: 'none', color: 'white' }}>
            <div>About</div>
          </Link>
          <Link to='/work' style={{ textDecoration: 'none', color: 'white' }}>
            <div>Work</div>
          </Link>
          <Link to='/blog' style={{ textDecoration: 'none', color: 'white' }}>
            <div>Blog</div>
          </Link>
          <Link
            to='/contact'
            style={{ textDecoration: 'none', color: 'white' }}
          >
            <div>Contact</div>
          </Link>
        </div>
      </div>
    </div>
  );
};
