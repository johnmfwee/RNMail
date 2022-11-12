import { DrawerContentComponentProps } from '@react-navigation/drawer'
import React from 'react'
import { View } from 'react-native'

const Sidebar: React.FC<DrawerContentComponentProps> = () => {
  return <View style={{ backgroundColor: 'red', flex: 1 }}></View>
}

export default Sidebar
