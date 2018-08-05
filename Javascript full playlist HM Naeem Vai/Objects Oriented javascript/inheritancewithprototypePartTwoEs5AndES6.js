// inherit with es6 module

import information from './inheritancewithprototypeEs5AndES6'

class StudentInformation extends information {

    constructor (Personname, Personemail, Personid){
        super(Personname, Personemail);
        this.Personid = Personid
    }

    welcome () {
        super.printer();
        console.log(` PersonId :  ${this.Personid} `);
    }

}

export default StudentInformation