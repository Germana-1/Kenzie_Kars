import { Flex, Text, Image } from "@chakra-ui/react"
import PersonIcon from "../../../src/assets/person-icon.jpg"

export const SearchNotFound = () => {
    return (
        <Flex w={"full"} flexDir={"column"} justifyContent={"center"} alignItems={"center"} gap={3}>
            <Text fontSize={"2.75rem"} fontWeight={600} textAlign={"center"}>Nenhum resultado encontrado</Text>
            <Image h={500} src={PersonIcon}/>
        </Flex>
    )
}