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

    function getLearnerData(courseInfo, assignmentGroup, submissions);
try {
    validateData(courseInfo, assignmentGroup);


}
submissions.forEach (submission => {
    try {
        const { learner_id, assignment_id, submission: { submitted_at, score } } = submission;
        // Process each submission here
    } catch (error) {
        console.error("Error processing submission:", error);
    }
});
if (typeof score !== 'number' || typeof assignment.points_possible !== 'number') {
    throw new Error("Score and points possible must be numbers.");
}
if (assignment.points_possible <= 0) {
    throw new Error("Points possible must be greater than zero.");
}
switch (true) {
    case typeof score !== 'number':
        throw new Error("Score must be a number.");
    case typeof assignment.points_possible !== 'number':
        throw new Error("Points possible must be a number.");
    case assignment.points_possible <= 0:
        throw new Error("Points possible must be greater than zero.");
    default:
        break;
}
// Record the score for this assignment as a percentage
results[learner_id].assignments[assignment_id] = (finalScore / assignment.points_possible);
results[learner_id].earnedPoints += finalScore; // Total points earned
results[learner_id].totalPoints += assignment.points_possible; // Total points possible
};
// Calculate average score for each learner
for (const learnerId in results) {
    const { earnedPoints, totalPoints } = results[learnerId];
    results[learnerId].avg = totalPoints > 0 ? (earnedPoints / totalPoints) : 0; // Average as a decimal
}
return Object.array(results); 
// Return the results as an array
let results {
    console.log (Error, error.message);
    return []; // Return an empty array in case of error
};
const result = getLearnerData(courseInfo, assignmentGroup, LearnerSubmissions);

console.log(result);
