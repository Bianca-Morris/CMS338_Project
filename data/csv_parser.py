#I missed you, precious python!
import csv

dataFile = open('assorted_country_data.csv')
csvString = csv.reader(dataFile)

#count = 30
def createListOfDicts(rowNumber):
    parsedData = []
    list = []
    for row in csvString:
        while row == 0:
            print row[rowNumber]
            break
        country = row[0]
        data = row[rowNumber]
        list = [country,data]
        parsedData.append(list)
    return parsedData
print createListOfDicts(4)
#Adolescent_Fert_Rate = createListOfDicts(1)
#print Adolescent_Fert_Rate
#Skilled_Staff_Births = createListOfDicts(2)
#print Skilled_Staff_Births
#list3 = createListOfDicts(3)
#print list3
dataFile.close
