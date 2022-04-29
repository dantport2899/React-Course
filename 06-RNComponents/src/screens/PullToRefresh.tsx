import React, { useContext } from 'react'
import { ScrollView, View, RefreshControl } from 'react-native'
import { HeaderTitle } from '../components/HeaderTitle'
import { styles } from '../theme/AppTheme';
import { useState } from 'react';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import { ThemeContext } from '../context/themeContext/ThemeContext';

export const PullToRefresh = () => {
  const {theme:{colors}} = useContext(ThemeContext);


    const {top} = useSafeAreaInsets();

    const [refreshing, setrefreshing] = useState(false);
    const [data, setdata] = useState<string>()

    const onrefresh = () => {
        setrefreshing(true)

        setTimeout(() => {
            console.log('Terminamos');
            setrefreshing(false);
            setdata('Hola Mundo');
        }, 1500);
    }

  return (
      <ScrollView
        style={{
            marginTop:refreshing ? top : 0
        }}
        refreshControl={
            <RefreshControl
                refreshing={refreshing}
                onRefresh={onrefresh}
                progressViewOffset={10}
                progressBackgroundColor={colors.primary}
                colors={['white','red','orange']}
            />
        }
      >
        <View style={styles.globalmargin}>
            <HeaderTitle title='Pull to Refresh'/>
            {
            data && <HeaderTitle title={data}/>
            }
        </View>
      </ScrollView>
      
  )
}
