//Empty Setup (16:52): https://youtu.be/mJ3bGvy0WAY?t=1012

import { View, Text, SafeAreaView, ScrollView } from 'react-native';
//Built out at (24:56): https://youtu.be/mJ3bGvy0WAY?t=1496
import { useState } from 'react';
import { Stack, useRouter } from 'expo-router';

import { COLORS, icons, images, SIZES } from '../constants';

import { Nearbyjobs, Popularjobs, ScreenHeaderBtn, Welcome } from '../components';

const Home = () => {

    const router = useRouter(); 

// View is the standard, SafeAreaView allows you to avoid overlapping buttons? 
// Stack.Screen takes options which is an object options={{}}
    return (
        <SafeAreaView style={{ flex: 1, backgroundColor: COLORS.lightWhite }}>
            <Stack.Screen 
                options={{
                    headerStyle: { backgroundColor: COLORS.lightWhite},
                    headerShadowVisible: false,
                    headerLeft: () => (
                        <ScreenHeaderBtn iconUrl={icons.menu} dimension="60%" />
                    ),
                    headerRight: () => (
                        <ScreenHeaderBtn iconUrl={images.profile} dimension="100%" />
                    ),
                    headerTitle: ""
                }}
            />

            <ScrollView showsVerticalScrollIndicator={false}>

                <View  style={{ flex: 1, padding: SIZES.medium }} >

                        <Welcome />

                        <Popularjobs />

                        <Nearbyjobs />

                </View>

            </ScrollView>
        </SafeAreaView>
    )
}

export default Home;