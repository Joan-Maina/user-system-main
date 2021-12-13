CREATE OR ALTER PROCEDURE [dbo].[gettasksinproject]
(
    @email VARCHAR(255)
)
AS
BEGIN
    SET NOCOUNT ON;
   SELECT  taskTitle, taskStartDate, taskEnddate,isCompleted
   FROM [dbo].[taskDetails]
   INNER JOIN taskAssignment ON taskAssignment.taskId = taskDetails.taskId 
   WHERE
   taskAssignment.taskLead = @email
   AND isDeleted = 0;
END;
GO