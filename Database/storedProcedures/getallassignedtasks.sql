CREATE OR ALTER PROCEDURE [dbo].[getallassignedtasks]
AS 
SET NOCOUNT ON
BEGIN

SELECT taskDetails.taskId,taskDetails.taskTitle, taskDetails.taskStartdate, taskDetails.taskEnddate, taskAssignment.taskLead 
FROM taskDetails 
INNER JOIN taskAssignment 
ON taskAssignment.taskId = taskDetails.taskId
WHERE taskDetails.isDeleted = 0;
END;