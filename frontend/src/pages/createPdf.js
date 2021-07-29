import React from 'react';
import {PDFViewer, Page, Text, View, Document, StyleSheet } from '@react-pdf/renderer';
import ReactDOM from 'react-dom';

// Create styles
const styles = StyleSheet.create({
  page: {
    flexDirection: 'row',
    backgroundColor: '#E4E4E4'
  },
  section: {
    margin: 10,
    padding: 10,
    flexGrow: 1
  }
});

// Create Document Component
const createPdf = (children) => {
    return(
        <PDFViewer>
            <Document>
                <Page size="A4" style={styles.page}>
                <View style={styles.section}>
                    
                </View>
                </Page>
            </Document>
        </PDFViewer>
    );
  
};
export default createPdf;