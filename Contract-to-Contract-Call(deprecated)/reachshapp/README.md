### RUNNING APPLICATIONS

```bash
~/reach/reach compile index.rsh
```

Run in the Algorand Testnet

```bash
REACH_CONNECTOR_MODE=ALGO ~/reach/reach run
```

In order to see Solidity files and rest of the intermediate files, please type the following command

```bash
~/reach/reach compile index.rsh --intermediate-files
```

You need to define a client application, which means that a main.mjs file.

And then it is good to go. (If you like, you can assign ethereum test network with REACH_CONNECTOR_MODE)

```bash
export REACH_CONNECTOR_MODE=ETH
~/reach/reach run
```


### BACKGROUND

Before starting the code compilation, we will need to install and make sure Reach is configured according to the rules of Algorand Blockchain Development. Please follow the steps below: 

```bash
make --version
docker --version
docker-compose --version
``` 

And then type the following command: 

```bash
mkdir -p ~/reach/AlgoReach && cd ~/reach/AlgoReach
``` 

We need to clone the latest repository of Reach Algorand Programming Language.


```bash
 curl https://raw.githubusercontent.com/reach-sh/reach-lang/master/reach -o reach ; chmod +x reach
``` 

Check and see if everything works out: 

```
./reach version
```

Update your reach image on Docker system

```
./reach update
```

Compile your application with the following command: 

```
./reach compile
```

The reach path on the system is important, in my current path of Reach is as follows: 

> ~/reach/AlgoReach/reach version

Exact command of the compilation: 

```bash
~/reach/AlgoReach/reach compile index.mjs
```

Run the application according to Algorand Mode: 

```bash
REACH_CONNECTOR_MODE=ALGO ~/reach/AlgoReach/reach run
```

