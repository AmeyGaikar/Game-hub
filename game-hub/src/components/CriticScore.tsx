import { Badge } from "@chakra-ui/react"

interface Prop {
    score: number
}

const CriticScore = ({score}: Prop) => {
    let color = score > 75 ? 'green' : score > 60 ? 'yellow' : '' 
  return (
    <Badge colorScheme={color} fontSize='14px' paddingX={2} borderRadius='4px' > {score} </Badge>
  )
}

export default CriticScore