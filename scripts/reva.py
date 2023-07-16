import csv
import sys

class RevaPlayer(object):
    
    def __init__(self, name, successrate, ready, tbs):
        self.name = name
        self.rate = successrate
        self.ready = ready
        self.tbs = tbs
        
    @staticmethod
    def row_to_player(row):
        print(row)
        name = row[1]
        rate = row[0]
        readyin = row[2]
        if readyin == "yes":
            ready ="true"
        elif readyin == "no" or readyin == "n/a":
            ready ="false"     
        tbs = []
        for it, val in enumerate(row):
            if it > 2:
                if val == "yes":
                   tbs.append("true")
                elif val == "no":
                    tbs.append("false")
                else:
                    tbs.append("")
        return RevaPlayer(name, rate, ready, tbs)

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
                data.append(RevaPlayer.row_to_player(row))
            it +=1 
        infile.close()
        return RevaFile(data)
        
    def to_javascript(self, filein, fileout, tbnos):
        infile = open(filein, "r")
        filedata = infile.read()
        infile.close()
        tbstart = 10
        outstr = ''
        outstr2 = ''
        
        
        for it, player in enumerate(self.data):
            if player.name != "":
                outstr += '{id:'+str(it+1)+', name:"'+player.name+'", revaready:"'+player.ready+'", rate:"'+player.rate+'",'
                
                for j in range(tbnos):
                    outstr+= 'tb'+str(tbstart+j)+':"'+player.tbs[j]+'",'
                outstr+='},\n'
        
        for i in range(tbnos):
            if i != 0:
                outstr2 += '{title:"TB '+str(tbstart+i)+'", field:"tb'+str(tbstart+i)+'", hozAlign:"left", formatter:"tickCross", width:100, formatterParams:{\n allowEmpty:true, allowTruthy:false, tickElement:"<i ' + "class='fa fa-check'></i" + '>", crossElement:"<i '+ "class='fa fa-times'></i"+'>",\n}},'
            else:
                outstr2 += '{title:"TB '+str(tbstart+i)+' (Partial Data)", field:"tb'+str(tbstart+i)+'", hozAlign:"left", formatter:"tickCross", formatterParams:{\n allowEmpty:true, allowTruthy:false, tickElement:"<i ' + "class='fa fa-check'></i" + '>", crossElement:"<i '+ "class='fa fa-times'></i"+'>",\n}},'

        filedata = filedata.replace("$$REVA1",outstr)
        filedata = filedata.replace("$$REVA2",outstr2)
        
        outfile = open(fileout, "w")
        outfile.write(filedata)
        outfile.close()
        
        return None
    
        
if __name__ == "__main__":
    reva = RevaFile.readfile("../reva/BSE - TB3 Planning - Reva.csv")
    #for p in reva.data:
    #    print (p.name, p.tbs)
    
    reva.to_javascript("../input_files/reva.js.in", "../reva/reva.js", int(sys.argv[1])-9)
    
