import React from 'react'
import { Link } from 'react-router-dom'

import {
  Container,
  Breadcrumb,
  RepoIcon,
  Stats,
  StarsIcon,
  ForkIcon,
  LinkButton,
  GithubIcon
} from './styles'

const Repo: React.FC = () => {
  return (
    <Container>
      <Breadcrumb>
        <RepoIcon />

        <Link className={'username'} to={'/gabriel-camargo'}>
          gabriel-camargo
        </Link>

        <span>/</span>

        <Link className={'reponame'} to={'/gabriel-camargo/github-clone'}>
          github-clone
        </Link>
      </Breadcrumb>

      <p>
        Um clone da interface do github, de maneira responsiva e com adição de
        um tema dark. Este projeto foi criado com base neste excelente vídeo da
        Rocketseat: https://www.youtube.com/watch?v=iLEbGQXsg3k
      </p>

      <Stats>
        <li>
          <StarsIcon />
          <b>9</b>
          <span>stars</span>
        </li>
        <li>
          <ForkIcon />
          <b>2</b>
          <span>forks</span>
        </li>
      </Stats>

      <LinkButton href={'https://github.com/gabriel-camargo/github-clone'}>
        <GithubIcon />
        <span>View on Github</span>
      </LinkButton>
    </Container>
  )
}
export default Repo
