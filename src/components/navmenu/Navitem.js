import { useNavigate } from 'react-router-dom';
import {
    Box,
    CloseButton,
    Flex,
    Icon,
    useColorModeValue,
    Text,
    Image,
    Center,
    Button,
  } from '@chakra-ui/react';



const NavItem = ({ icon, children, pathname, ...rest }) => {
  const currentPathName = window.location.pathname;
  const isActive = pathname === currentPathName;

  return (
    <Box
      as="a"
      href={pathname}
      style={{ textDecoration: 'none' }}
      _focus={{ boxShadow: 'none' }}
      transition="3s ease"
    >
      <Flex
        align="center"
        pt="12px"
        pb="12px"
        pl="16px"
        pr="16px"
        mx="4"
        borderRadius="lg"
        role="group"
        cursor="pointer"
        bgColor={isActive ? '#0a0a0a' : 'none'}
        color={isActive ? 'white' : 'whitesmoke'}
        fontSize="20"
        _hover={{
          bgColor: '#01050f',
          color: 'white',
        }}
        {...rest}
      >
        {icon && (
          <Icon
            mr="4"
            fontSize="14"
            _groupHover={{
              color: 'white',
            }}
            as={icon}
          />
        )}
        {children}
      </Flex>
    </Box>
  );
};
export default NavItem;