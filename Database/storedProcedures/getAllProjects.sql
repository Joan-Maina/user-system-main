CREATE OR ALTER PROCEDURE [dbo].[getallprojects]
AS
SET NOCOUNT ON;
BEGIN 
SELECT projectId, projectTitle, projectStartdate, projectEnddate,isCompleted 
FROM [dbo].[projectDetails]
WHERE isDeleted = 0;
END;
