import { StyledTagType } from './style'

const TagType = ({textType}:{textType:string}) => {
  return (
    <StyledTagType textType={textType}>
      {textType}
    </StyledTagType>
  )
}

export default TagType
