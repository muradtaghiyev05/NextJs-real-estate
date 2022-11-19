import { useState } from 'react'
import { useRouter } from 'next/router'
import Image from 'next/image'
import { Flex, Box, Text, Icon } from '@chakra-ui/react'
import { BsFilter } from 'react-icons/bs'
import SearchFilters from '../components/SearchFilters'
import Property from '../components/Property' 
import noResult from '../assets/no-result.svg'
import { baseUrl, fetchApi } from '../utils/fetchApi'

const search = ({ properties }) => {

    const [searchFilters, setSearchFilters] = useState(false);
    const router = useRouter();

    return (
        <Box>
            <Flex
                cursor='pointer'
                bg='gray.100'
                borderBottom='1px'
                borderColor='gray.200'
                p='2'
                fontWeight='black'
                fontSize='lg'
                justifyContent='center'
                alignItems='center'
                onClick={() => setSearchFilters(prevFilter => !prevFilter)}
            >
                <Text>Search Property By Filters</Text>
                <Icon paddingLeft='2' w='7' as={BsFilter} />
            </Flex>
            {searchFilters && <SearchFilters />}
            <Text fontSize='2xl' p='4' fontWeight='bold'>
                Properties {router.query.purpose}
            </Text>
            <Flex flexWrap='wrap'>
                {properties.map(property => <Property property={property} /> )}
            </Flex>
            {properties.length === 0 && (
                <Flex justifyContent='center' alignItems='center' flexDirection='column' m='2'>
                    <Image alt='no result' src={noResult} />
                    <Text fontSize='2xl' marginTop='3'>No Results Found</Text>
                </Flex>
            )}

        </Box>
  )
}

export default search

export const getServerSideProps = async ({ query }) => {

    const data = await fetchApi({
        purpose: query.purpose || 'for-rent',
        rentFrequency: query.rentFrequency || 'yearly',
        minPrice: query.minPrice || '0',
        maxPrice: query.maxPrice || '1000000',
        roomsMin: query.roomsMin || '0',
        bathsMin: query.bathsMin || '0',
        sort: query.sort || 'price-desc',
        areaMax: query.areaMax || '35000',
        locationExternalIDs: query.locationExternalIDs || '5002',
        categoryExternalID: query.categoryExternalID || '4',
    }, `${baseUrl}/properties/list`);
    

    return {
        props: {
            properties: data?.hits,
        }
    }
}