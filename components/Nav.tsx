import tw, { styled } from 'twin.macro'
import Image from 'next/image'
import Link from 'next/link'

const LogoWrapper = styled.div`
  ${tw`mt-10 cursor-pointer`}
`
const Navigation = styled.nav`
  ${tw`flex-login-form items-center justify-between md:w-auto mx-auto`}
`
const Nav = (props) => {
  return (
    <Navigation {...props}>
      <Link href="/">
        <LogoWrapper>
          <Image
            src={props.theme === 'light' ? '/images/logo-light.png' : '/images/logo.png'}
            width="200"
            height="40"
            alt="logo"
          />
        </LogoWrapper>
      </Link>
    </Navigation>
  )
}

export default Nav
