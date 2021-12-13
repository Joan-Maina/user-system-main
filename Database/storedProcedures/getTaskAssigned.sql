CREATE OR ALTER PROCEDURE [dbo].[gettaskassigned]
	@email VARCHAR(255)
AS
--reduce traffic
SET NOCOUNT ON;
BEGIN
	SELECT taskDetails.taskStartDate,taskDetails.taskEnddate,taskDetails.isCompleted,taskDetails.taskTitle, taskAssignment.taskLead 
        FROM taskDetails 
        INNER JOIN taskAssignment 
        ON taskAssignment.taskId = taskDetails.taskId 
        WHERE taskAssignment.taskLead = @email AND taskDetails.isCompleted = 0;
END;