CREATE OR ALTER PROCEDURE [dbo].[getTask]
	@taskid INT
AS
--reduce traffic
SET NOCOUNT ON;
BEGIN
	SELECT *
        FROM [dbo].[taskDetails]
                WHERE taskId = @taskid AND isDeleted = 0;
END;