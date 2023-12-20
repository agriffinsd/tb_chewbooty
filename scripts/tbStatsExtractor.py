import csv
import re
import json
from time import strftime, localtime

sm_attmempt_regex = r'covert_attempt_round_(\d)'
sm_results_regex = r'covert_results_round_(\d)'
gp_regex = r'^power$'
cm_attempt_regex = r'strike_attempt_round_(\d)'
waves_cleared_regex = r'strike_encounter_round_(\d)'
tp_regex = r'summary_round_(\d)'

class TerritoryBattle:
    def toJSON(self):
        return json.dumps(self, default=lambda o: o.__dict__, 
            sort_keys=True, indent=4)

class Player:
    def toJSON(self):
        return json.dumps(self, default=lambda o: o.__dict__, 
            sort_keys=True, indent=4)

    def __init__(self):
        self.sm_attempts = {
                "1": 0,
                "2": 0,
                "3": 0,
                "4": 0,
                "5": 0,
                "6": 0
            }
        self.sm_results = {
                "1": 0,
                "2": 0,
                "3": 0,
                "4": 0,
                "5": 0,
                "6": 0
            }
        self.sm_successes = {
                "1": 0,
                "2": 0,
                "3": 0,
                "4": 0,
                "5": 0,
                "6": 0
            }
        self.cm_attempts = {
                "1": 0,
                "2": 0,
                "3": 0,
                "4": 0,
                "5": 0,
                "6": 0
            }
        self.waves_completed = {
                "1": 0,
                "2": 0,
                "3": 0,
                "4": 0,
                "5": 0,
                "6": 0
            }
        self.tp_contributed = {
                "1": 0,
                "2": 0,
                "3": 0,
                "4": 0,
                "5": 0,
                "6": 0
            }
        self.Name = ""
        self.GalacticPower = 0

    def RevaSuccess(self):
        for sm_result in self.sm_results:
            if 'Reva Shards:Succeeded' in self.sm_results[sm_result]:
                return True
        return False

def handleRow(player : Player, row) -> Player:
    if (match := re.search(sm_attmempt_regex, row['MapStatId'])):
        round = match.group(1)
        player.sm_attempts[round] = int(row['Score'])
    elif (match := re.search(cm_attempt_regex, row['MapStatId'])):
        round = match.group(1)
        player.cm_attempts[round] = int(row['Score'])
    elif (match := re.search(waves_cleared_regex, row['MapStatId'])):
        round = match.group(1)
        player.waves_completed[round] = int(row['Score'])
    elif (match := re.search(tp_regex, row['MapStatId'])):
        round = match.group(1)
        player.tp_contributed[round] = int(row['Score'])
    elif (match := re.search(gp_regex, row['MapStatId'])):
        player.GalacticPower = int(row['Score'])
    elif (match := re.search(sm_results_regex, row['MapStatId'])):
        round = match.group(1)
        player.sm_results[round] = row['SpecialResults']
        player.sm_successes[round] = len(re.findall('Succeeded', row['SpecialResults']))
    return player

players = {}
thisTb = TerritoryBattle()

with open ('chewbooty/tb_data/stats.csv') as csvFile:
    tbStats = csv.DictReader(csvFile)

    for row in tbStats:
        # print(row)
        thisTb.enddate = strftime('%Y-%m-%d %H:%M:%S', localtime(int(row['\ufeffCurrentRoundEndTime'])))

        player = Player()
        if row['Name'] in players:
            player = players[row['Name']]
        else:
            player.Name = row['Name']

        player = handleRow(player, row)
        players[row['Name']] = player

thisTb.players = players

