from tbdata import Player
from tbdata import TBfile
import numpy as np

maxtb = 8
files = ["../tb_data/tb_"+str(i)+".csv" for i in range(1,maxtb+1)]
tbdata = [TBfile.readfile(files[i-1], i) for i in range (1,maxtb+1)]

print(files)

names = [tbdata[-1].data[i].name for i in range(len(tbdata[-1].data))]

outdata = []
av_waves = [43.62,42.2,41.4,44.8,48,49,49,50]
av_attempts = [44.24,38.8,41.3,43.4,41,41,41,40]
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
print(outdata)

infile = open("../input_files/player.js.in", "r")
filedata = infile.read()
infile.close()
replacestring = \
"  labels: ['TB1', 'TB2', 'TB3', 'TB4', 'TB5', 'TB6', 'TB7', 'TB8'],\n"+\
"  datasets: ["

def array_to_string(arr):
    string = ""
    for val in arr:
        string += "'" + str(val) + "', "
    return string



def player_to_plots():
    plotstr = ""
    colvar = 1
    for data in outdata:
        plotstr += \
        " {\n" +\
        "    label: '"+data[0]+"',\n"+\
        "    data: ["+array_to_string(data[1])+"],\n"\
        "    borderColor:  'rgb(75, 200, 200)',\n"+\
        "    hidden: true,\n"+\
        "},\n"
        #,{\n"+\
        #"    label: '"+data[0]+" - Attempts',\n"+\
        #"    data: ["+array_to_string(data[2])+"],\n"\
        #"    borderColor:  'rgb(200, 75, 75)',\n"+\
        #"    hidden: true,\n"+\
        #"},\n"
    return plotstr
    
    
replacestring += \
        " {\n" +\
        "    label: '"+"Guild Average"+" - Waves',\n"+\
        "    data: ["+array_to_string(av_waves)+"],\n"\
        "    borderColor:  'rgb(0, 0, 0)',\n"+\
        "    hidden: false,\n"+\
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
