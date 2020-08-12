import styled from 'styled-components'

export const Container = styled.div`
  --horizontalPadding: 16px;
  --verticalPadding: 24px;

  padding: var(--verticalPadding) var(--horizontalPadding);
`

export const Main = styled.div`
  display: flex;
  flex-direction: column;

  @media (min-width: 768px) {
    flex-direction: row;
  }
`

export const LeftSide = styled.div`
  @media (min-width: 768px) {
    width: 25%;
  }
`
export const RightSide = styled.div`
  @media (min-width: 768px) {
    width: 75%;
  }
`
