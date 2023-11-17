"""
Script for generating zeffo sucess

GS

12/11/23
"""

import sys
import numpy as np
import csv

class ZeffoFile(object):
    
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
                data.append(row[0:3])
            it +=1 
        infile.close()
        #print(data)
        return ZeffoFile(data)

import os 
GUILD_NAME = sys.argv[1]
zeffoname = "../"+GUILD_NAME+"Zeffo/BSE - TB3 Planning - Zeffo.csv"
if os.path.exists(zeffoname):
    print("[+] Zeffo Mission data found - proceeding to build")
    zeffo = ZeffoFile.readfile(zeffoname)
    with open("../"+GUILD_NAME+"input_files/zeffo.js.in", "r", encoding="UTF-8") as infile:
        filedata = infile.read()
else:
    print("[-] Zeffo Mission data not found - disabling page build.")
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


with open("../"+GUILD_NAME+"Zeffo/zeffo.js", "w", encoding="UTF-8") as outfile:
    filedata = filedata.replace("$$DATA", replacestring)
    outfile.write(filedata)
