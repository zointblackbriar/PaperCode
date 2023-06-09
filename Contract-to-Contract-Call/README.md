# Intro
Hello! This is an application that I developed on Algorand for my bachelor thesis. Please go through this README file and test it out, hope you like it! 

## Setup 
1. Install [Docker Desktop](https://www.docker.com/products/docker-desktop/)
2. Install [Algorand sandbox](https://github.com/algorand/sandbox)
3. Clone this repository
4. Install Python virtual environment in your project folder by writing in the console
```
python -m venv venv
source ./venv/Scripts/activate # Windows
source ./venv/bin/activate # Linux
```
5. Use Python interpreter from ./venv/Scripts/python.exe
6. Install PyTeal with `pip install pyteal` in the console
7. Go to the folder where you installed sandbox and run `./sandbox up testnet` - this will take a while probably
8. You should be ready to go and run the app, if you are lost, [this video](https://www.youtube.com/watch?v=V3d3VTlgMo8&list=PLpAdAjL5F75CNnmGbz9Dm_k-z5I6Sv9_x) could help 
9. Also, please generate your own new Algorand accounts and fund them from this dispenser https://bank.testnet.algorand.network/ before starting with the tests

## Run Tests

In order to run python tests, please use the following commands:

```bash
pytest test/test_bank.py
pytest test/test_client.py
```

Running all tests: 

```bash
pytest
```


## Just run it! 
Now that you have set up the required environment and cloned the project, you can explore the different folders and contents :) 
All of the app's logic is in the `assets` folder. There you can find all of the classes in `python_classes` and all of the smart contracts in `contracts`. 
After running the tests you want, you can compare all the results and see all of the history of the transactions using [AlgoExplorer](https://testnet.algoexplorer.io/) by giving the public addresses of the accounts that you used. Tests are written with pytest, write in the terminal 'pytest [name of test file] -s' to see all of the print statements.

## UML diagrams 

![Class diagram of the app](uml_diagrams/UML_class.png)
![Sequence diagram - opening a bank account](uml_diagrams/UML_openBA.jpg)
![Sequence diagram - making a deposit to the bank account](uml_diagrams/UML_deposit.jpg)
![Sequence diagram - withdraw from the bank account](uml_diagrams/UML_withdraw.jpg)
![Sequence diagram - transfer from one bank account to another](uml_diagrams/UML_transfer.jpg)

