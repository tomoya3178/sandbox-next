import { Button, HStack } from '@chakra-ui/react'
import { NextPage } from 'next'
import Navigation from '../components/navigation'

const Home: NextPage = () => {
  return <HStack>
      <Navigation />
      <Button colorScheme='blue'>Button</Button>
      <Button colorScheme='blue'>Button</Button>
    </ HStack>
}

export default Home
