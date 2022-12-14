import { useContext } from 'react';
import Image from 'next/image';
import { Box, Icon, Flex } from '@chakra-ui/react';
import { ScrollMenu, VisibilityContext } from 'react-horizontal-scrolling-menu';
import { FaArrowAltCircleLeft, FaArrowAltCircleRight } from 'react-icons/fa';

const LeftArrow = () => {
    const { scrollPrev, isFirstItemVisible } = useContext(VisibilityContext);

    return (
        <Flex justifyContent='center' alignItems='center' marginRight='1'>
            <Icon 
                _disabled={isFirstItemVisible}
                as={FaArrowAltCircleLeft}
                onClick={() => scrollPrev()}
                fontSize='2xl'
                cursor='pointer'
            />
        </Flex>
    )
}

const RightArrow = () => {
    const { scrollNext, isLastItemVisible } = useContext(VisibilityContext);

    return (
        <Flex justifyContent='center' alignItems='center' marginRight='1'>
            <Icon
                _disabled={isLastItemVisible}
                as={FaArrowAltCircleRight}
                onClick={() => scrollNext()}
                fontSize='2xl'
                cursor='pointer'
            />
        </Flex>
    )
}


const ImageScrollbar = ({ data }) => {
  return (
    <ScrollMenu LeftArrow={LeftArrow} RightArrow={RightArrow}>
        {data.map((item) => (
            <Box key={item.id} width='910px' itemID={item.id} overflow='hidden' p='1' >
                <Image 
                    src={item.url}
                    placeholder='blur'
                    blurDataURL={item.url} 
                    width={1000} 
                    height={500} 
                    alt='property' 
                    sizes="(max-width: 500px) 100px, (max-width: 1023px) 400px, 1000px"
                    />
            </Box>
        ))}
    </ScrollMenu>
  )
}

export default ImageScrollbar