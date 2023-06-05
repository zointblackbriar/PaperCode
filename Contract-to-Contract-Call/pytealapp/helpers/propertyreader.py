#! /usr/bin/python
import configparser
try: 
    config = configparser.ConfigParser()
    # print(config)
    config.read('../properties/config.ini')
    print("config sections", config.sections())

    # algorand_account1 = config['accounts']['algorand_account1']
    # sample = config['accounts']
    # print(sample)
except:
    print ("Configuration exception occurred")
