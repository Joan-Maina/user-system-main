CREATE OR ALTER PROCEDURE [dbo].[getallprojects]
AS
BEGIN
    SET NOCOUNT ON;
   SELECT projectDetails.projectId,projectTitle, projectClient, projectStartdate, projectEnddate, userProjects.userone, userProjects.usertwo, userProjects.userthree, userProjects.userfour, userProjects.userfive
   FROM [dbo].[projectDetails]
LEFT JOIN [dbo].[userProjects] ON projectDetails.projectId = userProjects.projectId
   WHERE projectDetails.isDeleted = 0 AND projectDetails.isCompleted = 0;
END;
GO