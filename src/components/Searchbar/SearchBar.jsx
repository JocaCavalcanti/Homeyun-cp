import React from 'react';
import { Input, InputGroup, InputRightElement, IconButton, Box, Image } from '@chakra-ui/react';
import { SearchIcon } from '@chakra-ui/icons';
import LogoHeader1 from '../../Images/Group.png';

const SearchBar = () => {
    const containerStyle = {
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        marginTop: '2%',
    };

    const searchBarStyle = {
        maxWidth: '700px',
        border: '1px solid black',
        borderRadius: 'md',
    };

    const imageStyle = {
        marginTop: '15px',
    };

    return (
        <div style={containerStyle}>
            <Box boxSize='200px'>
                <Image src={LogoHeader1} alt='Logo Header' boxSize="100%"  />
            </Box>
            <InputGroup {...searchBarStyle} style={imageStyle}>
                <Input placeholder="Search" />
                <InputRightElement>
                    <IconButton
                        aria-label="Search"
                        icon={<SearchIcon />}
                        variant="ghost"
                    />
                </InputRightElement>
            </InputGroup>
        </div>
    );
};

export default SearchBar;
