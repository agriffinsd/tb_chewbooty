import sys
import csv
def usernames(cheatfile):
    userdict = {}
    with open(cheatfile, "r") as csv_file:
        csv_reader = csv.DictReader(csv_file)
        for row in csv_reader:
            userdict[row["Name"]] = row["AllyCode"]
    return userdict



def main():

    with open(sys.argv[1],"r") as infile:
        text = infile.readlines()

    date = text[-1].strip("\n").split(" ")
    print(date)
    names = usernames(sys.argv[2])
    for it in range(1,len(text),2):
        text.append("")
        if it > 4:
            name = text[it].strip("\n")
            score = text[it+1].strip("\n").replace(",","")
            try:
                ac = names[name]
            except:
                ac = '0'
            print('"'+date[3].strip(",")+" "+date[4]+" "+date[6]+'",'+'"speederbike",'+'"'+ac+'",'+name+',"'+score+'","'+ str(int((it-4)/2))+ '"')


main()
