"""
Main script for updating all tb data
"""
import sys
import os
import numpy as np

options = sys.argv[1:]
used_options = []
GUILD_NAME = "unknown"
for option in options:
    if "BSE" in option:
        GUILD_NAME="BSE/"
        print("[+] Guild Accepted:", "BSE")
        used_options.append(option)

if GUILD_NAME == "unknown":
    print("[-] Unknown Guild. Please specify Guild in arguments")
    exit()

print("[+] Updating Index File")

infile = open("../"+GUILD_NAME+"input_files/index.html.in", "r")
filedata = infile.read()
infile.close()


outfile = open("../"+GUILD_NAME+"index.html", "w")
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

tbdata = open('../'+GUILD_NAME+'param.txt','r').readlines()
tbdata.reverse()


number_tbs = len(tbdata)

number_of_rows = int(np.ceil((number_tbs+2)/3))

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
        outstr += '<div class="w3-third w3-container">\n'+\
        '      <a href="raids/raid.html"><img src="media/krayt.jpeg" alt="Players" style="width:100%" class="w3-hover-opacity"> </a>\n'+\
        '      <div class="w3-container w3-white">\n'+\
        '<p><b>Raid Scores</b></p>\n'+\
        '<p>Compare your Krayt Dragon score against other members and guild average.</p>\n'+\
        '</div>\n'+\
        '</div>\n'
        outstr += '<div class="w3-third w3-container">\n'+\
        '      <a href="Zeffo/zeffo.html"><img src="media/zeffo.jpeg" alt="Zeffo" style="width:100%" class="w3-hover-opacity"> </a>\n'+\
        '      <div class="w3-container w3-white">\n'+\
        '<p><b>Zeffo Mission</b></p>\n'+\
        '<p>Zeffo Mission Success Rates</p>\n'+\
        '</div>\n'+\
        '</div>\n'
        #if r_it >=0:
        #    outstr += print_row(r_it,tbdata[r_it])
        #r_it -= 1
        outstr += '  </div>\n\n'
        continue
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
print("[+] Updating individual tb data for "+str(number_tbs)+" tbs")
if "report" in options:
    used_options.append("report")
    os.system("python3 tbdata.py " + str(number_tbs) + " "+  GUILD_NAME+ " report")
else:
    os.system("python3 tbdata.py " + str(number_tbs) +" "+ GUILD_NAME)
os.system("python3 reva.py " + str(number_tbs)+" "+ GUILD_NAME)

print("[+] Updating player tb datas")

if "trendline" in options:
    used_options.append("trendline")
    os.system("python3 player.py " + str(number_tbs) + " " + GUILD_NAME+ " trendline")
else:
    os.system("python3 player.py " + str(number_tbs) +" "+ GUILD_NAME)

print("[+] Updating raid data")
os.system("python3 raids.py ../"+GUILD_NAME+"raids/raids.csv " + GUILD_NAME)
print("[+] Updating zeffo data")
os.system("python3 zeffo.py " + GUILD_NAME)
print("[+] Update Complete!")
print(" ∟ Accepted Arguments:", used_options)
if len(used_options) != len(options):
    print(" ∟ Unused Arguements:", [op for op in options if not op in used_options]) 
