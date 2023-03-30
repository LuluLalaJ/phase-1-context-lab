/* Your Code Here */

/*
 We're giving you this function. Take a look at it, you might see some usage
 that's new and different. That's because we're avoiding a well-known, but
 sneaky bug that we'll cover in the next few lessons!

 As a result, the lessons for this function will pass *and* it will be available
 for you to use if you need it!
 */


//PASSING EMPLOYEERECORD NOT AS A PARAMETER BUT CREATE IT AS A CONTEXT 

function createEmployeeRecord(array) {
    const employeeRecord = {
        firstName: array[0],
        familyName: array[1],
        title: array[2],
        payPerHour: array[3],
        timeInEvents:[],
        timeOutEvents: [], 
    }

    return employeeRecord
}

function createEmployeeRecords(array) {
    return array.map(createEmployeeRecord)
}

function createTimeInEvent(timeInStamp){
    const newTimeStamp = {
        type: "TimeIn",
        hour: Number(timeInStamp.slice(-4)),
        date: timeInStamp.slice(0, -5)
    }
    this.timeInEvents.push(newTimeStamp) 
    return this
}

function createTimeInEvent(timeInStamp){
    const newTimeStamp = {
        type: "TimeIn",
        hour: Number(timeInStamp.slice(-4)),
        date: timeInStamp.slice(0, -5)
    }
    this.timeInEvents.push(newTimeStamp) 
    return this
}

function createTimeOutEvent(timeOutStamp){
    const newTimeStamp = {
        type: "TimeOut",
        hour: Number(timeOutStamp.slice(-4)),
        date: timeOutStamp.slice(0, -5)
    }
    this.timeOutEvents.push(newTimeStamp) 
    return this
}

function hoursWorkedOnDate(date) {
    const timeInObj = this.timeInEvents.find(ele => ele.date === date)
    const timeOutObj = this.timeOutEvents.find(ele => ele.date === date)
    return Math.floor((timeOutObj.hour - timeInObj.hour)/100)
}

function wagesEarnedOnDate(date) {
    const hours = hoursWorkedOnDate(date)
    const rate = this.payPerHour
    return hours * rate
}

const allWagesFor = function () {
    const eligibleDates = this.timeInEvents.map(function (e) {
        return e.date
    })

    const payable = eligibleDates.reduce(function (memo, d) {
        return memo + wagesEarnedOnDate.call(this, d)
    }.bind(this), 0) // <== Hm, why did we need to add bind() there? We'll discuss soon!

    return payable
}

function calculatePayroll(employeesArray) {
    const wagesArr = employeesArray.map(allWagesFor)
    const payRoll = wagesArr.reduce((total, currentWage) => total += currentWage, 0)
    return payRoll
}

