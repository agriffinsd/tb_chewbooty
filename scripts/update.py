"""
Main script for updating all tb data
"""
import sys
import os
import numpy as np

options = sys.argv[1:]

infile = open("../input_files/index.html.in", "r")
filedata = infile.read()
infile.close()


outfile = open("../index.html", "w")
outstr = ""




def print_first_row(tbno,tbstring):
    out = '<a href="tbs/tb'+str(tbno+1)+'.html"><img src="media/map_rote.png" alt="tb'+str(tbno+1)+'10" style="width:100%" class="w3-hover-opacity"> </a>\n'+\
    '     <div class="w3-container w3-white">\n'+\
    '     <p><b>TB'+str(tbno+1)+'</b></p>\n'+\
    '    <p>'+tbstring+'</p>\n'+\
    '  </div>\n'+\
    '</div>\n'
    return out
    
def print_row(tbno,tbstring):
    out = '<div class="w3-third w3-container">\n'+\
    '<a href="tbs/tb'+str(tbno+1)+'.html"><img src="media/map_rote.png" alt="tb'+str(tbno+1)+'10" style="width:100%" class="w3-hover-opacity"> </a>\n'+\
    '     <div class="w3-container w3-white">\n'+\
    '     <p><b>TB'+str(tbno+1)+'</b></p>\n'+\
    '    <p>'+tbstring+'</p>\n'+\
    '  </div>\n'+\
    '</div>\n'
    return out   

def make_tb_string(tbdata):
	return '1'

tbdata = open('../param.txt','r').readlines()
tbdata.reverse()


number_tbs = len(tbdata)

number_of_rows = int(np.ceil((number_tbs+1)/3))

r_it = number_tbs -1
for row in range(number_of_rows):
    outstr += '  <div class="w3-row-padding">\n'+\
              '    <div class="w3-third w3-container w3-margin-bottom">\n'
    if row == 0:
        outstr += '      <a href="players/player.html"><img src="media/591.jpeg" alt="Players" style="width:100%" class="w3-hover-opacity"> </a>\n'+\
        '      <div class="w3-container w3-white">\n'+\
        '<p><b>Player Wave Count</b></p>\n'+\
        '<p>Compare your wave count against other members and guild average.</p>\n'+\
        '</div>\n'+\
        '</div>\n'

    else:
        outstr += print_first_row(r_it,tbdata[r_it])
        r_it -= 1
    if r_it >=0:
        outstr += print_row(r_it,tbdata[r_it])
    r_it -= 1
    if r_it >=0:
        outstr += print_row(r_it,tbdata[r_it])
    r_it -= 1
    outstr += '  </div>\n\n'
    


filedata = filedata.replace("$$INPUTS",outstr)
outfile.write(filedata)
outfile.close()

if "report" in options:
    os.system("python3 tbdata.py " + str(number_tbs) + " report")
else:
    os.system("python3 tbdata.py " + str(number_tbs))
os.system("python3 reva.py " + str(number_tbs))
if "trendline" in options:
    os.system("python3 player.py " + str(number_tbs) + " trendline")
else:
    os.system("python3 player.py " + str(number_tbs))
