import { StyledTagType } from './style'

const TagType = ({textType}) => {
  return (
    <StyledTagType textType={textType}>
      {textType}
    </StyledTagType>
  )
}

export default TagType
