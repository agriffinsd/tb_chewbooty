"""
Script for generating players graph

GS

30/03/23
"""

from tbdata import Player
from tbdata import TBfile
import numpy as np
import sys

# Get most recent tb from the terminal else default to 8
if len(sys.argv) > 1:
    maxtb = int(sys.argv[1])
else:
    maxtb = 8

if len(sys.argv) > 2 and sys.argv[2] == "trendline":
        trendline=True
else:
    trendline=False

files = ["../tb_data/tb_"+str(i)+".csv" for i in range(1,maxtb+1)]
tbdata = [TBfile.readfile(files[i-1], i) for i in range (1,maxtb+1)]

# Sort player data by name
for tb in tbdata:
    tb.data.sort(key=lambda x: x.name.upper(), reverse=False)

names = [tbdata[-1].data[i].name for i in range(len(tbdata[-1].data))]

outdata = []
av_waves = [i.get_average_waves()[0] for i in tbdata]
av_attempts = [i.get_average_waves()[1] for i in tbdata]

for name in names:
    waves = []
    attempts = []
    
    for tb in tbdata:
        playervar = False
        for player in tb.data:
            if player.name == name:
                playervar = True
                waves.append(np.sum(player.waves))
                attempts.append(np.sum(player.attempts))
        if not playervar:
            waves.append(0)
            attempts.append(0)
            
                
    outdata.append([name, waves, attempts])
#print(outdata)

infile = open("../input_files/player.js.in", "r")
filedata = infile.read()
infile.close()
replacestring = \
"  labels: ["
for i in range(1,maxtb+1):
    replacestring += "'TB" + str(i) +"', "
replacestring += "],\n"

replacestring += "  datasets: ["

def array_to_string(arr):
    string = ""
    for val in arr:
        string += "'" + str(val) + "', "
    return string

def player_to_plots():
    plotstr = ""
    for data in outdata:
        colour = [str(np.random.randint(1,256)), \
                  str(np.random.randint(1,256)), \
                  str(np.random.randint(1,256))]
        plotstr += \
        " {\n" +\
        "    label: '"+data[0]+"',\n"+\
        "    data: ["+array_to_string(data[1])+"],\n"\
        "    borderColor:  'rgb("+colour[0]+", "+colour[1]+", "+colour[2]+")',\n"+\
        "    hidden: true,\n"
        if trendline:
            plotstr+="    trendlineLinear: {\n"+\
		    '      lineStyle: "dotted",\n'+\
		    "      width: 2,\n"+\
            "    },\n"
        plotstr+="},\n"
        #,{\n"+\
        #"    label: '"+data[0]+" - Attempts',\n"+\
        #"    data: ["+array_to_string(data[2])+"],\n"\
        #"    borderColor:  'rgb("+colour[0]+", "+colour[1]+", "+colour[2]+")',\n"+\
        #"    hidden: true,\n"+\
        #"},\n"
    return plotstr
    
    
replacestring += \
        " {\n" +\
        "    label: '"+"Guild Average"+" - Waves',\n"+\
        "    data: ["+array_to_string(av_waves)+"],\n"\
        "    borderColor:  'rgb(0, 0, 0)',\n"+\
        "    hidden: false,\n"
if trendline:
        replacestring+="    trendlineLinear: {\n"+\
		    '      lineStyle: "dotted",\n'+\
		    "      width: 2,\n"+\
            "    },\n"
replacestring+=\
        "},{\n"+\
        "    label: '"+"Guild Average"+" - Attempts',\n"+\
        "    data: ["+array_to_string(av_attempts)+"],\n"\
        "    borderColor:  'rgb(0, 0, 0)',\n"+\
        "    hidden: true,\n"+\
        "},\n"    
    
replacestring += player_to_plots()
replacestring += "]\n"

outfile = open("../players/player.js", "w")
filedata = filedata.replace("$$PLOTS", replacestring)
outfile.write(filedata)
outfile.close()
