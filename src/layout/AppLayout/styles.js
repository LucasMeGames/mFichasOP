import { styled } from '../../stitches.config';

export const Container = styled('div', {
  height: '100vh',
  display: 'flex',
})

export const ContentWrapper = styled('main', {
  width: '100%',
  marginTop: '6rem',

  variants: {
    auth: {
      true: {
        height: 'calc(100vh - 140px)',
      },
      trueficha: {
        height: 'calc(100vh - 120px)',
      },
      false: {
        height: 'calc(100vh - 60px)'
      },
    }
  }

})