import React from 'react';
import { Box, Flex, Heading, Image, Text } from '@chakra-ui/react';
import CafeDaManha from '../../Images/cafedamanha.jpg';
import Almoco1 from '../../Images/almoco1.jpg';
import JantarS from '../../Images/jantars.jpg'
import Lanche1 from '../../Images/hamburguer.jpg'

const CardRecipe = () => {
    const foods = [
        { name: 'Café da Manhã', imageSrc: CafeDaManha },
        { name: 'Receitas para almoço', imageSrc: Almoco1 },
        { name: 'Jantar', imageSrc: JantarS },
        { name: 'Receitas de Lanches', imageSrc: Lanche1 },
    ];

    return (
        <Box mt="20px" ml="20px"  >
            <Heading as="h1" size="md" color='black'>Recomendações do Dia: </Heading>
            <Flex alignItems="center" mt="20px" justifyContent={'space-around'}>
                {foods.map((food, index) => (
                    <Flex key={index} flexDirection="column" alignItems="center" mr="20px">
                        <Image src={food.imageSrc} alt={food.name} boxSize="250px" borderRadius={'5%'} />
                        <Text textAlign="center" mt="5px">{food.name}</Text>
                    </Flex>
                ))}
            </Flex>
        </Box>
    );
};

export default CardRecipe;
