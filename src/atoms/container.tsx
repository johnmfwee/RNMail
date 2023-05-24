import { Theme } from '@/themes'
import { BoxProps } from '@shopify/restyle'
import * as React from 'react'
import Box from './box'

const Container: React.FC<BoxProps<Theme>> = props => (
  <Box {...props} flex={1} backgroundColor="$background">
    {props.children}
  </Box>
)

export default Container
