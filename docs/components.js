module.exports = {
    components:{
        schemas:{
            Task:{
                type:'object',
                properties:{
                    _id:{
                        type:'objectId',
                        description:"task identification number",
                        example:"6201064b0028de7866e2b2c4"
                    },
                    title:{
                        type:'string',
                        description:"Name of task to create",
                        example:"Aprendiendo swagger"
                    },
                    completed:{
                        type:'boolean',
                        description:"completed or not",
                        example:"false"
                    },
                    createdAt:{
                      type:'string',
                      description:"Date to create a Task",
                      example:"2024-09-30T08:14:00.665Z"
                    },
                    updatedAt:{
                      type:'string',
                      description:"Date to update a task",
                      example:"2024-09-30T19:03:26.148Z"
                    },
                    __v:{
                      type:'string',
                      description:"version task",
                      example:"0"
                    },
                }
            },
            TaskBody:{
              type:'object',
              properties:{
                  title:{
                      type:'string',
                      description:"Name of task to create",
                      example:"Aprendiendo swagger"
                  }
              }
          },
          TaskId:{
            type:'objectId',
            properties:{
                title:{
                    type:'string',
                    description:"Id task",
                    example:"6201064b0028de7866e2b2c4"
                }
            }
        }
        }
    }
}
