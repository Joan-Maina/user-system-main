CREATE OR ALTER PROCEDURE [dbo].[gettask]
	@taskid INT
AS
--reduce traffic
SET NOCOUNT ON;
BEGIN
	SELECT *
        FROM [dbo].[taskDetails]
                WHERE taskId = @taskid AND isDeleted = 0;
END;