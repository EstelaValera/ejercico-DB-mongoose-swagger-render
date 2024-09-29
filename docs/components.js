module.exports = {
    components: {
        schemas: {
            Task: {
                type: 'object',
                properties: {
                    _id: {
                        type: 'string',
                        description: 'Task ID',
                    },
                    title: {
                        type: 'string',
                        description: 'Task title',
                    },
                    completed: {
                        type: 'boolean',
                        description: 'Task status',
                    },
                    createdAt: {
                        type: 'string',
                        format: 'date-time',
                        description: 'Creation timestamp',
                    },
                    updatedAt: {
                        type: 'string',
                        format: 'date-time',
                        description: 'Update timestamp',
                    },
                },
            },
        },
    },
};
