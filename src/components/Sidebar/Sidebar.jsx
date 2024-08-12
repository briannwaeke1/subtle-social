import { Box, Flex, Link, Image } from "@chakra-ui/react";
import { Link as RouterLink } from "react-router-dom";
const Sidebar = () => {
  return (
    <Box
      h="100vh"
      borderRight={"1px solid"}
      borderColor="whiteAlpha.300"
      py={0}
      position={"sticky"}
      top={0}
      left={0}
      px={{ base: 2, md: 4 }}
    >
      <Flex direction="column" gap={10} w="full" height="full">
        <Link
          to={"/"}
          as={RouterLink}
          pl={2}
          display={{ base: "none", md: "block" }}
          cursor="pointer"
        >
          {/* TextLogo */}
          <Image
            src="/subtleSocial_text.png"
            h={40}
            alt="subtleSocial"
            w={"full"}
          />
        </Link>
      </Flex>
    </Box>
  );
};

export default Sidebar;
