CREATE OR ALTER PROCEDURE [dbo].[getprojectassignment]
	@projectid INT
AS
--reduce traffic
SET NOCOUNT ON;
BEGIN
	SELECT *
        FROM [dbo].[projectAssignment]
                WHERE projectId = @projectid;
END;