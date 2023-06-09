import {styled} from '../../../../stitches.config';

export const Container = styled('div', {

  border: '2px solid #dc3545',
  borderRadius: '5px'

});

export const Header = styled('div', {

  borderBottom: '2px solid grey',
  display: 'flex',
  alignItems: 'baseline',
  justifyContent: 'space-between',
  padding: '.5rem 1rem',

  h1: {
    color: '#dc3545',
    fontSize: '2.2rem',
    fontFamily: 'Special Elite',
    textTransform: 'capitalize'
  }

});

export const HeaderButtons = styled('div', {

  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  gap: '.5rem',

  a: {
    background: 'none',
    border: '1px solid transparent',
    padding: '.5rem',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: '5px',
    transition: '.3s'
  },

  '.padding': {
    padding: '.25rem'
  },

  'a:hover': {
    border: '1px solid cyan'
  }

});

export const Button = styled('button', {

  width: '28px',
  height: '28px',
  background: 'none',
  border: '1px solid transparent',
  paddingRight: '.1rem',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  borderRadius: '5px',
  transition: '.3s',
});

export const Img = styled('div', {
  
  width: '100px',
  
  img: {
    width: '100px',
    height: '100px',
    border: '1px solid white',
    borderRadius: '2rem',
    objectFit: 'cover'
  }

});

export const Body = styled('div', {

  padding: '1rem',
  display: 'flex',
  alignItems: 'center',
  flexDirection: 'column',
  gap: '1rem',

  '@md': {
    flexDirection: 'row'
  },

  '.grid': {
    width: '100%',
    display: 'grid',
    gap: '.5rem',

    '@sm': {
      gridTemplateColumns: '1fr 1fr'
    }
  },

});

export const Card = styled('div', {

  width: '100%',
  height: 'auto',
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'left',
  justifyContent: 'left',
  color: 'grey',
  fontFamily: 'El Messiri',
  border: '2px solid white',
  padding: '0.5rem 1rem 0.2rem 1rem',

  label: {
    fontWeight: 700
  },

  hr: {
    margin: '0 -1rem',
    marginBottom: '.5rem'
  }


});