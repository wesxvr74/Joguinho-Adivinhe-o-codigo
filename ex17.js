const students = [
    {name: `Rudolf`, testGrade: 3},
    {name: `marye`, testGrade: 4},
    {name: `anne`, testGrade: 8},
    {name: `victu`, testGrade: 7},
    {name: `antony`, testGrade: 1},
    {name: `bruno`, testGrade: 5},
    {name: `diogo`, testGrade: 10},
    {name: `gustavo`, testGrade: 7},
    {name: `julious`, testGrade: 6},
    {name: `debs`, testGrade: 7},
    ];
    
    const approvedStudents= students.map( students =>{
        
        const results = {
            name: students.name,
            finalResult:students.testGrade >= 7 ? `approved` : `disaproved`,
        } 
        return results
    })
    
    console.log(approvedStudents);