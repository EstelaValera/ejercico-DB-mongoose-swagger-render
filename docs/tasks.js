module.exports = {
    paths: {
        "/create": {
            post: {
                tags: ["Tasks"],
                description: "Create a task",
                requestBody: {
                content: {
                    "application/json": {
                    schema: {
                        type: "object",
                        properties: {
                            title: {
                            type: "string",
                            description: "Task title",
                            },
                        },
                    required: ["title"],
                },
            },
        },
        },
        responses: {
            201: {
                description: "Task created successfully",
            },
        },
    },
    },
    "/": {
        get: {
            tags: ["Tasks"],
            description: "Get all tasks",
            responses: {
                200: {
                    description: "A list of tasks",
                },
            },
        },
    },
    "/id/{_id}": {
        put: {
            tags: ["Tasks"],
            description: "Update task title",
            parameters: [
            {
            name: "_id",
            in: "path",
            required: true,
            schema: {
                type: "string",
            },
            description: "Task ID",
        },
        ],
        requestBody: {
            content: {
            "application/json": {
                schema: {
                    type: "object",
                    properties: {
                        title: {
                            type: "string",
                        },
                    },
                },
            },
        },
    },
        responses: {
            200: {
                description: "Task updated successfully",
            },
        },
    },
    delete: {
        tags: ["Tasks"],
        description: "Delete task by ID",
        parameters: [
        {
            name: "_id",
            in: "path",
            required: true,
            schema: {
                type: "string",
            },
            description: "Task ID",
        },
        ],
        responses: {
            200: {
            description: "Task deleted successfully",
            },
        },
    },
    },
},
};
