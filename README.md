# tb_bse
Data Tracking for BSE TB performance over time.


## Updating
For each guild directory (BSE, etc...)
- Add the tb data from hotutils in tb_data dir
- (Optional) Put reva data in reva dir
- Update the params file for latest tb
- Update the raid data
- Run the python script
```python update.py```
- Check everything looks ok before pushing

## Update script

Syntax - ```python update.py <GUILDS/TO/UPDATE> <OPTIONS>```

### Valid Guilds to Update
- BSE

### Valid Options
- report: prints discord formatted report for latest tb
- trendline: adds a trendline to player graph
