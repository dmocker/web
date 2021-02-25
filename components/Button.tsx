import tw, { styled } from 'twin.macro'

type TButtonProps = { rounded?: boolean; isPrimary?: boolean; isSecondary?: boolean }
const Button = styled.button(({ rounded, isPrimary, isSecondary }: TButtonProps) => [
  tw`w-full flex items-center cursor-pointer justify-center px-8 py-3 text-base font-medium border border-transparent text-white select-none box-border`,
  rounded && tw`rounded-md`,
  isPrimary && tw`text-indigo-700 bg-indigo-100 hover:bg-indigo-200`,
  isSecondary && tw`text-white bg-indigo-600 hover:bg-indigo-700`
])

export default Button
