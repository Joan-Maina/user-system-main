CREATE OR ALTER PROCEDURE [dbo].[getassignedtasks]
@email VARCHAR(255)
AS
BEGIN
    SET NOCOUNT ON;
   SELECT taskDetails.taskId, taskTitle,projectId, taskStartDate, taskEnddate,isCompleted
   FROM [dbo].[taskDetails] INNER JOIN [dbo].[taskAssignment] ON taskDetails.taskId = taskAssignment.taskId
   WHERE isDeleted = 0 AND taskAssignment.taskLead = @email;
END;
GO