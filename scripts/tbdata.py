#!/usr/bin/env python
# -*- coding: utf-8 -*-
#
#  
#  Copyright 2023 <caoineag>
#  
#  This program is free software; you can redistribute it and/or modify
#  it under the terms of the GNU General Public License as published by
#  the Free Software Foundation; either version 2 of the License, or
#  (at your option) any later version.
#  
#  This program is distributed in the hope that it will be useful,
#  but WITHOUT ANY WARRANTY; without even the implied warranty of
#  MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the
#  GNU General Public License for more details.
#  
#  You should have received a copy of the GNU General Public License
#  along with this program; if not, write to the Free Software
#  Foundation, Inc., 51 Franklin Street, Fifth Floor, Boston,
#  MA 02110-1301, USA.
#  
# 

import csv
import numpy as np
import os, sys

def bools(string):
    return string=="Yes"

class Player(object):
    
    def __init__(self, name, waves, attempts, deploys, ops, tbpoints, allpoints,\
                 specials, deployments):
        self.name = name
        self.waves = np.array(waves)
        self.specials = np.array(specials)
        self.attempts = np.array(attempts)
        self.deployments = np.array(deploys)
        self.ops = ops
        self.tbpoints = tbpoints
        self.fullpoints = allpoints #includes deployments
        self.deployedgp = np.array(deployments)
        
    @staticmethod
    def row_to_player(row):
        name = row[0]
        waves = [int(row[10]), int(row[16]),\
                 int(row[22]), int(row[28]),\
                 int(row[34]), int(row[40])]
        attempts = [int(row[8]), int(row[14]),\
                    int(row[20]), int(row[26]),\
                    int(row[32]), int(row[38])]
        deploys = [bools(row[5]),  bools(row[11]),\
                   bools(row[17]), bools(row[23]),\
                   bools(row[29]), bools(row[35])]
        ops = int(row[2])
        points = int(row[1])-int(row[7])-\
                 int(row[13])-int(row[19])-\
                 int(row[25])-int(row[31])-int(row[37])
        allpoints = int(row[1])
        specials = [int(row[9]), int(row[15]),\
                    int(row[21]), int(row[27]),\
                    int(row[33]), int(row[39])]
        deployments = [int(row[7]), int(row[13]),\
                    int(row[19]), int(row[25]),\
                    int(row[31]), int(row[37])]
        return Player(name, waves, attempts, deploys, ops, points, allpoints,\
                      specials, deployments)
    
    def estimate_gp(self):
        gps = [self.deployedgp[i] for i in [0,1,2,3,4,5]]
        gp_est = max(gps)
        if gp_est < 1000000:
            return 0
        return gp_est


    
        
class TBfile(object):
    
    def __init__(self, data, tbno):
        self.data = data
        self.tbno = tbno
        
    @staticmethod
    def readfile(filename, tbno):
        data = []
        infile = open(filename, "r")
        inputdata = csv.reader(infile, delimiter=',')
        it = 0
        for row in inputdata:
            if it > 0:
                data.append(Player.row_to_player(row))
            it +=1 
        infile.close()
        return TBfile(data, tbno)
        
    def to_javascript(self, filein, fileout):
        infile = open(filein, "r")
        filedata = infile.read()
        infile.close()
        
        outstr = "  labels: ["
        for player in self.data:
            outstr += "'" + player.name + "', "
        outstr += "],"
        
        outstr2 = "    data: ["
        for player in self.data:
            outstr2 += "'" + str(np.sum(player.waves)) + "', "
        outstr2 += "],"
        
        outstr3 = "    data: ["
        for player in self.data:
            outstr3 += "'" + str(np.sum(player.attempts)) + "', "
        outstr3 += "],"
        
        outstr4 = "    data: ["
        for player in self.data:
            outstr4 += "'" + str(np.count_nonzero(player.deployments[1:])) + "', "
        outstr4 += "],"
        
        outstr5 = "    data: ["
        for player in self.data:
            outstr5 += "'" + str(player.ops) + "', "
        outstr5 += "],"
        
        outstr6 = "    data: ["
        for player in self.data:
            outstr6 += "'" + str(player.tbpoints) + "', "
        outstr6 += "],"
        
        outstr7 = "    data: ["
        for player in self.data:
            outstr7 += "'" + str(player.fullpoints) + "', "
        outstr7 += "],"
        
        outstr8 = "    data: ["
        for player in self.data:
            outstr8 += "'" + str(player.waves[5]) + "', "
        outstr8 += "],"
        
        outstr9 = "    data: ["
        for player in self.data:
            outstr9 += "'" + str(player.waves[0]) + "', "
        outstr9 += "],"

        outstr10 = "    data: ["
        for player in self.data:
            outstr10 += "'" + str(player.waves[1]) + "', "
        outstr10 += "],"
        
        outstr11 = "    data: ["
        for player in self.data:
            outstr11 += "'" + str(player.waves[2]) + "', "
        outstr11 += "],"

        outstr12 = "    data: ["
        for player in self.data:
            outstr12 += "'" + str(player.waves[3]) + "', "
        outstr12 += "],"
        
        outstr13 = "    data: ["
        for player in self.data:
            outstr13 += "'" + str(player.waves[4]) + "', "
        outstr13 += "],"
        
        outstr14 = "    data: ["
        for player in self.data:
            outstr14 += "'" + str(np.sum(player.specials)) + "', "
        outstr14 += "],"
        
        filedata = filedata.replace("$$LABELS",outstr)
        filedata = filedata.replace("$$WAVES",outstr2)
        filedata = filedata.replace("$$ATTEMPTS",outstr3)
        filedata = filedata.replace("$$DEPLOYS",outstr4)
        filedata = filedata.replace("$$OPS",outstr5)
        filedata = filedata.replace("$$POINTS",outstr6)
        filedata = filedata.replace("$$ALLPOINTS",outstr7)
        filedata = filedata.replace("$$P1WAVES",outstr9)
        filedata = filedata.replace("$$P2WAVES",outstr10)
        filedata = filedata.replace("$$P3WAVES",outstr11)
        filedata = filedata.replace("$$P4WAVES",outstr12)
        filedata = filedata.replace("$$P5WAVES",outstr13)
        filedata = filedata.replace("$$P6WAVES",outstr8)
        filedata = filedata.replace("$$SPECIALS",outstr14)
        
        
        outfile = open(fileout, "w")
        outfile.write(filedata)
        outfile.close()
        
        return None
        
    def to_html(self, filein, fileout):
        infile = open(filein, "r")
        filedata = infile.read()
        infile.close()
        
        filedata = filedata.replace("$$TBNO", self.tbno)
        
        outfile = open(fileout, "w")
        outfile.write(filedata)
        outfile.close()
        
    def get_average_waves(self):
        wavetotal = 0
        attempttotal = 0
        for player in self.data:
            wavetotal += np.sum(player.waves)
            attempttotal += np.sum(player.attempts)
        return wavetotal/len(self.data), attempttotal/len(self.data)

    def end_of_tb_report(self, tbno):
        self.data.sort(key=lambda x: np.sum(x.fullpoints), reverse=True)
        top_3 = self.data[0:3]
        bottom_3 = self.data[-1:-4:-1]
        average = np.average([np.sum(pl.fullpoints) for pl in self.data])
        print("# TB"+str(tbno)+ " REPORT :parrot:")
        print("[Full Stats Online](https://genskaar.github.io/tb_bse/index.html)")
        print("## TERRITORY POINTS")
        print("Top 3 Total Territory Points:")
        for pl in top_3:
            print("- "+ str(pl.name)+": "+f'{(np.sum(pl.fullpoints) // 100000) /10}m')
        print("Bottom 3 Total Territory Points:")
        for pl in bottom_3:
            print("- "+ str(pl.name)+": "+f'{(np.sum(pl.fullpoints) // 100000) /10}m')
        print("Guild Average - "+f'{(average // 100000) /10}m')
        print("")
        print("## WAVE COUNTS")
        self.data.sort(key=lambda x: np.sum(x.waves), reverse=True)
        top_3 = self.data[0:3]
        bottom_3 = self.data[-1:-4:-1]
        average = np.average([np.sum(pl.waves) for pl in self.data])
        std = np.std([np.sum(pl.waves) for pl in self.data])
        print("Top 3 wave counts:")
        for pl in top_3:
            print("- "+ str(pl.name)+": "+str(np.sum(pl.waves)))
        print("Bottom 3 wave counts:")
        for pl in bottom_3:
            print("- "+ str(pl.name)+": "+str(np.sum(pl.waves)))
        print("Guild Average - "+str(round(average,2)) + " +/- " +str(round(std,2)))
        print("")
        print("## NO DEPLOYMENTS :warning:")
        missed_gp_total = 0
        for phase in [1,2,3,4,5]:
            no_deploys = []
            for pl in self.data:
                 if not pl.deployments[phase]:
                     no_deploys.append(pl)
            if (len(no_deploys)>0):
                print("Phase "+str(phase+1)+":")
                for pl in no_deploys:
                    missed_gp = pl.estimate_gp()-(pl.deployedgp[phase])
                    missed_gp_total += missed_gp
                    print("- "+ str(pl.name) + " ~" + f'{(missed_gp // 100000) /10}m'  )
                if phase==5:
                    print("(Phase 6 data is collected "+\
                           "10 mins before end of tb)")
        if missed_gp_total >0:
            print("Total missed GP in deployment - **" + f'{(missed_gp_total // 100000) /10}m**')
                         
            


def main(args):
    tbmax = sys.argv[1]
    for tbval in range(1,int(tbmax)+1):
        tbval = str(tbval)
        tb = TBfile.readfile("../tb_data/tb_"+tbval+".csv", tbval)
        tb.data.sort(key=lambda x: np.sum(x.waves), reverse=True)
        tb.to_javascript("../input_files/tb.js.in", "../tbs/tb"+tbval+".js")
        tb.to_html("../input_files/tb.html.in", "../tbs/tb"+tbval+".html")
    if "report" in args:
        tb.end_of_tb_report(tbmax)
    return 0

if __name__ == '__main__':
    import sys
    sys.exit(main(sys.argv))
