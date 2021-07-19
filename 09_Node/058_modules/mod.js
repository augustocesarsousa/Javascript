let firstName = 'Augusto';
let lastName = 'Sousa';

function fullName(){
    return firstName + ' ' + lastName;
}

// module.exports.firstName = firstName;
// module.exports.lastName = lastName;    
// module.exports.fullName = fullName;    

exports.firstName = firstName;
exports.lastName = lastName;    
exports.fullName = fullName;    