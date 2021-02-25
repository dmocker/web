import tw, { styled } from 'twin.macro'
import Head from 'next/head'
import Link from 'next/link'
import React from 'react'
import Nav from '../components/Nav'
import Button from '../components/Button'
const HeroWrapper = styled.div`
  ${tw`bg-white w-screen`}
`
const HeroContentWrapper = styled.div`
  ${tw`max-w-7xl mx-auto overflow-hidden relative`}
`
const HeroContent = styled.div`
  ${tw`relative z-10 pb-8 bg-white sm:pb-16 md:pb-20 lg:max-w-2xl lg:w-full lg:pb-28 xl:pb-32`}
`
const HeroMain = styled.main`
  ${tw`mt-10 mx-auto max-w-7xl px-4 sm:mt-12 sm:px-6 md:mt-16 lg:mt-20 lg:px-8 xl:mt-28`}
`
const HeroMainContentWrapper = styled.div`
  ${tw`sm:text-center lg:text-left`}
`
const HeroMainTitle = styled.h1`
  ${tw`text-4xl tracking-tight font-extrabold text-gray-900 sm:text-5xl md:text-6xl`}
  span {
    ${tw`block xl:inline`}
  }
  p {
    ${tw`block text-indigo-600 xl:inline my-0`}
  }
`

const HeroMainDescription = styled.p`
  ${tw`mt-3 text-base text-gray-500 sm:mt-5 sm:text-lg sm:max-w-xl sm:mx-auto md:mt-5 md:text-xl lg:mx-0`}
`

const HeroMainControl = styled.div`
  ${tw`mt-5 sm:mt-8 sm:flex sm:justify-center lg:justify-start`}
`

const HeroMainRoundedBtnWrapper = styled.div`
  ${tw`rounded-md shadow-secondary `}
`
const HeroMainGetStartBtnWrapper = styled.div`
  ${tw`mt-3 sm:mt-0 sm:ml-3 rounded-md shadow-primary`}
`

const HeroSplitLine = styled.svg`
  ${tw`hidden lg:block absolute right-0 inset-y-0 h-full w-48 text-white transform translate-x-1/2`}
`

const HeroLeftImage = styled.div`
  ${tw`select-none lg:absolute lg:inset-y-0 lg:right-0 lg:w-1/2`}
  img {
    ${tw`h-56 w-full object-cover sm:h-72 md:h-96 lg:w-full lg:h-full`}
  }
`

const Home: React.FC = () => {
  return (
    <div css={[tw`flex flex-col items-center justify-start h-screen bg-white`]}>
      <Head>
        <title>Mocker</title>
      </Head>
      <HeroWrapper>
        <HeroContentWrapper>
          <HeroContent>
            <HeroSplitLine
              fill="currentColor"
              viewBox="0 0 100 100"
              preserveAspectRatio="none"
              aria-hidden="true"
            >
              <polygon points="50,0 100,0 50,100 0,100" />
            </HeroSplitLine>
            <div css={tw`relative pt-6 px-4 sm:px-6 lg:px-8`}>
              <Nav></Nav>
            </div>
            <HeroMain>
              <HeroMainContentWrapper>
                <HeroMainTitle>
                  <span>Mock</span>
                  <p>Your Data</p>
                </HeroMainTitle>

                <HeroMainDescription>Defining your mock data is super easy.</HeroMainDescription>

                <HeroMainControl>
                  <HeroMainRoundedBtnWrapper>
                    <Link href="/about">
                      <Button as="a" rounded isPrimary>
                        Live Demo
                      </Button>
                    </Link>
                  </HeroMainRoundedBtnWrapper>

                  <HeroMainGetStartBtnWrapper>
                    <Link href="/login">
                      <Button as="a" rounded isSecondary>
                        Get started
                      </Button>
                    </Link>
                  </HeroMainGetStartBtnWrapper>
                </HeroMainControl>
              </HeroMainContentWrapper>
            </HeroMain>
          </HeroContent>

          <HeroLeftImage>
            <img src="/images/hero-bg.jpeg" />
          </HeroLeftImage>
        </HeroContentWrapper>
      </HeroWrapper>
    </div>
  )
}
export default Home
