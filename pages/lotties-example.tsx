import tw, { styled } from 'twin.macro'
import Head from 'next/head'
import React, { useState } from 'react'
import { Player } from '@lottiefiles/react-lottie-player'

const Title = styled.div`
  ${tw`bg-green-50 text-green-900 px-10 py-4 my-6 shadow-md font-mono select-none`}
  h1 {
    ${tw`text-2xl uppercase`}
  }
`

const Header = styled.div`
  ${tw`bg-index-header shadow w-full`}
`

const Home: React.FC = () => {
  const LottieHeaderPlayerRef = React.createRef<Player>()
  const LottieHeaderPlayer = React.forwardRef((props, ref: React.RefObject<Player>) => (
    <Player
      src="/lotties/data.json"
      background="transparent"
      speed={1}
      loop
      style={{ height: '30rem' }}
      ref={ref}
      controls
      autoplay
    ></Player>
  ))

  return (
    <div css={[tw`flex flex-col items-center justify-start h-screen bg-gray-50`]}>
      <Head>
        <title>MOCK</title>
        <script src="https://unpkg.com/@lottiefiles/lottie-player@latest/dist/lottie-player.js"></script>
      </Head>
      <Header>
        <LottieHeaderPlayer ref={LottieHeaderPlayerRef}></LottieHeaderPlayer>
      </Header>
      <div>
        <Title>
          <h1>Mock Your data</h1>
        </Title>
      </div>
    </div>
  )
}
export default Home
