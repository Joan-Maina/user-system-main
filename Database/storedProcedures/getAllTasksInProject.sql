CREATE OR ALTER PROCEDURE [dbo].[gettasksinproject]
(
    @id INT
)
AS
BEGIN
    SET NOCOUNT ON;
   SELECT taskId, taskTitle, taskStartDate, taskEnddate,isCompleted
   FROM [dbo].[taskDetails] 
   WHERE
   taskDetails.projectId = @id
   AND isDeleted = 0;
END;
GO