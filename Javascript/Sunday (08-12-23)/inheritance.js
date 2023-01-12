//Goal all properties of TeachingSupport should be inside TSAssistant


const User = {
    name: "top name",
    email: "topuser@gmail.com"
}

const Teacher = {
    makeVideos: true
}

const TeachingSupport = {
    isAvailable: false,
    SupportTeam: 200
}

const TSAssistant = {
    makeAssignment: 'JS assignment',
    fullTime: true,
    __proto__:TeachingSupport  //Old way to do || This proto is declared property
}

// old Second way
Teacher.__proto__ = User;

//Modern way
Object.setPrototypeOf(TeachingSupport, Teacher)