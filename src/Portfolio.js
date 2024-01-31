import React from 'react';
import { Document, Page, Text,View, StyleSheet, PDFViewer } from '@react-pdf/renderer';

const Portfolio =()=>{
   return(
    <PDFViewer style={{width:'100%',height:'100vh'}}>
    <Document>
    <Page size="A4" style={styles.page}>
           {/* Header */}
           <View style={styles.header}>
            <Text style={styles.title}>AANCHAL KUMARI</Text>
            <Text style={styles.subtitle}>aanchu3019@gmail.com | +916200447021</Text>
          </View>

          {/* Education Section */}
          <View style={styles.section}>
            <Text style={styles.sectionTitle}>Education :</Text>
            <Text>Darbhanga College of Engineering, Bihar, India 2020 - 2024</Text>
            <Text>Current CGPA– 8.39 CGPA (aggregate 5 semesters)</Text>
            <Text>12th from CBSE, S.R.T School, Muzaffarpur, Bihar in 2020, secured 84.40%.</Text>
            <Text>10th from CBSE, Asain School, Muzaffarpur, Bihar in 2018, secured 87.80%.</Text>
          </View>

          {/* Extracurricular Activity Section */}
          <View style={styles.section}>
            <Text style={styles.sectionTitle}>Extracurricular Activity:</Text>
            <Text>Newton School Coding Club: July’22-December’22</Text>
            <Text>Vice-President at NSCC. Initiated the Coding Club in my college.</Text>
            <Text>As the Vice-President at Newton School Coding Club (NSCC).</Text>
            <Text>As a Mentee for Microsoft Engage 2022: May’22-June’22</Text>
            <Text>As a Mentee for Microsoft Engage 2022, I created the movie recommendation program Cine_Mate.</Text>
          </View>

          {/* Project Section */}
          <View style={styles.section}>
            <Text style={styles.sectionTitle}>Project:</Text>
            <Text>Library Management System:</Text>
            <Text>Developed a comprehensive library management system's front and back ends as a DBMS project.</Text>
            <Text>Used MySQL, PHP, and JavaScript to manage data and interact with users effectively.</Text>
            <Text>Xampp was used as the backend environment to facilitate effective deployment.</Text>
            <Text>Website Portfolio:</Text>
            <Text>Used HTML, CSS, and JavaScript to produce an engaging and flexible portfolio website.</Text>
            <Text>Cine_Mate:</Text>
            <Text>Movie recommendation system that uses Python, Flask as a framework, HTML/CSS/JS for the front end,</Text>
            <Text>and TMDB as an API.</Text>
            <Text>This program offers all the requested information about the desired movie, including a synopsis, the</Text>
            <Text>genre, the release date, the rating, the length, the top cast, reviews, suggested viewings, etc.</Text>
          </View>

          {/* Technical Skills Section */}
          <View style={styles.section}>
            <Text style={styles.sectionTitle}>Technical Skills:</Text>
            <Text>Programming Languages: C, C++, Java</Text>
            <Text>Skills: OOPs, DSA</Text>
            <Text>Development: HTML, CSS, JS, Flutter(Basic), SQL, Xampp, PHP</Text>
            <Text>Editing(Basic): Canva</Text>
          </View>


          {/* Certificates Section */}
          <View style={styles.section}>
            <Text style={styles.sectionTitle}>Certificates:</Text>
            <Text> NPTEL: 1.) Certificate in Soft Skills 2.) Certificate in Networking</Text>
          </View>

          {/* Attributes Section */}
          <View style={styles.section}>
            <Text style={styles.sectionTitle}>Attributes:</Text>
            <Text>Hobbies: Painting(Mandala Art, Canvas, Sketch), Art and Craft</Text>
          </View>
          {/* Footer */}
          <View style={styles.footer}>
            <Text style={styles.pageNumber} render={({ pageNumber, totalPages }) => `${pageNumber}/${totalPages}`} fixed />
          </View>
        </Page>
    </Document>
    </PDFViewer>
   );
};
const styles =StyleSheet.create({
    pages:{
        flexDirection:'column',
        margin:10,
    },
    header:{
        textAlign:'center',
        marginBottom:10,
    },
    title:{
        fontSize:20,
        fontWeight:'bold',
    },
    content:{
        margin:10,
    },
    footer:{
        textAlign:'center',
        marginTop:10,
    },
    pageNumber:{
        fontSize:12,
        margin:5,
    },
});
export default Portfolio;
