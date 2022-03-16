import { Avatar, Box, Flex, Text } from "@chakra-ui/react";

interface ProfileProps {
    showProfileData?: boolean;
}

export function Profile({ showProfileData = true }: ProfileProps) {
    return (
        <Flex align="center">
            {showProfileData && (
                <Box
                    mr="4"
                    textAlign="right"
                >
                    <Text>Handrei Fontana</Text>
                    <Text
                        color="gray.300"
                        fontSize="small"
                    >handreifontana@gmail.com</Text>
                </Box>
            )}

            <Avatar
                size="md"
                name="Handrei Fontana"
                src="https://github.com/handreifontana.png"
            />
        </Flex>
    );
}