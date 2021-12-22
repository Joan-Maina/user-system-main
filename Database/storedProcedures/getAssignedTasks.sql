CREATE OR ALTER PROCEDURE [dbo].[getassignedtasks]

AS
BEGIN
    SET NOCOUNT ON;
   SELECT taskDetails.taskId, taskTitle, taskStartDate, taskEnddate,isCompleted, taskAssignment.taskLead
   FROM [dbo].[taskDetails] INNER JOIN [dbo].[taskAssignment] ON taskDetails.taskId = taskAssignment.taskId
   WHERE isDeleted = 0;
END;
GO