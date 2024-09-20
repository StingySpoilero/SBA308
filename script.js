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
            submmited_at: "2024-08-21",
            score: 150
        },
        {
            learner_id: 22,
            assignment_id: 2,
            submission: {
                submmited_at: "2024-09-17",
                score: 132
            }
        },
        {
            learner_id: 78,
            assignment_id: 1,
            submission: {
                submmited_at: "2024-08-23",
                score: 115
            }
        },
        {
            learner_id: 78,
            assignment_id: 2,
            submission: {
                submmited_at: "2024-09-19",
                score: 121
            }
        },
    }
]

