import tw, { styled } from 'twin.macro'

const Input = styled.input`
  ${tw`
    block w-full text-base px-3 py-3.5 
    font-light placeholder-gray-400  tracking-wider
    bg-white border border-solid border-gray-100 rounded bg-clip-padding 
    transition duration-150 ease-in-out 
    focus:outline-none focus:border-indigo-400 focus:ring-2 focus:ring-indigo-200
`}
`
const FromInput = (props) => {
  return <Input {...props} />
}
export default FromInput
