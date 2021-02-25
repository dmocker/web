import { FC, Fragment } from 'react'
import { Nav, FromGroup, FromInput, Button } from '../components'
import Head from 'next/head'
import tw, { styled } from 'twin.macro'

const LoginContainer = styled.div`
  ${tw`bg-white min-h-screen w-screen flex flex-wrap`}
`
const TextWrapper = styled.div`
  ${tw`w-1/2 relative overflow-hidden`}
`
const TextMask = styled.div`
  ${tw`bg-blue-500 opacity-80 absolute inset-0 z-10`}
`
const TextHeroBackground = styled.div`
  ${tw`absolute inset-0 bg-login bg-scroll bg-no-repeat bg-center bg-cover transition duration-300 ease-in `}
`
const LoginWrapper = styled.div`
  ${tw`mx-auto py-12`}
  max-width: 1170px;
  width: 100%;
`

const Login: FC = () => (
  <Fragment>
    <Head>
      <title>Mocker Login</title>
    </Head>
    <LoginContainer>
      <TextWrapper>
        <TextMask />
        <TextHeroBackground />
        <div css={tw`relative z-10 my-auto w-full h-full flex flex-col`}>
          <div css={tw`flex flex-wrap`}>
            <Nav theme="light" />
          </div>

          <div css={tw`flex flex-wrap my-auto`}>
            <div css={tw`flex-login-form w-9/12 lg:w-10/12 md:w-auto mx-auto`}>
              <h1 css={tw`text-white font-light text-5xl mb-10 mt-0`}>Welcome back!</h1>
              <p css={tw`text-white font-thin text-lg `}>
                We are glad to see you again! Get access to your Orders, Wishlist and
                Recommendations.
              </p>
            </div>
          </div>
        </div>
      </TextWrapper>
      <div css={tw`w-1/2 flex items-center`}>
        <LoginWrapper>
          <div css={tw`flex-wrap`}>
            <div css={tw`w-11/12 lg:w-9/12 xl:w-8/12 mx-auto`}>
              <h3 css={tw`font-semibold mb-6 text-3xl`}>登录</h3>
              <p css={tw`text-red-400 text-xs`}>
                Tips: 如果登录的账号暂未注册将会自动注册，请记好您的密码 ~
              </p>
              <form>
                <FromGroup>
                  <label htmlFor="email">电子邮箱</label>
                  <FromInput type="email" id="email" placeholder="请输入你的电子邮箱" required />
                </FromGroup>
                <FromGroup>
                  <label htmlFor="password">密码</label>
                  <FromInput type="password" id="password" placeholder="请输入密码" required />
                </FromGroup>

                <Button type="submit" rounded isSecondary onClick={(e) => e.preventDefault()}>
                  登录
                </Button>
              </form>
            </div>
          </div>
        </LoginWrapper>
      </div>
    </LoginContainer>
  </Fragment>
)

async function getStaticProps(): Promise<{ props: Record<string, any> }> {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve({ props: {} })
    }, 1000)
  })
}

export default Login
export { getStaticProps }
