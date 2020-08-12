import React from 'react'

import { Container, Main, LeftSide, RightSide } from './styles'

import ProfileData from '../../components/ProfileData'

const Profile: React.FC = () => {
  return (
    <Container>
      <Main>
        <LeftSide>
          <ProfileData
            username={'gabriel-camargo'}
            name={'Gabriel Camargo'}
            avatarUrl={'https://avatars2.githubusercontent.com/u/37885082?v=4'}
            followers={666}
            following={50}
            company={'Apus'}
            location={'Pindamonhangaba, Brazil'}
            email={'gabriel.rcamargo@outlook.com'}
            blog={'gabriel.dev.br'}
          />
        </LeftSide>

        <RightSide></RightSide>
      </Main>
    </Container>
  )
}

export default Profile
