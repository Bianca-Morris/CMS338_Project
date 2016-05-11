// JavaScript Document
// Author: Bianca Morris
// Client: SeedKit
// Purpose: CMS .338 Final Project
// Date: 5/11/2016
// Data Source: UNdata.org
//
<!--
// All of the sets of data for the domain
var waterData = [['Armenia', '95.5'], ['Bahrain', '100'], ['Barbados', '98.4'], ['Belarus', '99.5'], ['Belize', '91.1'], ['Bulgaria', '99.6'], ['Cambodia', '52.9'], ['Cape Verde', '85.6'], ['Cuba', '92.1'], ['Estonia', '99.2'], ['Ethiopia', '38.3'], ['Grenada', '96.6'], ['Guinea', '67.8'], ['Hungary', '99.2'], ['Jamaica', '93.6'], ['Kazakhstan', '93.5'], ['Lao PDR', '56.8'], ['Lithuania', '93'], ['Mauritius', '99.5'], ['Mongolia', '60.2'], ['Oman', '87.8'], ['Pakistan', '89.5'], ['Panama', '91.4'], ['Poland', '96.8'], ['Romania', '91.1'], ['Senegal', '71.1'], ['Slovenia', '99.6'], ['Tajikistan', '64.6'], ['Ukraine', '97.2']];

var tbirthData = [['Armenia', '30.9'], ['Bahrain', '18.7'], ['Barbados', '42.6'], ['Belarus', '24.2'], ['Belize', '91.2'], ['Bulgaria', '43.5'], ['Cambodia', '49.3'], ['Cape Verde', '93.7'], ['Cuba', '50.3'], ['Estonia', '22.9'], ['Ethiopia', '110.3'], ['Grenada', '51.2'], ['Guinea', '169.2'], ['Hungary', '21.4'], ['Jamaica', '88.4'], ['Kazakhstan', '28.4'], ['Lao PDR', '88.4'], ['Lithuania', '21.5'], ['Mauritius', '38.2'], ['Mongolia', '49.7'], ['Oman', '13.1'], ['Pakistan', '22'], ['Panama', '89'], ['Poland', '14.5'], ['Romania', '35.8'], ['Senegal', '103.7'], ['Slovenia', '6.2'], ['Tajikistan', '31.6'], ['Ukraine', '29.6']];

var ssbirthData = [['Armenia', '97.8'], ['Bahrain', '99'], ['Barbados', '100'], ['Belarus', '100'], ['Belize', '89.3'], ['Bulgaria', '99.4'], ['Cambodia', '43.8'], ['Cape Verde', '77.5'], ['Cuba', '99.9'], ['Estonia', '99.8'], ['Ethiopia', '5.7'], ['Grenada', '100'], ['Guinea', '38'], ['Hungary', '99.6'], ['Jamaica', '96.7'], ['Kazakhstan', '99.4'], ['Lao PDR', '14.6'], ['Lithuania', '100'], ['Mauritius', '99.2'], ['Mongolia', '99.2'], ['Oman', '98'], ['Pakistan', '31'], ['Panama', '91.1'], ['Poland', '99.9'], ['Romania', '98.1'], ['Senegal', '51.9'], ['Slovenia', '99.9'], ['Tajikistan', '83.4'], ['Ukraine', '99.8']];

var birthData = [['Armenia', '1.737'], ['Bahrain', '2.449'], ['Barbados', '1.759'], ['Belarus', '1.21'], ['Belize', '3.072'], ['Bulgaria', '1.32'], ['Cambodia', '3.227'], ['Cape Verde', '2.87'], ['Cuba', '1.637'], ['Estonia', '1.52'], ['Ethiopia', '5.693'], ['Grenada', '2.344'], ['Guinea', '5.729'], ['Hungary', '1.31'], ['Jamaica', '2.47'], ['Kazakhstan', '2.22'], ['Lao PDR', '3.66'], ['Lithuania', '1.29'], ['Mauritius', '1.88'], ['Mongolia', '2.176'], ['Oman', '2.957'], ['Pakistan', '4.067'], ['Panama', '2.562'], ['Poland', '1.24'], ['Romania', '1.39'], ['Senegal', '5.232'], ['Slovenia', '1.26'], ['Tajikistan', '3.543'], ['Ukraine', '1.213']];

var gdpData = [['Armenia', '13.86571125'], ['Bahrain', '6.768939709'], ['Barbados', '4.035433071'], ['Belarus', '9.4'], ['Belize', '2.578008809'], ['Bulgaria', '7.236192997'], ['Cambodia', '13.25008556'], ['Cape Verde', '6.912457988'], ['Cuba', '11.20171308'], ['Estonia', '9.373736784'], ['Ethiopia', '11.81876594'], ['Grenada', '13.27306387'], ['Guinea', '2.997272561'], ['Hungary', '4.354623581'], ['Jamaica', '0.893797936'], ['Kazakhstan', '9.699999999'], ['Lao PDR', '7.107568369'], ['Lithuania', '7.727407918'], ['Mauritius', '1.241387547'], ['Mongolia', '7.253665441'], ['Oman', '2.49045836'], ['Pakistan', '7.667304271'], ['Panama', '7.191279079'], ['Poland', '3.547057816'], ['Romania', '4.171876956'], ['Senegal', '5.622606857'], ['Slovenia', '4.002988098'], ['Tajikistan', '6.7'], ['Ukraine', '2.699999984']];

// All of the sets of data for the range
var secondaryData = [['Armenia', '86'], ['Bahrain', '93'], ['Barbados', '97'], ['Belarus', '89'], ['Belize', '72'], ['Bulgaria', '87'], ['Cambodia', '22'], ['Cape Verde', '60'], ['Cuba', '88'], ['Estonia', '93'], ['Ethiopia', '22'], ['Grenada', '80'], ['Guinea', '17'], ['Hungary', '90'], ['Jamaica', '80'], ['Kazakhstan', '91'], ['Lao PDR', '35'], ['Lithuania', '91'], ['Mauritius', '82'], ['Mongolia', '90'], ['Oman', '76'], ['Pakistan', '18'], ['Panama', '67'], ['Poland', '94'], ['Romania', '82'], ['Senegal', '15'], ['Slovenia', '95'], ['Tajikistan', '73'], ['Ukraine', '77']];

var primaryData = [['Armenia', '81'], ['Bahrain', '97'], ['Barbados', '98'], ['Belarus', '88'], ['Belize', '96'], ['Bulgaria', '93'], ['Cambodia', '98'], ['Cape Verde', '89'], ['Cuba', '96'], ['Estonia', '95'], ['Ethiopia', '59'], ['Grenada', '83'], ['Guinea', '61'], ['Hungary', '88'], ['Jamaica', '90'], ['Kazakhstan', '90'], ['Lao PDR', '81'], ['Lithuania', '89'], ['Mauritius', '96'], ['Mongolia', '85'], ['Oman', '76'], ['Pakistan', '59'], ['Panama', '98'], ['Poland', '97'], ['Romania', '92'], ['Senegal', '67'], ['Slovenia', '98'], ['Tajikistan', '96'], ['Ukraine', '83']];


// Variables for selecting data sets
//domain data = X
var x = waterData;
//range data = Y
var y = secondaryData;

//sets up variables for axis labels
var xlabel = "Percent of Population Without Water Access";
var ylabel = "Net Enrollment of Females in Secondary School";
-->