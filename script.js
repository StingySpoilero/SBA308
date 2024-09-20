const courseInfo = {
    id: 3,
    name: "English 1301"
};

const assignmentGroup = {
    id: 1234,
    name: "Research Paper",
    course_id: 3,
    group_weight: 20,
    assignments: [
        {
            id: 1,
            name: "Proposal",
            due_at: "2024-08-23",
            points_possible: 150
        },
        {
            id: 2,
            name: "Rough Draft",
            due_at: "2024-09-20",
            points_possible: 150
        },
        {
            id: 3,
            name: "Final Draft",
            due_at: "2024-10-18",
            points_possible: 200
        },
      
    ]
};

const LearnerSubmissions = [
    {
        learner_id: 22,
        assignment_id: 1,
        submission: {
            submitted_at: "2024-08-21",
            score: 132
        }
    },
        {
            learner_id: 22,
            assignment_id: 2,
            submission: {
                submitted_at: "2024-09-17",
                score: 150
            }
        },
        {
            learner_id: 22,
            assignment_id: 3,
            submission: {
                submitted_at: "2024-10-06",
                score: 197
            }
        },
        {
            learner_id: 78,
            assignment_id: 1,
            submission: {
                submitted_at: "2024-08-23",
                score: 115
            }
        },
        {
            learner_id: 78,
            assignment_id: 2,
            submission: {
                submitted_at: "2024-09-19",
                score: 121
            }
        },
];

function getLearnerData(course, avg, submissions) {
let result = [
    {
    id: 22,
    avg: 0.94, // (132 + 150) / (150/150)
    1: 0.88, // 132 / 150
    2: 1.0 // 150 / 150
    },
    {
        id: 78,
        avg: 0.97, // (115 + 150) / (121 + 150)
        1: 0.76, // 115 / 150
        2: 0.80 // 121 / 150
    }
];
//Function is needed to validate the data
function validateData(courseInfo, assignmentGroup) {
    (function() {
        if (assignmentGroup.course_id !== courseInfo.id) {
            throw new Error("Assignment group does not belong to the course.");
        }
    })();

}
for (let i = 0; i < assignmentGroup.assignments.length; i++) {
    if (assignmentGroup.assignments[i].points_possible <= 0) {
        throw new Error("Points possible must be greater than zero.");
    }
}
//Function is needed to get the Learner Data, also included a try
function getLearnerData(courseInfo, assignmentGroup, submissions)
try {
    validateData(courseInfo, assignmentGroup);

    let results = {} //Results will go here
}
    return result;
}

const result = getLearnerData(courseInfo, assignmentGroup, LearnerSubmissions);

console.log(result);
