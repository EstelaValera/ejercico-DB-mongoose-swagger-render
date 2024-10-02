module.exports = {
    paths: {
      "/create": {
        post: {
          tags: {
            Tasks: ": Create a task",
          },
          description: "Create Task",
          operationId: "createTask",
          parameters: [],
          requestBody: {
            content: {
              "application/json": {
                schema: {
                  $ref: "#/components/schemas/TaskBody",
                },
              },
            },
          },
          responses: {
            201: {
              description: "Task created successfully",
              content: {
                "application/json": {
                  schema: {
                    $ref: "#/components/schemas/Task",
                  },
                },
              },
            },
            500: {
              description: "Server error",
            },
          },
        }
      },
      "/": {
        get: {
          tags: {
            Tasks: ": Get all tasks",
          },
          description: "Get all Tasks",
          operationId: "getTasks",
          parameters: [],
          responses: {
            200: {
              description: "Task created successfully",
              content: {
                "application/json": {
                  schema: {
                    $ref: "#/components/schemas/Task",
                  },
                },
              },
            },
            404: {
              description: "task not found"
            },
            500: {
              description: "Server error",
            },
          },
        }
      },
      "/id/{_id}": {
        put: {
          tags: {
            Tasks: ": update task",
          },
          description: "update Task",
          operationId: "updateTask",
          parameters: [
            {
              name: "_id",
              in: "path",
              require: "true",
              
              description: "id to update"
            }
          ],
          requestBody: {
            content: {
              "application/json": {
                schema: {
                  $ref: "#/components/schemas/TaskBody",
                },
              },
            },
          },
          responses: {
            200: {
              description: "Task created successfully",
              content: {
                "application/json": {
                  schema: {
                    $ref: "#/components/schemas/Task",
                  },
                },
              },
            },
            404: {
              description: "task not found"
            },
            500: {
              description: "Server error",
            },
          },
        },
        delete: {
          tags: {
            Tasks: ": delete task",
          },
          description: "delete Task",
          operationId: "deleteTask",
          parameters: [
            {
              name: "_id",
              in: "path",
              require: "true",
              
              description: "delete to update"
            }
          ],
          responses: {
            200: {
              description: "Task deleted successfully",
            },
            404: {
              description: "task not found"
            },
            500: {
              description: "Server error",
            },
          },
        }
      },
    },
};  