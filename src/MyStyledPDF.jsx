import React from 'react';
import { Document, Page, Text, View, StyleSheet } from '@react-pdf/renderer';

const MyStyledPDF = () => {
  const styles = StyleSheet.create({
    document: {
      fontFamily: 'Helvetica',
      color: 'black',
    },
    page: {
      size: 'A4',
      margin: 20,
      flexDirection: 'column',
    },
    header: {
      marginBottom: 10,
      textAlign: 'center',
    },
    footer: {
      marginTop: 10,
      textAlign: 'center',
      fontSize: 10,
    },
    content: {
      flexGrow: 1,
    },
  });

  return (
    <Document>
      <Page size="A4" style={styles.page}>
        <View style={styles.header}>
          <Text>My PDF Header</Text>
        </View>

        <View style={styles.content}>
          <Text>This is the main content of your PDF.</Text>
        </View>

        <View style={styles.footer}>
          <Text>Page 1 of 1</Text>
        </View>
      </Page>
    </Document>
  );
};

export default MyStyledPDF;
