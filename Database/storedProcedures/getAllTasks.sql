CREATE OR ALTER PROCEDURE [dbo].[getalltasks]
AS
SET NOCOUNT ON;
BEGIN 
SELECT taskId, taskTitle, projectId, taskStartdate,taskEnddate,isCompleted 
FROM [dbo].[taskDetails]
WHERE isDeleted = 0;
END;