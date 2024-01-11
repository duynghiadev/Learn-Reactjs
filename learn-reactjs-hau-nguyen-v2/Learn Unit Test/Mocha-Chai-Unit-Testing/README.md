# Mocha-Chai-Unit-Testing
This project was created to learn how to use Mocha/Chai to do unit tests in node.js 
All unit tests were done with a set of easy but useful and famous algorithms, that you can find interesting to know. Also there are tests of server-side actions, that requires to use special plugin called `request`.

### Algorithms implemented
#### Client Side
1. Prime numbers checker
2. Prime factors finder
3. Fibonacci series calculator
4. The Greatest Common Divisor
5. Duplicates remover
6. Merge of two sorted arrays
7. Strings reverser
8. Words counter
9. Tags collector
10. The first non-repeating char

#### Server Side
1. Server Status Checker
2. Server-side Profile Constructor

### Screenshots
![image](https://user-images.githubusercontent.com/26466644/27201357-aefa86d6-521d-11e7-8ac4-49b8d6210319.png)
![image](https://user-images.githubusercontent.com/26466644/27201385-d20cdda4-521d-11e7-8e3a-8f5fb51225a9.png)
![image](https://user-images.githubusercontent.com/26466644/27658590-d9026740-5c50-11e7-9b81-d5265e36e693.png)

### Setting up of the environment
In the directory for the project we should type the next command:
```
npm init
```

As a result we have to get a `package.json` file for our project.

Next, we have to install our testing framework, and an expectation library called Chai that serves as a nice replacement for Node's standard assert function:
```
npm install mocha --save
npm install chai --save
```
To be able to use server-side testing, you will need this package. 
```
npm install request --save
```
Also, make sure that server is running, in order to use the server-side tests.


Finaly, the following command is used to invoke the Mocha binary installed locally in the `./node_modules` directory:
```
./node_modules/.bin/mocha --reporter spec
```

We can also update the `test` command in our `package.json` to contain the above command. That will help us to make our tests easier :)

At this point we can start to develop our code and cover it by unit tests. To run your tests write the next command:
```
npm test
```

Good luck! :)
