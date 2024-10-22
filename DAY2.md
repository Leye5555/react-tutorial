```javascript

    // lines starting with VM are the results of code executions for the forEach array method


    const result = 301;
    undefined
    const response = "You have a good score of 301";
    undefined
    response
    'You have a good score of 301'
    const response = "You have a good score of ";
    undefined
    const finalResponse = response + result;
    undefined
    finalResponse
    'You have a good score of 301'
    let userResult = 301;
    undefined
    let userFinalResponse = response + userResult;
    undefined
    userFinalResponse;
    'You have a good score of 301'
    userResult = 200;
    200
    userFinalResponse = response + userResult;
    'You have a good score of 200'
    userResult = 20;
    20
    userFinalResponse;
    'You have a good score of 200'
    userFinalResponse = response + userResult;
    'You have a good score of 20'
    const jambResult = [200, 300, 240, 235, 700, 0, 206];
    undefined
    const sendMessage = () => {
    jambResult.forEach((item) => {

        })

    }
    undefined
    const sendMessage = (arr) => {
    const msg = "You have a good score of ";
    arr.forEach((item) => {
    console.log(msg + item);
    })

    }
    undefined
    sendMessage(jambResult);
    VM1465:4 You have a good score of 200
    VM1465:4 You have a good score of 300
    VM1465:4 You have a good score of 240
    VM1465:4 You have a good score of 235
    VM1465:4 You have a good score of 700
    VM1465:4 You have a good score of 0
    VM1465:4 You have a good score of 206
    undefined
    test
    VM1512:1 Uncaught ReferenceError: test is not defined
    at <anonymous>:1:1
    (anonymous) @ VM1512:1Understand this error
    const putme = [200, 300, 240, 235, 700, 0, 206];
    undefined
    sendMessage(putme);
    VM1465:4 You have a good score of 200
    VM1465:4 You have a good score of 300
    VM1465:4 You have a good score of 240
    VM1465:4 You have a good score of 235
    VM1465:4 You have a good score of 700
    VM1465:4 You have a good score of 0
    VM1465:4 You have a good score of 206
    undefined
    const sendMessage = (arr) => {
    const msg = "You have a good score of . but you should not relent";
    arr.forEach((item) => {
    console.log(msg + item);
    })

    }
    undefined
    sendMessage(putme);
    VM1619:4 You have a good score of . but you should not relent200
    VM1619:4 You have a good score of . but you should not relent300
    VM1619:4 You have a good score of . but you should not relent240
    VM1619:4 You have a good score of . but you should not relent235
    VM1619:4 You have a good score of . but you should not relent700
    VM1619:4 You have a good score of . but you should not relent0
    VM1619:4 You have a good score of . but you should not relent206
    undefined
    const sendMessage = (arr) => {
    const msg = "You have a good score of ";
    const msg2 = "but you should not relent";
    arr.forEach((item) => {
    console.log(msg + item + msg2);
    })

    }
    undefined
    sendMessage(putme);
    VM1687:5 You have a good score of 200but you should not relent
    VM1687:5 You have a good score of 300but you should not relent
    VM1687:5 You have a good score of 240but you should not relent
    VM1687:5 You have a good score of 235but you should not relent
    VM1687:5 You have a good score of 700but you should not relent
    VM1687:5 You have a good score of 0but you should not relent
    VM1687:5 You have a good score of 206but you should not relent
    undefined
    const sendMessage = (arr) => {
    const msg = "You have a good score of ";
    const msg2 = " but you should not relent";
    arr.forEach((item) => {
    console.log(msg + item + msg2);
    })

    }
    undefined
    sendMessage(putme);
    VM1699:5 You have a good score of 200 but you should not relent
    VM1699:5 You have a good score of 300 but you should not relent
    VM1699:5 You have a good score of 240 but you should not relent
    VM1699:5 You have a good score of 235 but you should not relent
    VM1699:5 You have a good score of 700 but you should not relent
    VM1699:5 You have a good score of 0 but you should not relent
    VM1699:5 You have a good score of 206 but you should not relent
    undefined
    const sendMessage = (arr) => {

        arr.forEach((item) => {
            const message = `You have a good score of ${item} but you should not relent`;
        console.log(message);
        })

    }
    undefined
    sendMessage(putme);
    VM1770:5 You have a good score of 200 but you should not relent
    VM1770:5 You have a good score of 300 but you should not relent
    VM1770:5 You have a good score of 240 but you should not relent
    VM1770:5 You have a good score of 235 but you should not relent
    VM1770:5 You have a good score of 700 but you should not relent
    VM1770:5 You have a good score of 0 but you should not relent
    VM1770:5 You have a good score of 206 but you should not relent
    undefined
    const test = 95;
    undefined
    `you are an excellent student. you scored ${test}`;
    'you are an excellent student. you scored 95'
    `you are an  ${test} excellent student. you scored`;
    'you are an 95 excellent student. you scored'
    const noo = 5345767687;
    undefined
    `you are an  ${test} excellent ${noo} student. you scored`;
    'you are an 95 excellent 5345767687 student. you scored'

    const jambResult = [200, 300, 240, 235, 700, 0, 206];
    undefined
    const [james,peter, taylor, liveth] = jambResult;
    undefined
    james
    200
    liveth
    235
    const [james,peter, taylor, liveth, ...rest] = jambResult;
    undefined
    const [james,peter, taylor, liveth, ...remaining] = jambResult;
    undefined
    remaining
    (3) [700, 0, 206]
    const moreResults = [20,30,40,50,60];
    undefined
    const finalResult = [...jambResult, ...moreResults];
    undefined
    finalResult
    (12) [200, 300, 240, 235, 700, 0, 206, 20, 30, 40, 50, 60]
    const people = [
        {
            name : "Musa",
            age : 12,
            class : "jss1"
        },
        {
            name : "Jane",
            age : 12,
            class : "jss2"
        },
        {
            name : "Emmanuel",
            age : 13,
            class : "jss3"
        }
    ];
    undefined
    people.forEach((item) => {
        console.log(item)
    });
    VM2574:2 {name: 'Musa', age: 12, class: 'jss1'}age: 12class: "jss1"name: "Musa"[[Prototype]]: Object
    VM2574:2 {name: 'Jane', age: 12, class: 'jss2'}
    VM2574:2 {name: 'Emmanuel', age: 13, class: 'jss3'}
    undefined
    people.forEach((item) => {
        console.log(item.name)
    });
    VM2609:2 Musa
    VM2609:2 Jane
    VM2609:2 Emmanuel
    undefined
    const editedPeople = people.map((item) => {
        const metaData = {
            location : "Nigeria",
            region : "Abuja"
        }
    return {...item, ...metaData};
    });
    undefined
    editedPeople
    (3) [{…}, {…}, {…}]0: age: 12class: "jss1"location: "Nigeria"name: "Musa"region: "Abuja"[[Prototype]]: Object1: age: 12class: "jss2"location: "Nigeria"name: "Jane"region: "Abuja"[[Prototype]]: Object2: age: 13class: "jss3"location: "Nigeria"name: "Emmanuel"region: "Abuja"[[Prototype]]: Objectlength: 3[[Prototype]]: Array(0)



    // object destructuring

    const person = {
        name : "Pal",
        gender : "male",
        dob : "12-12-2009",
        occupation : "software engr"
    }
    undefined
    let person = {
        name : "Pal",
        gender : "male",
        dob : "12-12-2009",
        occupation : "software engr"
    }
    VM2910:1 Uncaught SyntaxError: Identifier 'person' has already been declaredUnderstand this error
    let pal = {
        name : "Pal",
        gender : "male",
        dob : "12-12-2009",
        occupation : "software engr"
    }
    undefined
    pal.dob = "11-12-2009";
    '11-12-2009'
    pal
    {name: 'Pal', gender: 'male', dob: '11-12-2009', occupation: 'software engr'}dob: "11-12-2009"gender: "male"name: "Pal"occupation: "software engr"[[Prototype]]: Object
    pal = {...pal , dob : "10-12-2008"};
    {name: 'Pal', gender: 'male', dob: '10-12-2008', occupation: 'software engr'}
    pal
    {name: 'Pal', gender: 'male', dob: '10-12-2008', occupation: 'software engr'}dob: "10-12-2008"gender: "male"name: "Pal"occupation: "software engr"[[Prototype]]: Object
    pal = {...pal , dob : "10-12-2008", religion : "Christian"};
    {name: 'Pal', gender: 'male', dob: '10-12-2008', occupation: 'software engr', religion: 'Christian'}
    pal




    const calculateHours = (days) {
        const result =  days * 24;
        return result;

    };
    VM3331:1 Uncaught SyntaxError: Unexpected token '{'Understand this error
    const calculateHours = (days) => {
        const result =  days * 24;
        return result;

    };
    undefined
    calculateHours(1)
    24
    calculateHours(5)
    120
    calculateHours(123344445555666665);
    2960266693336000000
    const calculateHours = function (days) {
        const result =  days * 24;
        return result;

    };

    undefined
    const calculateHours =  (days) => {
        const result =  days * 24;
        return result;

    };

    undefined
    lambda
    VM3573:1 Uncaught ReferenceError: lambda is not defined
        at <anonymous>:1:1
    (anonymous) @ VM3573:1Understand this error
    "lambda";
    'lambda'
    const calculateHours = (weeks) =>  (days) => (hours) => {
        const result =  days * 24;
        return result;

    };

    undefined
    calculateHours(12);
    (days) => (hours) => {
        const result =  days * 24;
        return result;

    }
    calculateHours(12)(2)();
    48
    const sum = (firstNum, secondNum) => {
        return firstNum + secondNum;
    }
    undefined
    sum(22000, 333);
    22333
    const calcAvg = (...numbers) => {
        console.log(numbers)
    }
    undefined
        calcAvg(2,4,6);
    VM4000:2 (3) [2, 4, 6]
    undefined
        calcAvg([2,4,6]);
    VM4000:2 [Array(3)]0: (3) [2, 4, 6]length: 1[[Prototype]]: Array(0)
    undefined
        calcAvg(...[2,4,6]);
    VM4000:2 (3) [2, 4, 6]
    undefined
    const calcAvg = (...numbers, oops) => {
        console.log(numbers)
    }
    VM4128:1 Uncaught SyntaxError: Rest parameter must be last formal parameterUnderstand this error
    const calcAvg = (fn, numbers) => {
        const sum = fn(...numbers);
    return  sum / numbers.length;
    }
    undefined
    const sum = (...nums) => {
        return nums.reduce((item,accumulator) => item + accumulator, 0);
    };
    undefined
    sum(2,4,10,10,20,1000, 200, 1000);
    2246
    calcAvg(sum, [2,4,10,10,20,1000, 200, 1000]);
    280.75
    calcAvg(2, [2,4,10,10,20,1000, 200, 1000]);
    VM4255:2 Uncaught TypeError: fn is not a function
        at calcAvg (<anonymous>:2:17)
        at <anonymous>:1:1
    calcAvg @ VM4255:2
    (anonymous) @ VM4587:1Understand this error
    calcAvg(sum, [2,4,10,10,20,1000, 200, 1000]);
    280.75


```
