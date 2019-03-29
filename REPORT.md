Tran The Loc · 1651022<br>
Doan Minh Tu · 1651068<br>
CS422 Artificial Inteligence<br>
March 28, 2019<br>
# Project 01 Pacman.







### Introduction

Using search algorithm to find the path from Pacman to the food. Add some helper function to check the condition weather it is possible to move or not.

**Project Structure**
![](REPORT.png)

### How to run

First, clone this project from Github
```sh
$ git clone https://github.com/loctran1902apcs/Pacman-AI-CS422
```

After cloning, move to the directory 
```sh
$ cd Pacman-AI-CS422
``` 
Now you can run the program by openning the `index.html` file. Because we use javascript to implement this game so you can run this programm using any modern browser such as: Google Chrome, Firefox, Microsoft Edge

Or you can check the demo version here [Pacman-AI-Demo](http://pacman-ai-cs422.surge.sh/)


### Implementation
#### Ideas
- We implement 2 different parts. The graphical interface with API to handle the movement of the Pacman. (Left,Right,Down,Up).
- Then the second parts is the search function that will take the input map as the argument and return the array of movement to control the Pacman.

#### Helper Functions
We implement some helper functions for the program:

- `canMove`: Check if the next node is safe to move or not. 
- `goUp`: Move the pacman up.
- `goDown`: Move the pacman down.
- `goLeft`: Move the pacman left.
- `goRight`: Move the pacman right. 
- `checkAvailableNode`: 

#### Level 1
- At level 1 the requirement is: Finding a fixed foo. We choose to use Breadth First Search algorithm to find the path to the food.
- We use `checkAvailableNode` helper function to check if is safe to move or not.
- The `BFS` function will return the array of movements. If we need more than 10 steps to go to the food. The program will stop. Because one food only give 10 points but each step cost 1 point.

#### Level 2
- Still using Breadth First Search algorithm to find the path but update the helper function.
- We add more condition to the helper function `canMove` to check if the next node is the ghost the pacman will skip this node.





