function saturdayFun(activity = "roller-skate") {
    return `This Saturday, I want to ${activity}!`;
}

function mondayWork(activity = "go to the office"){
    return `This Monday, I will ${activity}.`;
}

function wrapAdjective(highLight, msg="You are"){
    const innerfunction = function(activity){
        return `${msg} ${highLight}${activity}${highLight}!`;
    };
    return innerfunction;
}
