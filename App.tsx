import { StatusBar } from 'expo-status-bar';
import { Button, Dimensions, StyleSheet, Text, TextInput, View } from 'react-native';
import React, { SyntheticEvent, useState } from 'react';
import {mnemonicToSeed} from 'bip39'; 

type WalletType = {
  address: string;
  privateKey: string;
};

export function ImportWallet() {
  const [mneumonic, setMneumonic] = useState('');
  const [wallet, setWallet] = useState<WalletType>();
  const [error, setError] = useState<string>();

  const getWalletFromSeeedPhrase = async (mneumonic: string): Promise<WalletType> => {
    let seed = await mnemonicToSeed(mneumonic);

    // Having issues with this library or the integration with expo
    console.log('seed', seed);

    // here I would get the hdkey using the ethereumjs-wallet library
    // then get the root using the derived path
    // get the child using the derivedChild method and pass in the index (0 by default)
    // then get the address and private key from the child using the getAddressString and getPrivateKeyString methods

    return wallet

  };
  
  const importWalletFromSeedPhrase = async () => {
    console.log('importWalletFromSeedPhrase');
    const test_seed = 'zero road absurd decrease frozen oblige curtain heart frown minimum flower toe';
    try {
      const wallet = await getWalletFromSeeedPhrase(test_seed);
      console.log('wallet', wallet);
      setWallet(wallet);
    } catch (error: any) {
      console.error(error);
      setError(error.message);
    }
  };


  const saveWallet = async () => {
    // save the wallet to the device

    // use AES encryption to encrypt the private key - either an existing lib or roll your own

    // save the encrypted private key to the device, using the keychain or secure storage library
  };



  return (
    <View style={{flex:1, backgroundColor: 'hotpink', width: Dimensions.get('window').width, paddingTop: 60}}>
      <Text>{mneumonic}</Text>
      <TextInput onChangeText={(text) => setMneumonic(text)} style={{ height: 40, borderColor: 'gray', borderWidth: 1, width: '100%' }} value={mneumonic} />
      {wallet && (
        <View>
          <Text>Wallet address: </Text>
          <Text>Private key: </Text>
        </View>
      )}
      {error && <Text>{error}</Text>}
      <Button
        title="Import Wallet"
        onPress={() => {
          importWalletFromSeedPhrase();
        }}
      />
      <Button
        title="Save Wallet"
        onPress={() => {
          saveWallet();
        }}
      />
    </View>
  )
};


export default function App() {

  return (
    <View style={styles.container}>
      <StatusBar style="auto" />
      <ImportWallet />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
