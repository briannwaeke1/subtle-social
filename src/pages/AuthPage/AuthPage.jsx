import { Flex, Container, Image, Box, VStack } from "@chakra-ui/react";
import AuthForm from "../../components/AuthForm/AuthForm";
const AuthPage = () => {
  return (
    <Flex minH={"100vh"} justifyContent={"center"} alignItems={"center"} px={4}>
      <Container maxW={"container.md"} padding={0}>
        <Flex justifyContent={"center"} alignItems={"center"} gap={10}>
          {/* left hand-side */}
          <Box display={{ base: "none", md: "block" }}>
            <Image
              src="/subtleSocial_transparent-.png"
              h={650}
              alt="Auth img"
            />
          </Box>

          {/* right hand-side */}
          <VStack spacing={4} align={"stretch"}>
            <AuthForm />
            <Box textAlign={"center"}>Get the app</Box>
            <Flex gap={5} justifyContent={"center"}>
              <Image src="/playstore.png" h={12} alt="Playstore img" />
              <Image src="/microsoft.png" h={12} alt="microsoft img" />
            </Flex>
          </VStack>
        </Flex>
      </Container>
    </Flex>
  );
};

export default AuthPage;
