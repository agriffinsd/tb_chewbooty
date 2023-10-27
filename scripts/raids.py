"""
Krayt Dragon Raid Tracker
"""

import csv
import sys
import numpy as np

class player():
    def __init__(self, name, scores):
        self.name = name
        self.scores = scores


class raid():

    def __init__(self, raidtype, scores, date):
        self.type = raidtype
        self.scores = scores
        self.date = date
        self.average = -1
        self.total = -1

    def calc_average(self):
        self.average = np.average([int(pair[1]) for pair in self.scores])
    def calc_total(self):
        self.total = np.sum([int(pair[1]) for pair in self.scores])


class raidfile():

    def __init__(self):
        pass

    @staticmethod
    def readfile(filename):
        data = []
        infile = open(filename, "r")
        inputdata = csv.reader(infile, delimiter=',')
        raids = []
        it = 0
        for row in inputdata:
            if it > 0:
                if len(raids)==0 or row[0] != raids[-1].date:
                    raids.append(raid(row[1],[],row[0]))
                raids[-1].scores.append([row[3],row[4]])
            it +=1 
        infile.close()
        return raids

    @staticmethod
    def make_players(raids_list):
        players = []
        for pair in raids_list[0].scores:
            players.append(player(pair[0],[]))
        return players



raids = raidfile.readfile(sys.argv[1])
players = raidfile.make_players(raids)
average_player = player("Guild Average", [])

crate90 = player("90m Guild Crate", [])
crate130 = player("130m Guild Crate", [])
crate265 = player("265m Guild Crate", [])

crates = [crate90, crate130, crate265]


dates = []

for raid in raids:
    raid.calc_average()
    raid.calc_total()
    crate90.scores.append(str(90000000/50))
    crate130.scores.append(str(130000000/50))
    crate265.scores.append(str(265000000/50))
    print(raid.total, raid.average)
    dates.append(raid.date.split(" ")[0])
    average_player.scores.append(raid.average)
    for pair in raid.scores:
        for player in players:
            if pair[0] == player.name:
                player.scores.append(pair[1])
    maxlength = np.max([len(player.scores) for player in players])
    for player in players:
        if len(player.scores) != maxlength:
            player.scores.append("0")


for player in players:
    player.scores.reverse()
    #print(player.name, player.scores)

average_player.scores.reverse()
players.sort(key=lambda x: x.name.upper(), reverse=False)
dates.reverse()

players = crates + players

# =============
# Get most recent tb from the terminal else default to 8
maxraid = int(len(players[0].scores))



outdata = []
av_waves = [average_player.scores][0]

for player in players[0:]:
    outdata.append([player.name, [float(score) for score in player.scores]])


infile = open("../input_files/raids.js.in", "r")
filedata = infile.read()
infile.close()
replacestring = \
"  labels: ["
for i in range(1,maxraid+1):
    replacestring += "'"+dates[i-1]+"', "
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
        "    label: '"+"Guild Average"+" - Score',\n"+\
        "    data: ["+array_to_string(av_waves)+"],\n"\
        "    borderColor:  'rgb(0, 0, 0)',\n"+\
        "    hidden: false,\n"
replacestring+=\
        "},\n"    
    
replacestring += player_to_plots()
replacestring += "]\n"

outfile = open("../raids/raid.js", "w")
filedata = filedata.replace("$$PLOTS", replacestring)
outfile.write(filedata)
outfile.close()

