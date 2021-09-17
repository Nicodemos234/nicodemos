import type { NextPage } from 'next'
import Link from 'next/link'
import styled from 'styled-components'
import { Header } from '../components/Header'

const Container = styled.main`
  width: 100%;
  height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  background-color: #151515;
  background-image: url('/assets/img/background.png');
  background-size: cover;
  background-position: center;
`

const Content = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 100vh;
  max-width: 70rem;
  text-align: center;
`

const Title = styled.h1`
  font-family: 'Nexa Bold';
  font-size: 3.2rem;
  line-height: 2.2rem;
  color: white;
  text-transform: uppercase;
  `

const SubTitle = styled.h2`
  font-family: 'Nunito';
  font-size: 1rem;
  letter-spacing: 1.50rem;
  text-indent: 1.50rem;
  color: white;
  text-transform: uppercase;
`

const Row = styled.div`
  display: flex;
`

const Role = styled.p`
  font-family: 'Barlow';
  font-size: 2rem;
  color: #FFB800;
  margin-top: 1rem;
  letter-spacing: 0.3rem;
  text-indent: 0.3rem;
`

const TypeAnimation = styled.p`
  @keyframes type {
    0% {
      opacity: 0;
    }
    50% {
      opacity: 0;
    }
    51% {
      opacity: 1;
    }
    100% {
      opacity: 1;
    }
  }

  display: inline-block;
  width: 1px;
  height: 1.5rem;
  background-color: white;
  animation: type 1s infinite; 
  margin-top: 1.45rem;
`

const Button = styled.a`
  font-family: 'Bai Jamjuree';
  font-size: 1.15rem;
  color: white;
  background-color: transparent;
  border: 1px solid;
  border-radius: 0.25rem;
  padding: 0.6rem 1rem;
  text-decoration: none;
  margin-top: 1.9rem;
  transition: 0.5s ease;
  &:hover {
    background-color: white;
    color: #1E1E1E;
  }
`

const Home: NextPage = () => {
  return (
    <Container>
      <Header selected={0}/>
      <Content>
        <Title>
          Nicodemos
        </Title>
        <SubTitle>
          Fernandes
        </SubTitle>
        <Row>
          <Role>
            Desenvolvedor Full Stack
          </Role>
          <TypeAnimation />
        </Row>
        <Link href='/sobre' passHref>
          <Button>
            Sobre mim
          </Button>
        </Link>
      </Content>
    </Container>
  )
}

export default Home
