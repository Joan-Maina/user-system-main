CREATE OR ALTER PROCEDURE [dbo].[gettaskassignment]
	@taskid INT
AS
--reduce traffic
SET NOCOUNT ON;
BEGIN
	SELECT *
        FROM [dbo].[taskAssignment]
                WHERE taskId = @taskid;
END;