import React, { useState, useEffect } from 'react';
import { View , Text, FlatList, TouchableOpacity, StyleSheet } from 'react-native';

import api from '../../services/api';

import styles from './styles';

export default function Main() {
  const [ apiInfo , setApiInfo ] = useState({});
  const [ product , setProduct ] = useState([]);
  const [ page , setPage ] = useState(1);
  const [loading, setLoading] = useState(false);
  const [total, setTotal] = useState(0);
  const [refreshing, setRefreshing] = useState(false);

  async function loadProducts(){
    if(loading){
      return;
    }
    if(total > 0 && product.length === total){
      return;
    }

    setLoading(true);

    const response = await api.get(`/products?page=${page}`);

    const { docs, ...Infos } = response.data;

    setProduct([ ...product, ...docs]);
    setTotal(Infos.total);
    setPage(page + 1)
    setLoading(false);

  }


  useEffect(() => {
    loadProducts();
  },[]);

  return (
    <View style={styles.container}>
        <FlatList 
          contentContainerStyle={styles.list}
          data={product}
          keyExtractor={item => item._id}
          renderItem={({ item  }) => (
            <View style={styles.productContainer}>
            <Text style={styles.productTitle}>{item.title}</Text>
            <Text style={styles.productDescription}>{item.description}</Text>
      
            <TouchableOpacity 
              style={styles.productButton} 
              onPress={() => {}}
            >
              <Text style={styles.productButtonText}>Acessar</Text>
            </TouchableOpacity>
          </View>
          )}
        />
    </View>
  );
}
