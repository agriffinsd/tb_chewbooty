"""
Script for generating zeffo sucess

GS

12/11/23
"""

import sys
import numpy as np
import csv

class RevaFile(object):
    
    def __init__(self, data):
        self.data = data
    
    @staticmethod
    def readfile(filein):
        data = []
        infile = open(filein, "r")
        inputdata = csv.reader(infile, delimiter=',')
        it = 0
        for row in inputdata:
            if it > 1:
                #print(row)
                if row[1] != "":
                    data.append(row[1:4])
            it +=1 
        infile.close()
        #print(data)
        return RevaFile(data)

import os 
GUILD_NAME = sys.argv[1]
zeffoname = "../"+GUILD_NAME+"reva/Chewbooty - TB Planning - Reva.csv"
if os.path.exists(zeffoname):
    print("[+] Reva Mission data found - proceeding to build")
    zeffo = RevaFile.readfile(zeffoname)
    with open("../"+GUILD_NAME+"input_files/reva2.js.in", "r", encoding="UTF-8") as infile:
        filedata = infile.read()
else:
    print("[-] Reva Mission data not found - disabling page build.")
    exit()

# Sort player data by name
zeffo.data.sort(key=lambda x: x[0].upper(), reverse=False)
replacestring = ""
for player in zeffo.data:
    colour = [str(np.random.randint(1,256)), \
                  str(np.random.randint(1,256)), \
                  str(np.random.randint(1,256))]
    replacestring += \
        " {\n" +\
        "    label: '"+player[0]+"',\n"+\
        "    data: [{\n"+\
        "      x:"+player[2]+",\n"+\
        "      y:"+player[1]+",\n"+\
        "    }],\n"+\
        "    backgroundColor:  'rgb("+colour[0]+", "+colour[1]+", "+colour[2]+")',\n"+\
        "    borderColor:  'rgb("+colour[0]+", "+colour[1]+", "+colour[2]+")',\n"+\
        "    pointRadius: 10,\n"+\
        "    pointHoverRadius: 8,\n"+\
        "    hidden: false,\n"+\
        "    },"


with open("../"+GUILD_NAME+"reva/reva2.js", "w", encoding="UTF-8") as outfile:
    filedata = filedata.replace("$$DATA", replacestring)
    outfile.write(filedata)
