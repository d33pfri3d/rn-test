import { StatusBar } from 'expo-status-bar';
import { Button, StyleSheet, Text, TextInput, View } from 'react-native';
import { useState } from 'react';
import "@ethersproject/shims";
import { ethers } from 'ethers';
import React from 'react';

export function ImportWallet() {
  const [mneumonic, setMneumonic] = useState<string>('');
  const [wallet, setWallet] = useState<ethers.HDNodeWallet>();
  const [error, setError] = useState<string>();

  const handleSeedPhraseChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setMneumonic(event.target.value);
  };

  const importWalletFromSeedPhrase = async () => {
    try {
      const wallet = ethers.Wallet.fromPhrase(mneumonic);;
      setWallet(wallet);
    } catch (error: any) {
      setError(error.message);
    }
  };


  return (
    <View>
      <TextInput style={{ height: 40, borderColor: 'gray', borderWidth: 1, width: '100%' }} value={mneumonic} onChange={() => handleSeedPhraseChange} />
      <button onClick={importWalletFromSeedPhrase}>Import wallet</button>
      {wallet && (
        <View>
          <p>Wallet address: {wallet.address}</p>
          <p>Private key: {wallet.privateKey}</p>
        </View>
      )}
      {error && <p>{error}</p>}
      <Button
        title="Import Wallet"
        onPress={() => {
          console.log(mneumonic);
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
