import { StyledTagType } from './style'

const TagType = ({textType}:any) => {
  return (
    <StyledTagType textType={textType}>
      {textType}
    </StyledTagType>
  )
}

export default TagType
