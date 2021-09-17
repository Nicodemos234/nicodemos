import Link from 'next/link'
import Image from 'next/image'
import styled from 'styled-components'

const Wrapper = styled.div`
  width: 100%;
  max-width: 70rem;
  margin-top: 1rem;
  display: flex;
  justify-content: space-between;
  align-items: center;
`

type NavItemProps = {
    active: boolean
}

const NavItem = styled.a<NavItemProps>`
  font-family: 'Nexa Bold';
  color: white;
  font-size: 1rem;
  text-decoration: none;
  border-bottom: ${({active}) => active ? `${2/16}rem solid #FFB800` : 'none'};
  margin-left: 3.5rem;
`

export const Header = ({selected} : {selected: number}) => {
    return <Wrapper>
        <Image src='/assets/img/logo.svg' width={68} height={63} alt='Nicodemos Logo' />
        <nav>
            <Link href='/' passHref>
                <NavItem active={selected === 0}>
                    Home
                </NavItem>
            </Link>
            <Link href='/sobre' passHref>
                <NavItem active={selected === 1}>
                    Sobre mim
                </NavItem>
            </Link>
            <Link href='/portfolio' passHref>
                <NavItem active={selected === 2}>
                    Portfólio
                </NavItem>
            </Link>
            <Link href='/contato' passHref>
                <NavItem active={selected === 3}>
                    Contato
                </NavItem>
            </Link>
        </nav>
    </Wrapper>
}