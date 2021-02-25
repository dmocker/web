import tw, { styled } from 'twin.macro'
const Wrapper = styled.div`
  ${tw`mb-4`}

  & > label {
    ${tw`inline-block mb-2`}
  }
`
const FromGroup = (props) => {
  return <Wrapper>{props.children}</Wrapper>
}
export default FromGroup
