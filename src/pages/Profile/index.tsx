import React from 'react'

import {
  Container,
  Main,
  LeftSide,
  RightSide,
  Repos,
  CalendarHeading
} from './styles'

import ProfileData from '../../components/ProfileData'
import RepoCard from '../../components/RepoCard'
import RandomCalendar from '../../components/RandomCalendar'

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

        <RightSide>
          <Repos>
            <h2>Random Repos</h2>

            <div>
              {[1, 2, 3, 4, 5, 6].map((n) => (
                <RepoCard
                  key={n}
                  username={'gabriel-camargo'}
                  reponame={'youtube-content'}
                  description={'Lorem ipsum dolor sit amet'}
                  language={n % 3 === 0 ? 'JavaScript' : 'Typescript'}
                  stars={8}
                  forks={4}
                />
              ))}
            </div>
          </Repos>
          <CalendarHeading>
            Random calendar (do not represent actual data)
          </CalendarHeading>

          <RandomCalendar />
        </RightSide>
      </Main>
    </Container>
  )
}

export default Profile
